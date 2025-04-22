import { useEffect,useState } from "react";
import { youtube_api_url } from "../utils/constants";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
    const [videoList, setVideoList] = useState([]);
    const getVideos = async () => {
        const data = await fetch(youtube_api_url);
        const json = await data.json();
        // console.log(json);
        setVideoList(json.items);
        console.log("video=>",videoList)
    }
    useEffect(()=>{
        getVideos();
    },[])
    return (
        <div className="w-full flex flex-wrap">
            {
                videoList.map((video)=><VideoCard key={video.id}info={video}/>)
            }
        </div>
    )
}
export default VideoContainer;