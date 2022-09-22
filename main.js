let meaningInput = document.getElementById('meaning-box');
let emojiDisplayer = document.getElementById('emoji-displayer');
let emojiDisplay = document.getElementById('emoji-display');
let eraseBtn = document.getElementById('eraser');
let emojiInput = document.getElementById("text-field");
let emojiSpace = document.getElementById("emoji-space");
let emojiToLoad = emojiInput.value;

const loadInput = ()=>{
    if(meaningInput.style.display == 'none'){
    meaningInput.style.display = 'block'; 
    emojiDisplayer.style.display = 'block'; 
    emojiDisplay.style.display = 'block'; 
    eraseBtn.style.display = 'block';
    }else{
    meaningInput.style.display = 'block';
    emojiDisplayer.style.display = 'block'; 
    emojiDisplay.style.display = 'block'; 
    eraseBtn.style.display = 'block';
    }

    if(emojiToLoad == ":)"){
        
    }else{
        console.log('some');
    }
}

const eraseDisplay = ()=>{
    if(meaningInput.style.display == 'block'){
        meaningInput.style.display = 'none';
        eraseBtn.style.display = 'none'; 
        emojiDisplay.style.display = 'none'; 
        emojiDisplayer.style.display = 'none';
    }else{
        meaningInput.style.display = 'none'; 
        eraseBtn.style.display = 'none'; 
        emojiDisplay.style.display = 'none'; 
        emojiDisplayer.style.display = 'none';
    }
}