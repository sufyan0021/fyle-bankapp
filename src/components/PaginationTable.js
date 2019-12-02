import React, { useState } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import DropSearch from './DropSearch';

const PaginationTable = (props) => {

    const [banks, setBanks] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = (city) => {
        setLoading(true);
        axios.get('https://vast-shore-74260.herokuapp.com/banks?city=' + city)
            .then(res => {
                setLoading(false);
                setBanks(res.data);
            })
    }

    const detailsBank = {
        rowDetails: {},
        getRowDetails: (rowDetails) => {
            detailsBank.rowDetails = {
                bankname: rowDetails.bank_name,
                city: rowDetails.city,
                address: rowDetails.address
            }
        }
    }


    const handleChange = (city) => {
        getData(city);
    }

    function MyCell({ value }) {
        return <div className="rowInfo">{value}</div>
    }
    const columns = [{
        Header: 'Bank Name',
        accessor: 'bank_name',
        Cell: MyCell
    }, {
        Header: 'City',
        accessor: 'city',
        Cell: MyCell
    }, {
        Header: 'Address',
        accessor: 'address',
        Cell: MyCell
    }]

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(row);
        }
    };

    return <div>
        <DropSearch handleChange={handleChange} />
        <ReactTable
            loading={loading}
            data={banks}
            columns={columns}
            rowKey={banks => banks.id}
            getTrProps={(state, rowInfo, column, instance, row) => ({
                onClick: e => {
                    props.history.push({
                        pathname: '/bank-detail',
                        state: { detail: rowInfo.original }
                    });
                }
            })}
        /></div>;
}

export default PaginationTable;
