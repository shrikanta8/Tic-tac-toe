import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({ name }) {
    const style = { color: "white", fontSize: '30px' }
    if(name == "circle"){
        return <FaRegCircle style={style}/>
    } else if(name == "cross"){
        return <FaTimes style={style} />
    } else{
        return <FaPen color="#b5b5b5" fontSize="15px"/>
    }
}

export default Icon