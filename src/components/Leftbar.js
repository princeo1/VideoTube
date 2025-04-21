import { useSelector } from "react-redux";

const Leftbar = () => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
    if (!isMenuOpen) return null // This is called early retrun
    // The below code will only be executed if the above if statement fails
    return ( 
    <div className="w-36 text-center">
        <div className="flex flex-col shadow">
                <h3 className="mt-2 font-bold">HOME</h3>
                <h3 className="font-bold">Shorts</h3>
                <h3 className="font-bold">Subscription</h3>
            </div>
            <div className="shadow">
                <h3 className="mt-2 font-bold">You</h3>
                <ul>
                    <li>History</li>
                    <li>Playlists</li>
                    <li>Your videos</li>
                    <li>Watch later</li>
                    <li>Liked videos</li>
                    <li>Your Clips</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-2 font-bold">Subscriptions</h3>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-2 font-bold">Subscriptions</h3>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>

    </div>
    )
}
export default Leftbar;