import {offers} from './generate.js';
import renderCard from './offer.js';


console.log(offers)
renderCard(offers[0]);

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(renderCard(offers[0]));
