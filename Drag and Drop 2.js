let dragSrcEl = null;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    dragSrcEl = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.outerHTML);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/html');
    const newImage = document.createElement('div');
    newImage.innerHTML = data;

    if (dragSrcEl !== event.target) {
        event.target.parentNode.insertBefore(newImage.firstChild, event.target);
        event.target.parentNode.removeChild(event.target);
    }
}

const regionAImages = document.querySelectorAll('.region-a img');
regionAImages.forEach(img => {
    img.addEventListener('dragstart', drag);
});
