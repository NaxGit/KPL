const list = document.querySelector('.list');
const menu = document.querySelector('header');
const matches = document.querySelector('.matches');
const teams = document.querySelector('.teams');

menu.addEventListener('click', () => { list.classList.toggle('expanded'); });


document.getElementById('M2').addEventListener('click', () => {
	matches.classList.toggle('show');
	teams.classList.remove('show');
});
document.getElementById('M4').addEventListener('click', () => {
	teams.classList.toggle('show');
	matches.classList.remove('show');
});

// main.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
