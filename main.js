//Variables for all the life
let totalLife = 40;
let cmdDmgTopLeft = 0;
let cmdDmgTopRight = 0;
let cmdDmgBottomLeft = 0;
let cmdDmgBottomRight = 0;

document.querySelector("#tLeft").innerText = cmdDmgTopLeft;
document.querySelector("#tRight").innerText = cmdDmgTopRight;
document.querySelector("#bLeft").innerText = cmdDmgBottomLeft;
document.querySelector("#bRight").innerText = cmdDmgBottomRight;
document.querySelector("#bRight").innerText = cmdDmgBottomRight;
document.querySelector("#totalLife").innerText = totalLife;



///////// TOP LEFT \\\\\\\\\\
document.querySelector("#tLeftUp").addEventListener("click", function () {
    cmdDmgTopLeft = cmdDmgTopLeft + 1;
    document.querySelector("#tLeft").innerText = cmdDmgTopLeft;

});
document.querySelector("#tLeftDown").addEventListener("click", function () {
    cmdDmgTopLeft = cmdDmgTopLeft - 1;
    document.querySelector("#tLeft").innerText = cmdDmgTopLeft;

});
///////// TOP RIGHT \\\\\\\\\\
document.querySelector("#tRightUp").addEventListener("click", function () {
    cmdDmgTopRight = cmdDmgTopRight + 1;
    document.querySelector("#tRight").innerText = cmdDmgTopRight;

});
document.querySelector("#tRightDown").addEventListener("click", function () {
    cmdDmgTopRight = cmdDmgTopRight - 1;
    document.querySelector("#tRight").innerText = cmdDmgTopRight;

});
///////// BOTTOM LEFT \\\\\\\\\\
document.querySelector("#bLeftUp").addEventListener("click", function () {
    cmdDmgBottomLeft = cmdDmgBottomLeft + 1;
    document.querySelector("#bLeft").innerText = cmdDmgBottomLeft;

});
document.querySelector("#bLeftDown").addEventListener("click", function () {
    cmdDmgBottomLeft = cmdDmgBottomLeft - 1;
    document.querySelector("#bLeft").innerText = cmdDmgBottomLeft;

});
///////// BOTTOM RIGHT \\\\\\\\\\
document.querySelector("#bRightUp").addEventListener("click", function () {
    cmdDmgBottomRight = cmdDmgBottomRight + 1;
    document.querySelector("#bRight").innerText = cmdDmgBottomRight;

});
document.querySelector("#bRightDown").addEventListener("click", function () {
    cmdDmgBottomRight = cmdDmgBottomRight - 1;
    document.querySelector("#bRight").innerText = cmdDmgBottomRight;

});


///// LIFE TOTAL \\\\\\
document.querySelector("#oneUp").addEventListener("click", function () {
    totalLife = totalLife + 1;
    document.querySelector("#totalLife").innerText = totalLife;

});
document.querySelector("#fiveUp").addEventListener("click", function () {
    totalLife = totalLife + 5;
    document.querySelector("#totalLife").innerText = totalLife;

});
document.querySelector("#oneDown").addEventListener("click", function () {
    totalLife = totalLife - 1;
    document.querySelector("#totalLife").innerText = totalLife;

});
document.querySelector("#fiveDown").addEventListener("click", function () {
    totalLife = totalLife - 5;
    document.querySelector("#totalLife").innerText = totalLife;

});



function addToNumber(possition, value) {
    switch (possition) {
        case tLeft:
            cmdDmgTopLeft = cmdDmgTopLeft + value;

            document.querySelector(`#${possition}`).innerHTML = cmdDmgTopLeft;
            break;
        case tRight:
            cmdDmgTopRight = cmdDmgTopRight + value;
            document.querySelector(`#${possition}`).innerHTML = cmdDmgTopRight;
            break;
        case bLeft:
            cmdDmgBottomLeft = cmdDmgBottomLeft + value;
            document.querySelector(`#${possition}`).innerHTML = cmdDmgBottomLeft;
            break;
        case bRight:
            possition = possition + value;
            document.querySelector(`#${possition}`).innerHTML = cmdDmgBottomRight;
            break;

    }
}