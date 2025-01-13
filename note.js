let newnote = document.querySelector('#new');
let lists = document.querySelector('.list');
let color = document.querySelector('#col');

function createnote() {
    let note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `<div class="hd"><span id="close">X</span></div>
            <textarea id="txt" placeholder="type your content here..."></textarea>`;
    note.querySelector('#txt').style.backgroundColor = color.value;
    note.style.backgroundColor = color.value;

    lists.appendChild(note);

    let closeBtn = note.querySelector('#close');
    closeBtn.addEventListener('click', () => {
        lists.removeChild(note);
    });

    note.addEventListener('mousedown', handleMouseDown);
}

newnote.addEventListener('click', createnote);

let Dragging = false;
let currentNote = null;
let offsetX, offsetY;

function handleMouseDown(e) {
    Dragging = true;
    currentNote = e.target.closest('.note');
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(e) {
    if (Dragging && currentNote) {
        currentNote.style.position = 'absolute';
        currentNote.style.left = `${e.pageX - offsetX}px`;
        currentNote.style.top = `${e.pageY - offsetY}px`;
    }
}

function handleMouseUp() {
    Dragging = false;
    currentNote = null; 
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);

}
