import { forwardRef, useRef, useImperativeHandle } from "react";
import video1 from "./video/download.mp4";

function Video(Props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    return <video ref={videoRef} src={video1} width={280} height={500} />;
}
export default forwardRef(Video);
