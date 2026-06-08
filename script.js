// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function openLightbox(imageSrc, altText) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'block';
    lightboxImage.src = imageSrc;
    lightboxImage.alt = altText;
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }

  function showCreative(sectionId){

    const sections =
        document.querySelectorAll('.creative-tab');

    sections.forEach(section => {

        section.style.display = 'none';

    });

    document.getElementById(sectionId)
        .style.display = 'block';
}

function showTechnical(sectionId){

const sections =
     document.querySelectorAll('.technical-tab')
      .forEach(section => {

          section.style.display = 'none';

      });

    document
      .getElementById(sectionId)
      .style.display = 'block';
}

window.onload = function() {
    showCreative('video-editing-content');
    showTechnical('unity-content');
};

/* */