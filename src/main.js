import { iniciarSesion } from './components/login.js';
import { register } from './components/register.js';
const routes = {
  '/' : iniciarSesion,
  '/register' : register,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
