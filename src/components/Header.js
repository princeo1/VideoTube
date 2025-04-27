import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState,useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

// import hamburger from '../allimages/hamburger.png'
const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    
    useEffect(()=>{
        // Make an api call for every key press 
        // if difference between 2 api calls are less than 200 ms
        // ddecline api call
        const timer = setTimeout(()=> getSearchSuggestions(),200);
        return () => {
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async () => {
        console.log("api call- " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);
    }
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
            <div>
                <div className="col-span-10 flex items-center justify-start"
                onMouseOver={()=>setShowSuggestions(true)}
                onMouseOut={()=>setShowSuggestions(false)}>
                    <input type="text"
                    className="border h-8 border-gray-400 rounded-l-full p-2 w-1/2"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    <button className="h-8 rounded-r-full border border-gray-400">
                    <img alt="search-icon"
                        className="h-7 rounded-r-full"
                        src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
                    />
                    </button>
                </div>
                {showSuggestions && <div className="bg-white absolute w-1/5 shadow"
                onMouseOver={()=>setShowSuggestions(true)}
                onMouseOut={()=>setShowSuggestions(false)}>
                <ul className="">
                    {
                        suggestions.map((item)=>(
                            <li key={item} className="mt-3 pl-2 hover:bg-gray-200">{item}</li>
                        ))
                    }
                </ul>
                </div>}
            </div>
            <div className="col-span-1 flex items-center">
                <img alt="user-icon" className="h-8"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            </div>
        </div>
    )
}
export default Header;