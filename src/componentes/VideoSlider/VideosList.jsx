import VideoSlider from "./VideoSlider";
import "../VideoSlider/videoslide.css"

function VideosList() {
    //Lista de videos
    const videos = [
        {
        url: "https://www.youtube.com/embed/AG2QssLpQzI"
        },
        {
        url: "https://www.youtube.com/embed/bFrhU0hbo00"
        },
        {
        url: "https://www.youtube.com/embed/cOvpf3Q-ii4"
        },
        {
        url: "https://www.youtube.com/embed/_NNNnsFXAnc"
        },
    ];

    return (
        <div className="wrapper">
            <div className="image-container">
                {videos.map((video, index) => (
                    <VideoSlider
                        key={index}
                        url={video.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default VideosList