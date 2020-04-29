import axios from 'axios';

const ip = 'http://127.0.0.1:3000'
export const getCountryData = async (countryName) =>{
    try{
        const  response = await axios.get(ip + '/countries/' + countryName);
        console.log(response)
        const countriesData = response.data.map(el => ({
            kek: el._id,
            areaKm: el.area,
            capital: el.capital,
            population: el.population,
            flagURL: el.flag,
            region: el.region,
            language: el.language
        }))
        return countriesData[0];
    }
    catch(error){
        console.log('error fetching country data');
    }
}


