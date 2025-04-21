import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

// import hamburger from '../allimages/hamburger.png'
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-5 shadow">
            <div className="flex col-span-1">
                <img className="h-11 cursor-pointer"
                    onClick = {()=>toggleMenuHandler()}
                    alt="hamburger-icon"
                    src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'/>
                <img className="h-11" 
                alt="youtube-logo"
                    src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"/>
            </div>
            <div className="col-span-10 flex items-center justify-center">
                <input type="text"
                    className="border h-8 border-gray-400 rounded-l-full p-2 w-1/2"/>
                <button className="h-8 rounded-r-full border border-gray-400">
                    <img alt="search-icon"
                        className="h-7 rounded-r-full"
                        src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
                    />
                </button>
            </div>
            <div className="col-span-1 flex items-center">
                <img alt="user-icon" className="h-8"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            </div>
        </div>
    )
}
export default Header;