import Icon from '../Icon/Icon'
import './Card.css'
import { toast } from 'react-toastify';

function Card({ gameEnd, onPlay, player, index , click}){
    let icon = <Icon/>

    if(player == 'X'){
        icon = <Icon name="cross" />
    } else if(player == 'O'){
        icon = <Icon name="circle" />
    }

    function playerCheck(player){
        if(player!=""){
            toast.info("Please select an empty box")
    
            console.log("hello")
            return false
        }
        return true
    }
    return(
        <div
            className='card' 
            style={{
                backgroundColor: player!="" ? '#212121' : '',
            }}
            onClick={() => 
                !gameEnd && playerCheck(player) && onPlay(index,click)
            }
        >
            { icon }
        </div>
    )
}

export default Card