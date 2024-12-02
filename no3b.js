function fetchName(url) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw ('There was something wrong');
        }
        return response.json();
    })
    .then(data => {
        const name = data.map(data => data.name);
        console.log(name);
    })
    .catch(err => {
        console.error('Error:', err);
    })
}
fetchName()