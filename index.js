'use strict';


function displayResult(jsonObj, breed) {

    console.log(jsonObj);

    /* Build the HTML string for the image and 
       Replace the random dog container div with contents from the jsonObj  */

    let image_html;

    if (jsonObj.status === "success") {
        image_html = `<h1>Here is your random ${breed} pic:</h1>`;
        image_html += `<img class="dogpic" src="${jsonObj.message}">`;
    } 
    else {
        image_html = `<h1>Sorry, the breed "${breed}" was not found in the image database.</h1>`;
    }

    $('.random-dog-container').html(image_html);

}

function handleDogApp() {

    $('form').submit(e => {
        e.preventDefault();
        let breed = $('#breed').val();
        console.log("Breed requested is: " + breed);
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(response => response.json())
            .then(responseJson => displayResult(responseJson, breed));
    })
}

$(handleDogApp);