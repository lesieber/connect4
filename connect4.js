export function newGame(){
    let game = {
        "board": [
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0,
        ],
        "state" : "playing", // or "won", "tie"
        "next" : 1,
    }
    return game
}    

function findLowestEmptyRow(game, column) {
    let row = 35 + column;
    while (row >= 0){
        if (game.board[row] == 0 ){
            return row
        }
        row -= 7   
    }
    return -1
}

function checkTie(game){
    for (let cell of game.board){
        if (cell === 0) {
            return false
        }
    }
    return true
}

function checkWinner(game) {
    

}

function switchPlayer(game) {
    if (game.next === 1){
        game.next = 2
    }
    else {
        game.next = 1
    } 
}

export function dropPiece(game, column) {
    // find out lowest row with empty cell
    let empytCell = findLowestEmptyRow(game, column)
    // update game
    if (empytCell != -1) {
        game.board[empytCell] = game.next
        switchPlayer(game)
    }
    if (checkTie(game) === true) {
        game.state = "tie"
    }
    checkWinner(game)
}

