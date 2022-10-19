import './style.css';
import postScore from './modules/post.js';
import refresh from './modules/refresh.js';

document.getElementById('data-submit').addEventListener('submit', postScore);
document.querySelector('.btn-refresh').addEventListener('click', refresh);