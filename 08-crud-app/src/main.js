import './style.css'
import { UsersApp } from './users/user.app';


document.querySelector('#app').innerHTML = `
<main>
  <h1 id="app-tittle">Hola Mundo</h1>
  <section class="information-cardf"></section>
  <div class="card"></div>
</main>
`;

const element = document.querySelector('.card');

UsersApp( element );