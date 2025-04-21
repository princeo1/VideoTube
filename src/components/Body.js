import Leftbar from "./Leftbar";
const Body = () => {
    return (
        <div className="flex">
            {/* <div className="w-[12%] bg-amber-700">
            </div> */}
            <Leftbar/>
            <div className="bg-amber-200 w-[89%] h-screen"></div>
        </div>
    )
}
export default Body;