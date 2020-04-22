import React from 'react'
import './Dropdown.css'
const axios = require('axios')

class Dropdown extends React.Component {

        state={
            countries: [],
            userCountrySearch: [],
            displayItems: false,
            inputValue: ''     
          }
    

    componentDidMount(){
        axios.get(`http://127.0.0.1:3000/all/countryNames`)
            .then(response => {
                this.setState({countries:response.data});
            })
            .catch(error =>{
                console.log(error)
            })
    }

    toggleDropdown = () =>{
        const toggleFlag = !this.state.displayItems
        this.setState({displayItems:toggleFlag})
    }

    searchDropdownItems = () => {
        var matchingItems = []
         this.state.countries.forEach(el =>{
            if(el.name.startsWith(this.state.inputValue)) matchingItems.push(el.name);
         })
        this.setState({userCountrySearch:matchingItems})
        console.log('Searching ' + this.state.userCountrySearch)
    }

    updateInputValue = (event) => {
        const input = event.target.value
        this.setState({inputValue:input})

        if(input != '')
        this.searchDropdownItems()
    }


    render(){
        const countries = this.state.countries.map(country =>{
            return <p>{country.name}</p>
        });

        return(
            <div className ="dropdown">
                <input onClick={this.toggleDropdown} className="dropbtn" type="text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)} placeholder="Select a Country"/>
                <div className="dropdown-content">
                    {this.state.displayItems && countries}
                </div>           
            </div>
        );
    }
}

export default Dropdown;