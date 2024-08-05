const shareData =
{
	title: "KPL 2024 🏏",
	text: "Follow Kisumu Premier League on your phone",
	url: "https://naxgit.github.io/KPL/",
};

document.querySelector('button').addEventListener('click',  async () => {
	if( navigator.share !== undefined )
		{
		try
		{
			await navigator.share(shareData);
		}
		catch (err)
		{
			document.querySelector('button').textContent = '֎';
		}
		}
	else
	{
		document.querySelector('button').textContent = '֎';
	}
});