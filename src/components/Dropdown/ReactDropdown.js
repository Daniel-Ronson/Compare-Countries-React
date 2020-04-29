import Select, { createFilter } from 'react-select'
import './ReactDropdown.css' 
import React, { useState, useEffect } from 'react';



const ReactDropdown = ({countryNames,getCountryName}) => {

    return( <Select 
      className="dropdown-style"
    options={countryNames}
    onChange = {(event) => getCountryName(event.label)}
    filterOption ={createFilter({matchFrom: "start"})}
    />)
   
}

export default ReactDropdown;
