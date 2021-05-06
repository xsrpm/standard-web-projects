import Header from '../templates/header.js';
import Home from '../pages/home.js';
import Character from '../pages/character.js';
import Error404 from '../pages/error404.js';
import getHash from '../utils/get-hash.js';
import resolveRoutes from '../utils/resolve-routes.js';

const routes = {
    '/':Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById("content")
    header.innerHTML= await Header();
    let hash = getHash();
    let route = await  resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML =  await render();
}

export default router;