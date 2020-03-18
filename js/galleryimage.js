/**
 * Display images in gallery from JSON file
 * var: div(to add images to)
 * FETCH json from json file
 * .then(function() {
 *      for images in imageArray
 *      parse json
 *      display file
 * })
*/

/**
 * FROM LAB DEMO
 * =============
 * 1.) Send request to file. 
 *  Returns a promise containing either: Pending, Fulfilled or Rejected.
 * 
 *  -> fetch(JSON-URL)
 * 
 * 2.) Then do some function with the response
 * 
 * -> .then(
 *      function(response) {
 *          
 *      }
 *    );
 * 
 * 3.) Then get the JSON from the data 
 * 
 * -> function(response) {
 *      response.json().then( {
 *          
 *      });
 *    }
 * 
 * 4.) Need a container div for images .slideshow
 *      - contains nav for buttons
 *      - div for images .slideshow-images #ss-images
 * 
 * 
 */

var container = document.getElementById('gallery-image-container');

fetch('js/json/images.json')
.then(function(res) {

    res.json().then(function(json) {

        json.images.forEach(function(el, i) { //could use for loop.
            

            //Create a link for image.
            var image = document.createElement('a');

            //Create link to open image in new page
            image.target = "_blank";
            image.href = el.URL;

            //Create a figure
            var figure = document.createElement('figure');

            //Create an image from JSON url.
            var imageElement = document.createElement('img');
            imageElement.src = el.URL;

            //create figure caption with json caption
            var figureCaption = document.createElement('figcaption');
            figureCaption.innerHTML = el.caption;

            //append image to figure
            figure.appendChild(imageElement);

            //append figcaption to figure
            figure.appendChild(figureCaption);
            
            //append figure onto anchor
            image.appendChild(figure);
            
            //Append link to container.
            container.appendChild(image);
        })
    });
})
