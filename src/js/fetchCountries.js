const BASE_URL = 'https://restcountries.com/v2';
const FILTER_URL_FIELDS = 'name,capital,population,flags,languages,nativeName';


 function fetchCountries(value) {
  if (value !== '') {
 return fetch(`${BASE_URL}/name/${value}?fields=${FILTER_URL_FIELDS}`).then( response => {
    if (!response.ok) {
    throw new Error(response.status);
        }
return response.json();
})
}
 }
export default { fetchCountries }