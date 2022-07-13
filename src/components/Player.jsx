import { ImPlay3, ImPause2} from "react-icons/im";
import "./style/Player.css"

const Player = ({ isplaying, setisplaying, play, setPlay}) => {

    const PlayPause = () => {
        setisplaying(!isplaying)
        setPlay(!play)
    }
    return (
        <div className="controls">
    {isplaying ? <ImPause2 className="btn-action" onClick={PlayPause} /> : <ImPlay3 className="btn-action" onClick={PlayPause} /> }
        </div>
    )
}
export default Player