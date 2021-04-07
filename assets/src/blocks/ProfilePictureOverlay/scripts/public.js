import Croppie from 'croppie';

const wrapper = document.getElementById('profile-picture-overlay');

const canvasContainer = document.createElement('div');
canvasContainer.className = 'canvas_container';

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
uploadButtonVisible.className = 'btn btn-primary upload';
uploadButtonVisible.textContent = 'upload foto';
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
      uploadButtonVisible.innerText = 'upload andere foto';
      uploadButtonVisible.className = 'btn btn-link';
      downloadButton.style.display = 'inline-block';

      // Bind image to croppie.
      croppie.bind({
        url: event.target.result,
      });

    };
  };
  reader.readAsDataURL(e.target.files[0]);
}

function downloadCanvasAsImage() {
  croppie.result({type: 'rawcanvas', size: 'original'}).then(function(rawcanvas) {

    // Draw overlay on the 'raw canvas'.
    const ctx = rawcanvas.getContext('2d');
    ctx.drawImage(overlay,0,0, overlay.width, overlay.height, 0, 0, rawcanvas.width, rawcanvas.height);

    // Download the combined image.
    let dataURL = rawcanvas.toDataURL('image/png');
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'profile-picture.png');
    downloadLink.setAttribute('href', dataURL);
    downloadLink.click();
  });
}

const croppieWrapper = document.createElement('div');
croppieWrapper.className = 'croppie-wrapper';

const croppie = new Croppie(croppieWrapper, {
  viewport: { width: 100 + '%', height: 100 + '%' },
  boundary: { width: 100 + '%', height: 100 + '%' },
  showZoomer: false,
  enableOrientation: true,
  enableExif: true,
  mouseWheelZoom: 'ctrl'
});

canvasContainer.appendChild(croppieWrapper);
buttonRow.appendChild(downloadButton);
wrapper.appendChild(canvasContainer);
wrapper.appendChild(uploadButtonVisible);
wrapper.appendChild(downloadButton);


// Add <style> to <head>
function addCss(css) {
  const style = document.createElement('style');
  style.innerText = css;
  document.head.appendChild(style);
}

// Add the overlay image to croppie's '.cr-viewport' for the preview.
const css = `.cr-viewport{background-image: url(\"${overlay.src}\");background-size: cover;"}`;
addCss(css);

