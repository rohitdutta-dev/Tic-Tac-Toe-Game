let bxs = document.querySelectorAll(".box");
let resetgm = document.querySelector("#resetgm");
let newgm = document.querySelector("#newgm");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnx = true;
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const resetgame = () => {
    turnx = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes = () => {
    for (let box of bxs) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableboxes = () => {
    for (let box of bxs) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}
const whoWon = () => {
    let gmwinner = false;
    for (let pattern of winpatterns) {
        let pos1val = bxs[pattern[0]].innerText;
        let pos2val = bxs[pattern[1]].innerText;
        let pos3val = bxs[pattern[2]].innerText;
        if (pos1val != '' && pos1val === pos2val && pos2val === pos3val) {
            disableboxes();
            showWinner(pos1val);
            gmwinner = true;
            return;
        }
    }
    let filled=0;
    for (let box of bxs) {
        if (box.innerText != "") {
            filled++;
        }
    }
    if(filled==9 && !gmwinner){
        msg.innerText="Game Draw!!"
        msgcontainer.classList.remove("hide");
    }
}
bxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            box.innerText = "X";
            turnx = false;
        }
        else {
            box.innerText = "O";
            turnx = true;
        }
        box.disabled = true;
        whoWon();
    })
});
resetgm.addEventListener("click", resetgame)
newgm.addEventListener("click", resetgame)