import React, { Component } from 'react';
import './CountryData.css'
import {connect} from 'react-redux'
import {getCountryData} from '../../api/index'
const axios = require('axios');
class CountryData extends React.PureComponent {
        state = {
            countryData : {},
            isSet: false,
            countryName: '',
            componentId: ''
        }
    

    //only change state if the incoming props changed
    async componentDidUpdate(prevProps) {
        if(prevProps.countryName !== this.props.countryName) {
         console.log('updating: ' + prevProps.countryName + ' != ' +  this.props.countryName)
          const countryData = await getCountryData(this.props.countryName)  
          //set state
          this.setState({isSet: true,countryData:countryData, componentId: this.props.keys, countryName: this.props.countryName})
          //redux call
          this.props.onChangeCountry(this.state.countryData,this.state.countryName,this.state.componentId)
        }
      }

    async componentDidMount(){
        console.log('mounting')
        const countryData = await getCountryData(this.props.countryName)          
        this.setState({isSet: true,countryData:countryData, componentId: this.props.keys, countryName: this.props.countryName});

        //redux call
        this.props.onChangeCountry(this.state.countryData,this.state.countryName,this.state.componentId)        
    }

 
    render() {
        const {areaKm, capital, population, flagURL, region, language} = this.state.countryData
        return (
            <div className = "countryInformation">
                 <p>{this.state.countryName}</p> 
                 <p>areakKm: {areaKm}</p>
                 <p>capital: {capital}</p>
                 <p>population: {population}</p>
                 <p>flag: {flagURL}</p>
                 <p>region: {region}</p>
                <p>language: {language}</p>
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