document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = {
        Mobile: name,
        email: email
    };

    fetch('https://api.backendless.com/3F5D260F-1D3B-4696-B11E-99B5F9D65C14/FFA0C9BF-A97B-4628-860C-21DEEC84711E/data/KPL-Users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
