var images = document.getElementById('ss-images');
var previous = document.getElementById('ss-prev');
var next = document.getElementById('ss-next');

fetch('data/json/carousel.json')
.then(function(res) {
    res.json().then(function(json) {
        json.images.forEach(function(el, i) {

            //create an img object with url
            var image = document.createElement('img');
            image.src = el.URL;
            //append to ss-images
            images.appendChild(image);
        });

        var currentImage = 1;
        var imageCount = 5;
        var imageWidth = 500;

        /*
        //add event listener to previous button
        //should move images 500px right >>>>>>
        previous.addEventListener('click', function previous(e) {
            e.preventDefault();
            if(currentImage != 1) {
                --currentImage;
                images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
            }
        });

        //add event listener to next button
        //should move images 500px left <<<<<<<
        next.addEventListener('click', function next(e) {
            e.preventDefault();
            if(currentImage != imageCount) {
                ++currentImage;
                images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
            }
        });

        */

        var placeholders = document.getElementsByClassName('dot');
        setInterval(autoSlideshow, 3000);

        function autoSlideshow(i) {
            if(currentImage != imageCount) {
                //placeholders[currentImage].style.backgroundColor = "red";
                ++currentImage;
                images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
            }
            if(currentImage === imageCount) {
                currentImage = 0;
            }
        }
    })
})