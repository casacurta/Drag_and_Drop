var images = [
    "image1.bmp",
    "image2.bmp",
    "image3.bmp",
    "image4.bmp",
    "image5.bmp",
    "image6.bmp",
    "image7.bmp",
    "image8.bmp",
    "image9.bmp",
    "image10.bmp",
    "image11.bmp",
    "image12.bmp",
    "image13.bmp",
    "image14.bmp",
    "image15.bmp",
    "image16.bmp",
    "image17.bmp",
    "image18.bmp",
    "image19.bmp",
    "image20.bmp",
    "image21.bmp",
    "image22.bmp",
    "image23.bmp"
];

var regionA = document.getElementById('region-a');
var regionB = document.getElementById('region-b');

// Populate Region A with puzzle pieces
images.forEach(function(image) {
    var puzzlePiece = createPuzzlePiece(image);
    regionA.appendChild(puzzlePiece);
});

function createPuzzlePiece(imageSrc) {
    var puzzlePiece = document.createElement('div');
    puzzlePiece.className = 'puzzle-piece';
    puzzlePiece.draggable = true;

    var image = new Image();
    image.src = imageSrc;
    puzzlePiece.appendChild(image);

    puzzlePiece.addEventListener('dragstart', dragStart);
    puzzlePiece.addEventListener('dragend', dragEnd);

    return puzzlePiece;
}

function dragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.id);
}

function dragEnd(e) {
    this.classList.remove('dragging');
}

regionB.addEventListener('dragover', dragOver);
regionB.addEventListener('dragenter', dragEnter);
regionB.addEventListener('dragleave', dragLeave);
regionB.addEventListener('drop', drop);

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function dragLeave(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    var puzzlePieceId = e.dataTransfer.getData('text/plain');
    var puzzlePiece = document.getElementById(puzzlePieceId);
    this.appendChild(puzzlePiece);
    puzzlePiece.style.opacity = '1';
    puzzlePiece.draggable = false;
}