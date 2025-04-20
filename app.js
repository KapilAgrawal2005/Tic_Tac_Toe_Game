let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset_button");
let newGameBtn = document.querySelector(".new_button");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let content = document.querySelectorAll(".content");
let turnO = true; //playerX , playerO
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let resetGame = () => {
    turnO = true;
    enable();
    msgContainer.classList.add("hide");
}

let disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

let showWinner = (posiOne) =>{
    msgContainer.classList.remove("hide");
    // content.classList.remove("content");
    msg.innerText = `Winner is ${posiOne}`;
    disable(); 
}

let checkWinner = () =>{
    for( let patterns of winPatterns){
        console.log(patterns[0], patterns[1], patterns[2]);
        console.log(
            boxes[patterns[0]].innerText ,
            boxes[patterns[1]].innerText , 
            boxes[patterns[2]].innerText
        );
        let posiOne = boxes[patterns[0]].innerText;
        let posiTwo = boxes[patterns[1]].innerText;
        let posiThree = boxes[patterns[2]].innerText;
        if(posiOne != "" && posiTwo != "" && posiThree != ""){
            if(posiOne === posiTwo && posiTwo === posiThree){
                console.log("Winner", posiOne);
                showWinner(posiOne);
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

newGameBtn.addEventListener("click" , resetGame);
resetButton.addEventListener("click" , resetGame);