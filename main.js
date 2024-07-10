import './style.css'
import {initPWA} from "./pwa.js";

let app  = document.querySelector('#app').innerHTML = `
  <iframe src="https://sim.ummhospital.com/" width="100%" height="100%" scrolling="auto"></iframe> 
`;

initPWA(app);
