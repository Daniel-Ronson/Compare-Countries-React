import React, { Component } from 'react';
import './CountryData.css'
import {connect} from 'react-redux'
const axios = require('axios');
class CountryData extends React.PureComponent {
        state = {
            countryData : [],
            isSet: false,
            countryName: '',
            componentId: ''
        }
    

    //only change state if the incoming props changed
    componentDidUpdate(prevProps) {
        if(prevProps.countryName !== this.props.countryName) {
         console.log('updating: ' + prevProps.countryName + ' != ' +  this.props.countryName)
          this.getData()
        }
      }

    componentDidMount(){
        console.log('mounting')
        this.getData()
    }

    //http GET request
    getData = () => {
        axios.get(`http://127.0.0.1:3000/countries/${this.props.countryName}`)
        .then(response => {
            const countriesData = response.data.map(el => ({
                areaKm: el.area,
                capital: el.capital,
                population: el.population,
                flagURL: el.flag,
                region: el.region,
                language: el.language
            }))
            const returnObject = {
                flag : true,
                countryData: countriesData[0]
            }
            this.setState({isSet: returnObject.flag,countryData:countriesData[0], countryName:countriesData[0].name, componentId: this.props.keys, countryName: this.props.countryName})
            this.props.onChangeCountry(this.state.countryData,this.state.countryName,this.state.componentId)
        })
        .catch(error =>{
            console.log(error)
            return null
        })
    }
    
    render() {
        //if the state has been set already, iterate through the state data and produce the output
        const output = this.state.isSet ? Object.keys(this.state.countryData) //Object.keys get the property names in the object
        .map((keyName, i) => (
            <p key={i}>
            {keyName}: {this.state.countryData[keyName]}
            </p>
        )) : <div>...Loading</div> //else, the user cannot connect to node server
     
        return (
            <div className = "countryInformation">
                <p>{this.props.countryName}</p>
                <div>{output}</div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        countryA: store.countryA
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeCountry: (data,name,keyVal) => dispatch({type:'SETCOUNTRYDATA',countryData:data,countryName:name, key:keyVal})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountryData);

/*
    shouldComponentUpdate(nextProps, nextState){
        return this.props.countryName == nextProps.countryName ? true : false
    }


*/