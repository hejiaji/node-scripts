const axios = require('axios')
axios
    .get('http://www.google.com')
    .then(res => {
        console.log('success');
    })
    .catch(error => {
        console.error(error)
    });

