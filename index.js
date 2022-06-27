let grid = document.getElementsByClassName('col')
let currentTurnText = document.getElementById('current-turn-text')
let currentTurn = 1
let gameOver = true

const playerTicker = {
    1: 'X',
    2: 'O'
}
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const singleMove = (index) => {
    if(gameOver && !grid[index].innerText){
        grid[index].innerText = currentTurn === 1 ? playerTicker[1] : playerTicker[2]
        let winningPlayer = checkWinningStatus()
        if(winningPlayer != 'No Winner'){
            gameOver = false
            currentTurnText.innerText = `Player ${winningPlayer} won! Start New Game`
            currentTurnText.style.background = '#F78F81'
            return
        }
        currentTurn = currentTurn === 1 ? 2 : 1
        currentTurnText.innerText = `Player ${currentTurn}'s turn`
    }

    let gameDraw = true
    for(let i = 0; i < grid.length;i++){
        if(combination.every(index => !grid[i].innerText)){
            gameDraw = false
        } 
    }
    if(gameDraw){
        currentTurnText.innerText = `Game Draw! Start New Game`
        currentTurnText.style.background = '#F78F81'
        return  
    }
}

const checkWinningStatus = () => {
    for(let i = 0; i < winningCombinations.length; i++){
        combination = winningCombinations[i]
        let value = grid[combination[0]].innerText
        if(combination.every(index => grid[index].innerText && grid[index].innerText === value)){
            addBorderStyle(combination)
            return value === 'X' ? 1 : 2
        }
    }
    return 'No Winner'
}

const addBorderStyle = (indexArray) => {
    indexArray.forEach(index => grid[index].style.cssText = 'background-color: rgba(247, 191, 129, 1)')
}
function newgame() {
    location.reload();
}