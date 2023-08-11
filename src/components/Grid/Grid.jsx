import { useState } from "react"
import Card from "../Card/Card";
import './Grid.css'
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCards }){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true)  //true=> O , false =>X
    const [winner, setWinner] = useState(null)
    const [click, setClick] = useState(0)

    function play(index,click) {
        if(turn == true) {
            board[index] = "O"
        } else {
            board[index] = "X"
        }
        const win = isWinner(board, turn ? "O" : "X")
        if (win){
            setWinner(win)
        }
        setBoard([...board])
        setTurn(!turn)
        setClick(click+1)
    }

    function reset(){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))
        setClick(0)
    }    

    return (
        <div className="grid-wrapper">
            
            {
                winner?(
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>Play Again</button>
                    </>
                ):(
                    (click==9) && (
                        <>
                            <h1 className="turn-highlight">It's a Draw!</h1>
                            <button className="reset" onClick={reset}>Play Again</button>
                        </>
                    )
                )
            }
            {
                !winner && (click!=9) && (
                    <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'}</h1>
                )
            }
            <div className="grid">
                { board.map((ele, idx) => 
                    <Card 
                        key={idx} 
                        gameEnd={winner?true:false} 
                        onPlay={play} 
                        player={ele} 
                        index={idx} 
                        click={click}
                    />)
                }
            </div>
        </div>
    )
}

export default Grid