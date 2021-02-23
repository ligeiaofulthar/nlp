import { handleSubmit } from './js/formHandler'
import { checkUrl } from './js/urlChecker'

import img from './img/yulia_logo.svg'


import './../client/scss/appStyles.scss';

console.log("CHANGE!!");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
        }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
        });
        });
    }

export {
    handleSubmit, checkUrl, img
}
