fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(repoonse) {
        return repoonse.json();
    })
    .then(function(data) {
        console.log(data)
    })