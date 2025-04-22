import RightContent from "./RightContent";
import Leftbar from "./Leftbar";
// import WatchPage from "./WatchPage";
import { Outlet } from "react-router";
const Body = () => {
    return (
        <div className="flex">
            {/* <div className="w-[12%] bg-amber-700">
            </div> */}
            <Leftbar/>
            <Outlet/>
            {/* <RightContent/>
            <WatchPage/> */}
            {/* <div className="bg-amber-200 min-w-[89%] w-[100%] h-screen"></div> */}
        </div>
    )
}
export default Body;