var request1 = new XMLHttpRequest();

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
console.log("Before word loaded");

request1.open('GET', 'https://odmiana.github.io/data/odebrać.json', true);
request1.onload = function() {
    console.log("Start parsing word");

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request1.status >= 200 && request1.status < 400) {

        // data.forEach(movie => {
        //     console.log(movie.title)
        for (let [key, value] of Object.entries(data)) {
            console.log(key);
            if (value !== null) {
                if (typeof value === 'object') {
                    for (let [key1, value1] of Object.entries(value)) {
                        console.log(key1, ":", value1);
                    }
                } else if (Array.isArray(value)) {
                    for (index = 0; index < value.length; index++) {
                        console.log(value[index]);
                    }
                } else {
                    console.log(value);
                }
            }
        }
        console.log(data["Postać"])
    } else {
        console.log('error')
    }
    // })
    console.log("Stop parsing word");
};
request1.send();

console.log("After word loaded");

var request = new XMLHttpRequest();

request.open('GET', 'data/_infinitive-index.json', true);
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        var node = document.createElement("LI");                 // Create a <li> node
        var textNode = document.createTextNode(obj);         // Create a text node
        node.appendChild(textNode);                              // Append the text to <li>
        document.getElementById("myList").appendChild(node);
        console.log(obj);
    }
};

request.send();

console.log("The end");
