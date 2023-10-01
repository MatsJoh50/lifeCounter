//Variables for all the life
let totalLife = 40;
let cmdDmgTopLeft = 0;
let cmdDmgTopRight = 0;
let cmdDmgBottomLeft = 0;
let cmdDmgBottomRight = 0;

document.querySelector("#tLeftUp").addEventListener("click", function(){
    cmdDmgTopLeft = cmdDmgTopLeft + 1;
    document.querySelector("#tLeft").innerText = cmdDmgTopLeft;

});

function addToNumber(possition, value){
    switch(possition){
        case tLeft:
            cmdDmgTopLeft = cmdDmgTopLeft + value;
            // rightPossition.innerText = cmdDmgTopLeft;
            document.querySelector(`#${possition}`).innerHTML = cmdDmgTopLeft;
            break;
        case tRight:
            cmdDmgTopRight = cmdDmgTopRight + value;
            rightPossition.innerText(cmdDmgTopRight);
            break;
        case bLeft:
            cmdDmgBottomLeft = cmdDmgBottomLeft + value;
            rightPossition.innerText(cmdDmgBottomLeft);
            break;
        case bRight:
            possition = possition + value;
            rightPossition.innerText(possition);
            break;

    }
}