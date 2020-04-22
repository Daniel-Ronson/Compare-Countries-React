import ReactDropdown from './Dropdown/ReactDropdown'
import CountryData from './CountryData/CountryData.js'
import './MainContent.css' 
import React from 'react';
import Canvas from './Canvas/Canvas.js'
import {connect} from 'react-redux'
//import state from './store/reducer.js'
import imageAtlas from '../images/atlas.jpg';
const axios = require('axios')

class MainContent extends React.Component{
    state ={
        countryNames:[],
        countryA:'',
        countryB:'',
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:3000/order/countryNames`)
            .then(response => {
                const countriesData = response.data.map(el => ({
                  value: el._id,
                  label: el.name
                }))
                this.setState({countryNames:countriesData});
            })
            .catch(error =>{
                console.log(error)
            })
    }

    alterCountryA = (countryName) =>{
        this.setState({countryA:countryName})
    }
    alterCountryB = (countryName) =>{
        this.setState({countryB:countryName})
    }

    countryStyles = {
        countryData: {
            padding: '5px 30px 30px 30px',
            backgroundImage: imageAtlas,
            backgroundSize: '500px 250px'
        }
    }

    render(){
        return(
            <div>
            <div className = "flexRow">
                <div className="dropdownContainer"> 
                    <ReactDropdown countryNames ={this.state.countryNames} getCountryName = {this.alterCountryA}/>
                    <ReactDropdown countryNames ={this.state.countryNames} getCountryName = {this.alterCountryB}/>
                </div>
            </div>
           
                <div className = "flexRow " style = {this.countryStyles.countryData}>                 
                    {this.state.countryA !== '' ? <CountryData countryName={this.state.countryA} keys={'A'}/> : null}
                    {this.state.countryB !== '' ? <CountryData countryName={this.state.countryB} keys={'B'}/> : null}
                </div>
                <Canvas areaKmA = {this.props.countryDataA.areaKm} areaKmB = {this.props.countryDataB.areaKm} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        countryA: store.countryA,
        countryB: store.countryB,
        countryDataA: store.countryDataA,
        countryDataB: store.countryDataB

    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContent);
//className = "flexRow countryData">  
//  display a vs B{this.state.countryA && this.state.countryB !== '' ? <p className="test">{this.props.countryA} vs {this.props.countryB}</p> : null}
