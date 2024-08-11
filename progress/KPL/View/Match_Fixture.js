const fragment = new DocumentFragment();

fetch('json/MatchFixture.JSON').then(i => i.json()).then(i => { generate(i) }).catch();

function generate(params) {

	params.forEach
		(
			({ home, hOve, away, aOve, date, past, come }) => {

				if (past) {

					let article = document.createElement('article');

					let one = document.createElement('div');
					let Home = document.createElement('span'); Home.textContent = home;
					let Away = document.createElement('span'); Away.textContent = away;
					one.append(Home, Away);

					let tri = document.createElement('section');
					let hove = document.createElement('p'); hove.textContent = home;
					let hspa = document.createElement('small'); hspa.textContent = hOve;
					let aove = document.createElement('p'); aove.textContent = away + ' 🏆';
					let aspa = document.createElement('small'); aspa.textContent = aOve;
					let Date = document.createElement('p'); Date.textContent = date;
					tri.append(hove, hspa, aove, aspa, Date);

					let two = document.createElement('details');
					let Come = document.createElement('summary'); Come.textContent = come;
					two.append(Come, tri);

					article.append(one, two); fragment.append(article);

				}

			}
		)

	document.querySelector('main').className = 'Match-Fixture';
	document.querySelector('main').append(fragment);

};