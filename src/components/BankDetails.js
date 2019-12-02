import React from 'react';

const BankDetails = (props) => {

    const bank = props.location.state.detail;
    console.log(bank);
    return (
        <div className="bankDetails">
            <h4>Bank Name:{bank.bank_name}</h4>
            <h4>City:{bank.city}</h4>
            <h4>Address:{bank.address}</h4>
        </div>
    );
}

export default BankDetails;
