import { useRef } from "react";
import Video from "./Video";
function HandleVideo() {
    const ref = useRef();

    const HandlePlay = () => {
        ref.current.play();
    };
    const HandlePause = () => {
        ref.current.pause();
    };
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <button onClick={HandlePlay}>play</button>
                <button onClick={HandlePause}>Pause</button>
            </div>
            <Video ref={ref} />
        </div>
    );
}

export default HandleVideo;
