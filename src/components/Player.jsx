import { ImPlay3, ImPause2} from "react-icons/im";

const Player = ({audioElem, isplaying, setisplaying}) => {

    const PlayPause = () => {
        setisplaying(!isplaying)
    }
    return (
        <div className="controls">
    <ImPlay3 className="btn-action" />
        </div>
    )
}
export default Player