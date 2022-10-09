import debounce from "lodash.debounce";
import { Notify } from "notiflix";
import getRefs from './get-refs';
import '../css/styles.css';
import Api from './fetchCountries';
import {renderListMarkup, renderCardMarkup, rashkaReject, trimEnterValueToLowerCase, } from './functions';

const DEBOUNCE_DELAY = 700;
const FAILURE_MESSAGE ='Oops, there is no country with that name';
const INFO_MESSAGE = 'Too many matches found. Please enter a more specific name.';

const refs = getRefs();
const bodyStyle = refs.body.style;

refs.input.placeholder = "Enter the name of the country";

 refs.input.addEventListener('input', debounce( countrieDataCard, DEBOUNCE_DELAY));

   function countrieDataCard(e) {
      refs.list.innerHTML = '';
      refs.card.innerHTML = '';
      bodyStyle.background = '#30302694';
      bodyStyle.backgroundImage = ' linear-gradient( to top right, rgba(11, 11, 11, 0.153) 7%, rgba(224,230,39,0.6558998599439776) 52%, rgba(12,144,171,0.7063200280112045) 87%)';
      bodyStyle.backgroundRepeat = 'no-repeat';
      bodyStyle.backgroundSize = '100vw 100vh';
      
     const enterValue = e.target.value;
   if(enterValue !== '') {
      Api.fetchCountries(trimEnterValueToLowerCase(e)).then(data => {
            rashkaReject(data);
   return data;
    }).then( data => {
      if (data.length === 1) {
         renderCardMarkup(data, refs.card,);
         bodyStyle.backgroundImage = `url('${data[0].flags.svg}')`;
         bodyStyle.backgroundSize = '100vw 100vh';
      }  return data;
    }).then( data => {
      if (data.length >= 2 && data.length <= 10) {
         renderListMarkup(data, refs.list);
     } return data;
   }).then(data => {
      if (data.length > 10) {
        Notify.info(`${INFO_MESSAGE}`, {
           width: '30vw',
           fontSize: '21px',
           info: {
              textColor: '#000',
            },
        });
        }
  }).catch((error) => {
      console.log(error);
       Notify.failure(`${FAILURE_MESSAGE}`, {
         width: '30vw',
         fontSize: '21px',
        failure: {
         textColor: '#000',
        },
       },)
   });
}
}
