//Initialize the Gallery UI
const gallery = new galleryUI();

//GALLERY
//UI Selectors
const galleryOverview = document.getElementById("gallery-overview");
const galleryHideButton = document.getElementById("gallery-hide-btn");
const nextButton = document.getElementById("gallery-next-btn");
const previousButton = document.getElementById("gallery-previous-btn");

//Variables
const ultimatePhotoNumber = photos.length;

function getCurrentFullPhotoNumber() {
  const currentFullPhoto = document.querySelector(".gallery-full-photo").id;
  const currentFullPhotoNumber = photos.indexOf(currentFullPhoto) + 1;
  return currentFullPhotoNumber;
}

//Populate the gallery overview
gallery.listPhotos(photos);

//Show the gallery overlay
galleryOverview.addEventListener("click", (e) => {
  gallery.showGalleryOverlay();
  gallery.showFullPhoto(e.target.id);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Show the next full photo
nextButton.addEventListener("click", () => {
  gallery.showNextFullPhoto(getCurrentFullPhotoNumber(), ultimatePhotoNumber);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Show the previous full photo
previousButton.addEventListener("click", () => {
  gallery.showPreviousFullPhoto(getCurrentFullPhotoNumber(), ultimatePhotoNumber);
  gallery.clearPreviousFullPhotoDescription();
  gallery.showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber);
});

//Hide the gallery overlay
galleryHideButton.addEventListener("click", (e) => {
  gallery.hideGalleryOverlay();
});

//FOOTER
//Get full year
let fullYear = new Date().getFullYear();
document.getElementById("footer-year").textContent = fullYear;