import React from 'react'
import Select, { createFilter } from 'react-select'
import './ReactDropdown.css' 



class ReactDropdown extends React.Component{
  constructor(props){
    super(props)
    this.getCountryName = this.props.getCountryName
  }
 styles = {
    container: base => ({
      ...base,
      flex: 1,
      color: 'Black',
      background: 'White'
    })
  };
  render() {
    return( <Select 
      styles = {this.styles}
      
    //classNamePrefix="foo"
    options={this.props.countryNames}
    onChange = {(event) => this.getCountryName(event.label)}
    filterOption ={createFilter({matchFrom: "start"})}
    />)
  }
  
}

export default ReactDropdown;
