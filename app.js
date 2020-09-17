//get 9 buttons
const buttons = Array.from(document.querySelectorAll('#container button'));

let textContent = document.getElementById('goText');
let intValue = [] ;
let totalNum = 0;

//player 1 = true(red), player 2 = false(blue)
textContent.innerHTML = 'PLAYER1 \'s turn (PINK)';
textContent.style.color = 'hotpink';
let toggle = true;

// convert the button's value into INT
for(let i=0; i<buttons.length; i++){
    intValue[i] = parseInt(buttons[i].value, 10);
}

// all line - initial value = 300
let lines = [300,300,300,300,300,300,300,300];

// click the button 
for(let b=0; b<buttons.length; b++){
    (function() {
        buttons[b].addEventListener('click', () => {
            
            buttons[b].disabled = true;
            totalNum += 1;

            if(toggle) {
                intValue[b] = 0;
                buttons[b].style.background = 'hotpink';
                textContent.innerHTML = 'PLAYER2 \'s turn (BLUE)';
                textContent.style.color = 'darkturquoise';
                toggle = false;
            }
            else {
                intValue[b] = 10;
                buttons[b].style.background = 'darkturquoise';
                textContent.innerHTML = 'PLAYER1 \'s turn (PINK)';
                textContent.style.color = 'hotpink';
                toggle = true;
            }
            let gameover = fixButton(buttons[b]); 

            if(totalNum == 9 && gameover == 1) {   
                textContent.innerHTML = 'Draw the Game...';
                return;
            }
        }) 
    }())
}

function fixButton(but) {

    lines[0] = intValue[0] + intValue[1] + intValue[2];
    lines[1] = intValue[3] + intValue[4] + intValue[5];
    lines[2] = intValue[6] + intValue[7] + intValue[8];
    lines[3] = intValue[0] + intValue[3] + intValue[6];
    lines[4] = intValue[1] + intValue[4] + intValue[7];
    lines[5] = intValue[2] + intValue[5] + intValue[8];
    lines[6] = intValue[0] + intValue[4] + intValue[8];
    lines[7] = intValue[2] + intValue[4] + intValue[6];

    for(let j=0; j<lines.length; j++){
        if(lines[j] == 0){
            textContent.innerHTML = 'Player 1 is WINNER!!!';
            textContent.style.color = 'hotpink';
            for(let k=0; k<buttons.length; k++) buttons[k].disabled = true;
            return 0;
        }
        else if(lines[j] == 30){
            textContent.innerHTML = 'Player 2 is WINNER!!!';
            textContent.style.color = 'darkturquoise';
            for(let k=0; k<buttons.length; k++) buttons[k].disabled = true;
            return 0;
        }
        else continue;
    }
    return 1;
}

