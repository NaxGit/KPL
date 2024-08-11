class CustomContainer extends HTMLElement
{
	constructor()
{
	super();

const DOM = this.attachShadow({ mode: 'open' });

const CSS = document.createElement('link');
      CSS.rel = 'stylesheet';
	  CSS.href = './occurrence/matches.css';

const main = document.createElement('article');
const home = document.createElement('div'); home.textContent = 'ISTKolkata Knight Riders';
const vice = document.createElement('span'); vice.textContent = 'Vs';
const away = document.createElement('div'); away.textContent = 'ISTSunrisers Hyderabad';
main.append(home,vice,away)
DOM.append(CSS,main)

}
}
customElements.define('match-container', CustomContainer);