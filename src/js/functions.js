export function renderListMarkup (data, element) {
    data.map((country) => {
       element.insertAdjacentHTML('beforeend',`<li class="country-item"><img class="country-icon"
       src="${country.flags.svg}" alt="flag" width="70px" >${country.name}</li>`);
    })
 };

 export function renderCardMarkup (data, element ) {
    const languages = data[0].languages.map(({name}) => name).join(',');
    element.insertAdjacentHTML( 'afterbegin', `<img class="country-icon  single"
    src="${data[0].flags.svg}" alt="flag" width="70px"
    ><h2 class="country-title">${data[0].name}</h2>
    <ul class="country-description">
      <li class="country-description-item">Capital: ${data[0].capital}</li>
      <li class="country-description-item">Population: ${data[0].population}</li>
      <li class="country-description-item">Languages: ${languages}</li>
      <li class="country-description-item">Native name: ${data[0].nativeName}</li>
    </ul>`);
   
 };

 export function rashkaReject (data) {
    const xRushka = data.find(c => c.name === 'Russian Federation');
    if (xRushka) {
       const x = data.indexOf(xRushka);
       data[x].name = 'кремлядський рашкастан(тимчасово!)'
 }
 };

 export function  trimEnterValueToLowerCase (e) {
  return e.target.value.trim().toLowerCase();
};

