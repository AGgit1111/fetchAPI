// URL of the public API
// There are 100 ids in the json URL. The first URL will be successfull. The second will print the error message.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/101';

// Use fetch function to make the GET request
fetch(apiUrl)
    .then(response => {
        // The fetch promise resolves with the Response object.
        // We need to call .json() to get the JSON content.
        if (!response.ok) { // NOT ok
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Log the data to the console
        console.log(data);
    })
    .catch(error => {
        // Log any errors to the console
        // 'console.error()' is the same as 'console.log()' but highlights the message in red to stand out as an error.
        console.error('There has been a problem with your fetch operation:', error);
    });