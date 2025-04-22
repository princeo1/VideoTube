import RightContent from "./RightContent";
import Leftbar from "./Leftbar";
const Body = () => {
    return (
        <div className="flex">
            {/* <div className="w-[12%] bg-amber-700">
            </div> */}
            <Leftbar/>
            <RightContent/>
            {/* <div className="bg-amber-200 min-w-[89%] w-[100%] h-screen"></div> */}
        </div>
    )
}
export default Body;