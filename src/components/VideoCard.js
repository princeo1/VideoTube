const VideoCard = (props) => {
    // console.log("i am a prop",props.info)
    const {snippet, statistics} = props.info;
    const {thumbnails, title, channelTitle } = snippet;
    const {viewCount} = statistics
    return (
        <div className="w-72 shadow m-2">
            <img className="rounded-lg" alt="video" src={thumbnails.medium.url}/>
            <div>
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
            </div>
        </div>
    )
}
export default VideoCard;