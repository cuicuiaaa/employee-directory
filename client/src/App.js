import React, { Component } from 'react'
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import "./App.css";

export class App extends Component {
  state = {
    data: [{
      "id": 1,
      "first_name": "Maureene",
      "last_name": "Nealand",
      "email": "mnealand0@yale.edu",
      "gender": "Female"
    }, {
      "id": 2,
      "first_name": "Torrie",
      "last_name": "Ruckledge",
      "email": "truckledge1@shinystat.com",
      "gender": "Female"
    }, {
      "id": 3,
      "first_name": "Pernell",
      "last_name": "Gaine of England",
      "email": "pgaineofengland2@webs.com",
      "gender": "Male"
    }, {
      "id": 4,
      "first_name": "Cleveland",
      "last_name": "Lednor",
      "email": "clednor3@washingtonpost.com",
      "gender": "Male"
    }, {
      "id": 5,
      "first_name": "Adria",
      "last_name": "Maw",
      "email": "amaw4@accuweather.com",
      "gender": "Female"
    }, {
      "id": 6,
      "first_name": "Cthrine",
      "last_name": "Emett",
      "email": "cemett5@reference.com",
      "gender": "Female"
    }, {
      "id": 7,
      "first_name": "Gretchen",
      "last_name": "Schurig",
      "email": "gschurig6@weibo.com",
      "gender": "Female"
    }, {
      "id": 8,
      "first_name": "Sabrina",
      "last_name": "Beardsworth",
      "email": "sbeardsworth7@house.gov",
      "gender": "Female"
    }, {
      "id": 9,
      "first_name": "Bari",
      "last_name": "Hobben",
      "email": "bhobben8@google.nl",
      "gender": "Female"
    }, {
      "id": 10,
      "first_name": "Dewitt",
      "last_name": "Stelle",
      "email": "dstelle9@rambler.ru",
      "gender": "Male"
    }, {
      "id": 11,
      "first_name": "Derry",
      "last_name": "Bartel",
      "email": "dbartela@nifty.com",
      "gender": "Male"
    }, {
      "id": 12,
      "first_name": "Trent",
      "last_name": "Uwins",
      "email": "tuwinsb@webs.com",
      "gender": "Male"
    }, {
      "id": 13,
      "first_name": "Mora",
      "last_name": "Tolussi",
      "email": "mtolussic@edublogs.org",
      "gender": "Female"
    }, {
      "id": 14,
      "first_name": "Britt",
      "last_name": "Stickney",
      "email": "bstickneyd@geocities.com",
      "gender": "Female"
    }, {
      "id": 15,
      "first_name": "Ev",
      "last_name": "Livesey",
      "email": "eliveseye@1688.com",
      "gender": "Male"
    }, {
      "id": 16,
      "first_name": "Cloris",
      "last_name": "Warhurst",
      "email": "cwarhurstf@guardian.co.uk",
      "gender": "Female"
    }, {
      "id": 17,
      "first_name": "Kev",
      "last_name": "Sankey",
      "email": "ksankeyg@rediff.com",
      "gender": "Male"
    }, {
      "id": 18,
      "first_name": "Harriot",
      "last_name": "Husselbee",
      "email": "hhusselbeeh@yolasite.com",
      "gender": "Female"
    }, {
      "id": 19,
      "first_name": "Karim",
      "last_name": "Codlin",
      "email": "kcodlini@yolasite.com",
      "gender": "Male"
    }, {
      "id": 20,
      "first_name": "Roxie",
      "last_name": "Degli Antoni",
      "email": "rdegliantonij@huffingtonpost.com",
      "gender": "Female"
    }],
    search: ""
  }

  onChange = (e) => {
    const search = e.target.value;
    this.setState({search: search});
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Search onChange={this.onChange}/>
        <Table search={this.state.search} data={this.state.data}/>
      </div>
    )
  }
}

export default App;
