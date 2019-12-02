import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DropSearch from './components/DropSearch';
import PaginationTable from './components/PaginationTable';
import BankDetails from './components/BankDetails';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/bank-detail' render={(props) => <BankDetails {...props} />}></Route>
            <Route exact path='/' render={(props) => <PaginationTable {...props} />}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;