
export const getWeatherApi = () => {
    
    const URL = 'http://api.openweathermap.org/data/2.5/weather';
    const ID_CITY = "id=625144";
    const KEY = 'APPID=d00e8ae29b75e5f0b5270280f2da7357';

    fetch(`${URL}?${ID_CITY}&${KEY}`)
    .then(res => res.json())
    .then(result => console.log(result))
}
getWeatherApi();