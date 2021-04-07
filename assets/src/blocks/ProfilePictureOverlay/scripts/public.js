import Croppie from 'croppie';

const wrapper = document.getElementById('profile-picture-overlay');

const canvas = document.createElement('canvas');
canvas.id     = 'profile-picture-overlay-canvas';
canvas.width = 1080; // Width of the image
canvas.height = 1080; // Height of the image

const canvasContainer = document.createElement('div');
canvasContainer.className = 'canvas_container';
// canvasContainer.style.display = 'none';

const canvasWrap = document.createElement('div');
canvasWrap.className = 'canvas_wrap';

// Overlay image, of which the source is pulled from the html data attribute.
const overlay = new Image();
overlay.src = wrapper.dataset.overlayImage;

// The actual upload button (which is hidden because browsers make it impossible to style it).
const uploadButton = document.createElement('input');
uploadButton.type = 'file';
uploadButton.id = 'imageLoader';
uploadButton.name = 'imageLoader';
uploadButton.style.display = 'none';
uploadButton.addEventListener('change', handleImageUpload, false);

// The visible upload button that is styled.
const uploadButtonVisible = document.createElement('button');
uploadButtonVisible.className = 'btn btn-primary';
uploadButtonVisible.textContent = 'upload afbeelding';
uploadButtonVisible.addEventListener('click', () => uploadButton.click());

const buttonRow = document.createElement('div');
buttonRow.className = 'button-row';

// Download button that is shown after image is uploaded.
const downloadButton = document.createElement('button');
downloadButton.innerText = 'download';
downloadButton.className = 'btn btn-primary download';
downloadButton.style.display = 'none';
downloadButton.addEventListener('click', () => downloadCanvasAsImage());

function handleImageUpload(e){
  const reader = new FileReader();
  reader.onload = function(event){
    let img = new Image();
    img.src = event.target.result;

    img.onload = function(){
      canvasContainer.style.display = 'block';
      uploadButtonVisible.innerText = 'verander afbeelding';
      downloadButton.style.display = 'inline-block';

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img,0,0, img.width, img.height, 0, 0, 1080, 1080);
      ctx.drawImage(overlay,0,0);

      cropper.bind({
        url: event.target.result,
      });

    };
  };
  reader.readAsDataURL(e.target.files[0]);
}

// This function can be called from the button in HTML.
function downloadCanvasAsImage() {
  cropper.result({type: 'rawcanvas', size: 'original'}).then(function(rawcanvas) {


    // var uri = URL.createObjectURL(blob);
    // var img = new Image();

    // img.src = uri;


    console.log(rawcanvas);


    // let blobImage = new Image(blob);
    // const downloadCanvas = document.createElement('canvas');
    const ctx = rawcanvas.getContext('2d');
    ctx.drawImage(overlay,0,0, overlay.width, overlay.height, 0, 0, rawcanvas.width, rawcanvas.height);

    let dataURL = rawcanvas.toDataURL('image/png');

    // console.log(blob);
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'profile-picture.png');
    downloadLink.setAttribute('href', dataURL);

    // downloadLink.setAttribute('href', window.URL.createObjectURL(blob));


    downloadLink.click();
  });
  //
  // let dataURL = canvas.toDataURL('image/png');
  // let downloadLink = document.createElement('a');
  // downloadLink.setAttribute('download', 'profile-picture.png');
  // downloadLink.setAttribute('href', dataURL);
  // downloadLink.click();
}

const croppieWrapper = document.createElement('div');
croppieWrapper.className = 'croppie-wrapper';


const cropper = new Croppie(croppieWrapper, {
  // viewport: { width: 900, height: 900 },
  // boundary: { width: 1080, height: 1080 },
  viewport: { width: 100 + '%', height: 100 + '%' },
  boundary: { width: 100 + '%', height: 100 + '%' },

  // viewport: { width: 400, height: 400 },
  // boundary: { width: 500, height: 500 },

  showZoomer: false,
  enableOrientation: true,
  enableExif: true,
});


// cropper.bind({
//   url: overlay.src,
// });
//


// const cropperCanvas = document.querySelectorAll('.cr-image');
// console.log(cropperCanvas);

// const viewports = document.getElementsByClassName('cr-viewport');
// viewports[0].style.backgroundImage = 'url("'+ overlay.src +'");';

// console.log(viewports);

// const ctx = cropperCanvas.getContext('2d');
// ctx.drawImage(overlay,0,0);



// Write elements to DOM.
canvasWrap.appendChild(canvas);
// canvasContainer.appendChild(canvasWrap);
canvasContainer.appendChild(croppieWrapper);

buttonRow.appendChild(downloadButton);


// buttonRow.appendChild(uploadButton);
// buttonRow.appendChild(uploadButtonVisible);

wrapper.appendChild(uploadButtonVisible);
wrapper.appendChild(canvasContainer);
wrapper.appendChild(downloadButton);

// wrapper.appendChild(downloadButton);



function addCss(css) {

  const head = document.head;
  const link = document.createElement('style');

  link.innerText = css;

  head.appendChild(link);
}

const css = `.cr-viewport{background-image: url(\"${overlay.src}\");background-size: cover;"}`;
addCss(css);

