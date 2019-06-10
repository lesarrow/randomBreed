'use strict';


function displayResults(jsonObj) {

    console.log(jsonObj);

    /* Build the HTML string for the images and 
       Replace the random dog container div with contents from the jsonObj */

    let images_html = `<h1>Here are your ${jsonObj.message.length} random dog pics:</h1>`;

    for (let i=0; i<jsonObj.message.length; i++)
        images_html += `<img class="dogpic" src="${jsonObj.message[i]}">`;

    $('.random-dog-container').html(images_html);

}

function handleDogApp() {

    $('form').submit(e => {
        e.preventDefault();
        console.log("Number of dog pics requested is: " + $('#quantity').val());
        fetch(`https://dog.ceo/api/breeds/image/random/${$('#quantity').val()}`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
    })
}

$(handleDogApp);