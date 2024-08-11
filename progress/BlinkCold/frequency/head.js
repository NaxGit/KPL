customElements.define
(
	'aurora-head', class extends HTMLElement
{
	constructor()
{
	super();

const DOM = this.attachShadow({ mode: 'open' });

const CSS = document.createElement('link');
CSS.rel = 'stylesheet';
CSS.href = './occurrence/head.css';

const menu = document.createElement('div');
      menu.className = 'menu';
      menu.textContent = '☰';



const list = document.createElement('div');
list.className = 'list';

[
	'KPL 2024 Season',
	'Match Fixture',
	'The Auction',
	'The Teams',
	'Upcoming',
	'Results',
	'LiveScore',
	'High Score',
	'Points Table',
	'longstal'
].forEach
(
	i =>
{
	const item = document.createElement('div');
	item.className = 'item';
	item.textContent = i;
	list.append(item);
}
);



DOM.append(CSS,menu,list);
};

connectedCallback()
{
	const aside = this.shadowRoot.querySelector('.list');
	const menu = this.shadowRoot.querySelector('.menu');

	this.addEventListener('click', () => {
		
// aside.style.height = `${aside.scrollHeight}px`;
		
		
aside.classList.toggle('expanded');
menu.classList.toggle('tost');






		// element.classList.toggle('expanded');

			// document.getElementById('nav-links').classList.toggle('active');
		});
  }



	});






