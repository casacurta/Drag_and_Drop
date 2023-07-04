function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const imageSrc = event.dataTransfer.getData("text/plain");
    const image = new Image();
    image.src = imageSrc;
    image.width = 41;
    image.height = 31;
    event.target.appendChild(image);
}