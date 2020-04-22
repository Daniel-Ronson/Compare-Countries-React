const initialState = {
    countryA: '',
    countryB:'',
    val: 'test',
    countryDataA:{},
    countryDataB:{}
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'SETCOUNTRYDATA':
            const {areaKm,capital,population,flagURL,region,language} = action.countryData
            if (action.key == "A"){           
            return{
                ...state,
                countryA: action.countryName,
                countryDataA:{
                    ...state.countryDataA,
                    areaKm: areaKm,
                    capital: capital,
                    population: population,
                    flagURL: flagURL,
                    region: region,
                    language: language
                }
            }
        }
        else
            return{
                ...state,
                countryB: action.countryName,
                countryDataB:{
                    ...state.countryDataB,
                    areaKm: areaKm,
                    capital: capital,
                    population: population,
                    flagURL: flagURL,
                    region: region,
                    language: language
                }
            }
        default:
            return state
    }
}

export default reducer;