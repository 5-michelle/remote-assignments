const url = "https://api.appworks-school-campus3.online/api/v1/clock/delay";

function requestCallback(url, callback) {
    // write code to request url asynchronously
    const start = Date.now();
    
    var request = require('request');

    request({ url, json: true }, (error, { body }) => {
        if (error) { return console.log(error) }

        const end = Date.now();
        callback(`Execution time: ${end - start} ms`);
      })
}


function requestPromise(url) {
        // write code to request url asynchronously with Promise
        const start = Date.now();

        return fetch(url)
        .then(response => {
            const end = Date.now();
            return `Execution time2: ${end - start} ms` //there must be return value in Promise. 
            //resolve('Execution time2: ${end - start} ms');
        }).catch(err => {
            console.log(err);
          });
}

async function requestAsyncAwait(url) {
    // write code to request url asynchronously
    // you should call requestPromise here and get the result usingasync/await.
    const start = Date.now();

    const res = await requestPromise(url);

    const end = Date.now();
    console.log(`Execution time3: ${end - start} ms`);
}

requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log);
requestAsyncAwait(url);