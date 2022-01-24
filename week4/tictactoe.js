const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = "";
        if (index < 3) {
            styleString += `border-bottom: 3px solid rgb(99, 3, 189);`;
        }
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid rgb(99, 3, 189);`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid rgb(99, 3, 189);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid rgb(99, 3, 189);`;
        }
        box.style = styleString;

        box.addEventListener("click", boxClicked);
    });
};

function boxClicked(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (hasPlayerWon(currentPlayer)) {
            playText.innerHTML = `${currentPlayer} wins!!`;
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}

const hasPlayerWon = (player) => {
    //from top left, check across, down, and diagonal
    if (spaces[0] === player) {
        if (spaces[1] === player && spaces[2] === player) {
            console.log(`${player} wins up top`);
            return true;
        }
        if (spaces[3] === player && spaces[6] === player) {
            console.log(`${player} wins on the left`);
            return true;
        }
        if (spaces[4] === player && spaces[8] === player) {
            console.log(`${player} wins on the diagonal`);
            return true;
        }
    }
    //from bottom check up and across
    if (spaces[8] === player) {
        if (spaces[2] === player && spaces[5] === player) {
            console.log(`${player} wins on the right`);
            return true;
        }
        if (spaces[7] === player && spaces[6] === player) {
            console.log(`${player} wins on the bottom`);
            return true;
        }
    }
    //from middle check middle vertical and middle horizontal
    if (spaces[4] === player) {
        if (spaces[3] === player && spaces[5] === player) {
            console.log(`${player} wins on the middle horizontal`);
            return true;
        }
        if (spaces[1] === player && spaces[7] === player) {
            console.log(`${player} wins on the middle vertical`);
            return true;
        }
        if (spaces[2] === player && spaces[6] === player) {
            console.log(`${player} wins on the diagonal`);
            return true;
        }
    }

};

restartBtn.addEventListener("click", () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = "";
    });
    playText.innerHTML = `Let's Play!!`;

    currentPlayer = player1;
});

drawBoard();
