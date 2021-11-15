const defaultBoard = [];
for(let i = 0; i < 10; i++) {
    defaultBoard.push([])
    for(let j = 0; j < 10; j++){
        if (j === 2){
            defaultBoard[i].push("yes");
        }
        else {
            defaultBoard[i].push("no");
        }
    }
}
const defaultState = {
    symbol: "",
    board:defaultBoard
}

function generateGameBoard() {
    return defaultState.board;
}

function exists(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < 10; j++){
            if (arr[i][j] === "yes"){
                return false;
            }
        }
    }
    return true;
}

function check(x,y,arr){
    if (arr[x][y] === "X" || arr[x][y] === "Y"){
        return false;
    }
    return true;
}

export default function boardReducer (state, action){
    if (state === undefined) {
        return generateGameBoard();
    }
    if (action.type === "boardClick") {
        let x = Math.floor(Math.random()*9);
        let y = Math.floor(Math.random()*9);
        while (!check(x,y,state)){
            x = Math.floor(Math.random()*9);
            y = Math.floor(Math.random()*9);
        }
        const value = state[x][y];
        if (value === "yes") {
            state[x][y] = "Y";
        }else if (value === "no") {
            state[x][y] = "X";
        }
        if (exists(state)){
            alert("ai win!");
        };
        return [...state];
    }
    if(action.type === "reset") {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++){
                if (j === 2){
                    state[i][j] = 'yes';
                }else{
                    state[i][j] = 'no';
                }
            }
        }
        return [...state];
    }
    return state;
}