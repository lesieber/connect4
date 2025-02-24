/** Updates the HTML user interface to match the given game state. */
function updateHtml(game, grid) {
  let cell = 0
  for (button of grid.getElementsByTagName("button")){
      let cellState = game.board[cell]
      //button.textContent = cellState;
      button.setAttribute("data-state", cellState) 
      cell += 1  
  }
  document.getElementById("state").textContent = game.state;
}

function updateStatus(status, game) {


}

/** Drops a piece in the given column and updates the game state accordingly. */
async function dropPiece(grid, status, column) {
  // TODO: Check if move is valid.
  handleFetch(grid, status, `set/0/${column}`);
}

async function handleFetch(grid, status, url) {
  let response = await fetch(url);
  let game = await response.json();
  // Update the HTML view.
  updateHtml(grid, game);
  // Update game status area to reflect winner / tie
  updateStatus(status, game);
  
  // TODO: fetch game state until it's our turn again.
}

/* Connects the game state to the HTML user interface. */
async function init() {
  // Find the HTML game grid.
  let grid = document.getElementsByTagName('c4-grid')[0];
  let status = document.getElementsByTagName('c4-status')[0];
  // Join a new game.
  await handleFetch(grid, status, `get/0`);

  // Install button click handlers for each button.
  let index = 0
  for (let button of grid.getElementsByTagName("button")) {
    const column = index % 7;
    button.addEventListener("click", () => dropPiece(grid, status, column));
    index++;
  }
}

init();