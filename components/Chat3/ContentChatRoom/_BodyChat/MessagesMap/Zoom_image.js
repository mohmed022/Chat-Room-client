export const zoomInImage = (imageUrl) => {
    const body = document.querySelector('body');
    const zoomedImage = document.createElement('div');
    const zoomedImg = document.createElement('img');
    const closeAndDownloadWrapper = document.createElement('div');
    const downloadButton = document.createElement('button');
    const zoomInButton = document.createElement('button');
    
    zoomedImg.src = imageUrl;
    zoomedImg.style.maxWidth = "100%";
    zoomedImg.style.maxHeight = "100%";
    zoomedImg.style.display = "block";
    
    closeAndDownloadWrapper.style.position = "absolute";
    closeAndDownloadWrapper.style.top = "5px";
    closeAndDownloadWrapper.style.left = "10px";
    closeAndDownloadWrapper.style.display = "flex";
    closeAndDownloadWrapper.style.zIndex = "999999999999";
    
    const closeButton = document.createElement('span');
    closeButton.innerText = "X";
    closeButton.style.color = "#fff";
    closeButton.style.fontSize = "2rem";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginRight = "10px";
    closeButton.addEventListener("click", () => {
      zoomedImage.remove();
    });
  
    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerHTML = '<i class="fa fa-search-minus"></i>';
    zoomOutButton.style.color = "#fff";
    zoomOutButton.style.fontSize = "2rem";
    zoomOutButton.style.cursor = "pointer";
    zoomOutButton.addEventListener("click", () => {
      zoomedImg.style.width = (zoomedImg.clientWidth - 20) + "px";
    });
    
    zoomInButton.innerHTML = '<i class="fa fa-search-plus"></i>';
    zoomInButton.style.color = "#fff";
    zoomInButton.style.fontSize = "2rem";
    zoomInButton.style.cursor = "pointer";
    zoomInButton.addEventListener("click", () => {
      zoomedImg.style.width = (zoomedImg.clientWidth + 20) + "px";
    });
    
    downloadButton.addEventListener("click", () => {
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          const downloadUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = downloadUrl;
          a.download = "image.jpg";
          a.click();
        });
    });
    downloadButton.innerHTML = `<i class="fa fa-download" style="margin-right: 10px;"></i>`;
    downloadButton.style.color = "#fff";
    downloadButton.style.fontSize = "2rem";
    downloadButton.style.cursor = "pointer";
    closeAndDownloadWrapper.appendChild(downloadButton);
    closeAndDownloadWrapper.appendChild(closeButton);
    closeAndDownloadWrapper.appendChild(zoomInButton);
    closeAndDownloadWrapper.appendChild(zoomOutButton);
    
    zoomedImage.appendChild(zoomedImg);
    zoomedImage.appendChild(closeAndDownloadWrapper);
    zoomedImage.style.backgroundColor = "rgba(0,0,0,0.8)";
    zoomedImage.style.position = "fixed";
    zoomedImage.style.top = "0";
    zoomedImage.style.left = "0";
    zoomedImage.style.right = "0";
    zoomedImage.style.bottom = "0";
    zoomedImage.style.display = "flex";
    zoomedImage.style.justifyContent = "center";
    zoomedImage.style.alignItems = "center";
    zoomedImage.style.zIndex = "9999";
    
    body.appendChild(zoomedImage);
  };
  
  export const zoomOutImage = (zoomedImage) => {
    const body = document.querySelector('body');
    body.removeChild(zoomedImage);
  };
    