const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// unsplash api
    const count = 10;
    const apiKey = 't0TM3SY7BL_R1dxVJMBPOfwBGwmig_OCgyELh73oGVg';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


    //create elements for links & photos add to dom
    function displayPhotos(){
        photosArray.forEach((photo) => {
            const item = document.createElement('a');
            item.setAttribute('href', photo.links.html);
            item.setAttribute('target', '_blank');
            const img = document.createElement('img');
            img.setAttribute('src', photo.urls.regular);
            img.setAttribute('alt', photo.alt_description);
            img.setAttribute('title', photo.alt_description);
            item.appendChild(img);
            imageContainer.appendChild(item);
      }); 
    }


    //get photos from unsplash api

    async function getPhotos(){
        try{
            const response = await fetch(apiUrl);
            photosArray = await response.json();
            displayPhotos();
        }catch(error){

        }
    }

    getPhotos();