import {newGame, dropPiece} from './connect4.js'
import express from 'express'
const app = express()
const port = 3333
 
let the_game = newGame();
 
app.get('/game', (req, res) => {
    res.send(the_game)
})
 
app.get('/set/:column', (req, res) => {
    let column = parseInt(req.params['column']);
    dropPiece(the_game, column);
    res.send(the_game)
})
 
app.use(express.static('static'))

// Listen on the given port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



