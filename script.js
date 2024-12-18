const thumbnails = document.querySelectorAll('.thumbnail');

const fullsizeImage = document.getElementById('fullsize-img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {

        const imageURL = thumbnail.src;


        fullsizeImage.src = imageURL;
    });
});