const drumPieces = document.querySelectorAll('.drum-piece');

function playSound(event) {
    
    const key = event.target.getAttribute('data-key');
    
 
    const audioPath = `Audio/${key}.mp3`; 


    const audio = new Audio(audioPath);
    audio.play();
}

drumPieces.forEach(piece => {
    piece.addEventListener('click', playSound);
});