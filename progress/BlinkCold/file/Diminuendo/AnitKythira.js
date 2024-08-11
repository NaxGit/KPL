document.querySelector('ul').classList.toggle('expand');

document.querySelector('header').addEventListener('click', () => {
	document.querySelector('ul').classList.toggle('expand');
});


//Match Fixture
document.getElementById('M2').addEventListener('click', () => {
	closepages();
	document.getElementById('MatchFixture').classList.toggle('pgBody');
});

//The Auction
document.getElementById('M3').addEventListener('click', () => {
	closepages();
	document.getElementById('TheAuction').classList.toggle('pgBody');
});

//The Teams
document.getElementById('M4').addEventListener('click', () => {
	closepages();
	document.getElementById('TheTeams').classList.toggle('pgBody');
});

//The Teams
document.getElementById('M6').addEventListener('click', () => {
	console.log(1);
	
	closepages();
	document.getElementById('Results').classList.toggle('pgBody');
});



function closepages()
{
document.querySelectorAll('section').forEach(section => {section.classList.remove('pgBody');});
}

document.getElementById('teams').addEventListener
(
	'click', (e) => {
		if (e.target.matches('h2')) {
			const IDs = e.target.textContent.replace(' ', '');
			console.log(IDs);
			
			document.getElementById(IDs).classList.toggle('teamShow');
		}
	}
);

document.getElementById('R1').addEventListener('click', (e) => {document.getElementById('CR1').classList.toggle('commentary')});
document.getElementById('R2').addEventListener('click', (e) => {document.getElementById('CR2').classList.toggle('commentary')});
document.getElementById('R3').addEventListener('click', (e) => {document.getElementById('CR3').classList.toggle('commentary')});
document.getElementById('R4').addEventListener('click', (e) => {document.getElementById('CR4').classList.toggle('commentary')});
document.getElementById('R5').addEventListener('click', (e) => {document.getElementById('CR5').classList.toggle('commentary')});
document.getElementById('R6').addEventListener('click', (e) => {document.getElementById('CR6').classList.toggle('commentary')});
document.getElementById('R8').addEventListener('click', (e) => {document.getElementById('CR8').classList.toggle('commentary')});
document.getElementById('R9').addEventListener('click', (e) => {document.getElementById('CR9').classList.toggle('commentary')});
document.getElementById('R10').addEventListener('click', (e) => {document.getElementById('CR10').classList.toggle('commentary')});
document.getElementById('R11').addEventListener('click', (e) => {document.getElementById('CR11').classList.toggle('commentary')});

document.getElementById('SR1').addEventListener('click', (e) => {document.getElementById('SCR1').classList.toggle('commentary')});

document.getElementById('SR2').addEventListener('click', (e) => {document.getElementById('SCR2').classList.toggle('commentary')});

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then((registration) => {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, (error) => {
			console.log('ServiceWorker registration failed: ', error);
		});
	});
}