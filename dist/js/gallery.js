class galleryUI {
  constructor() {
    this.galleryOverview = document.getElementById("gallery-overview");
    this.galleryOverlay = document.getElementById("gallery-overlay");
    this.fullPhotoContainer = document.getElementById("gallery-full-photo-container");
    this.currentFullPhotoDescription = document.getElementById("gallery-full-photo-description");
  }

  //Display in the UI an overview of available photos
  listPhotos(photos) {
    let galleryOverviewPhotos = "";
    photos.forEach(photo => {
      galleryOverviewPhotos += `
      <div class="gallery-thumbnail" value="${photos.indexOf(photo)}">
      <img src="img/gallery/thumbnails/${photo}" alt="${photo}" id="${photo}"
      />
      <div class="thumbnail-description"><p>${descriptions[photos.indexOf(photo)]}</p></div>
      </div>
      `
    });
    this.galleryOverview.innerHTML = galleryOverviewPhotos;
  }

  showGalleryOverlay() {
    this.galleryOverlay.classList.add("show");
    this.galleryOverlay.classList.remove("hide");
  }

  showFullPhoto(fullPhotoName) {
    this.fullPhotoContainer.innerHTML = `<img src="img/gallery/${fullPhotoName}" alt="${fullPhotoName}" class="gallery-full-photo" id="${fullPhotoName}"/>`;
  }

  showNextFullPhoto(currentFullPhotoNumber, ultimatePhotoNumber) {
    let nextPhotoNumber;
    if (currentFullPhotoNumber === ultimatePhotoNumber) {
      nextPhotoNumber = 1;
    } else {
      nextPhotoNumber = currentFullPhotoNumber + 1;
    }

    this.fullPhotoContainer.innerHTML = `<img src="img/gallery/photo${nextPhotoNumber}.jpg" alt="photo${nextPhotoNumber}.jpg" class="gallery-full-photo" id="photo${nextPhotoNumber}.jpg"/>`;
    console.log(`This is photo number:${nextPhotoNumber}`);
  }

  showPreviousFullPhoto(currentFullPhotoNumber, ultimatePhotoNumber) {
    let previousPhotoNumber;
    if (currentFullPhotoNumber === 1) {
      previousPhotoNumber = ultimatePhotoNumber;
    } else {
      previousPhotoNumber = currentFullPhotoNumber - 1;
    }
    console.log(`This is photo number:${previousPhotoNumber}`);
    this.fullPhotoContainer.innerHTML = `<img src="img/gallery/photo${previousPhotoNumber}.jpg" alt="photo${previousPhotoNumber}.jpg" class="gallery-full-photo" id="photo${previousPhotoNumber}.jpg"/>`;

  }

  showCurrentFullPhotoDescription(getCurrentFullPhotoNumber, ultimatePhotoNumber) {
    this.currentFullPhotoDescription.innerHTML = `<p>${getCurrentFullPhotoNumber()}/${ultimatePhotoNumber}: ${descriptions[getCurrentFullPhotoNumber()-1]}</p>`;
  }

  clearPreviousFullPhotoDescription() {
    this.currentFullPhotoDescription.innerHTML = ``;
  }

  hideGalleryOverlay() {
    this.galleryOverlay.classList.add("hide");
  }

}