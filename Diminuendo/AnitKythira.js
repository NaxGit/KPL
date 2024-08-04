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

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js').then((registration) => {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, (error) => {
			console.log('ServiceWorker registration failed: ', error);
		});
	});
}