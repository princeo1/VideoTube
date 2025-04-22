import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import SideBar from './components/SideBar.js';
import Body from './components/Body'
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RightContent from "./components/RightContent";
import WatchPage from "./components/WatchPAge";

const appRouter = createBrowserRouter([{
    path: '/',
    element: <Body/>,
    children: [
        {
            path: '/',
            element: <RightContent/>
        },
        {
            path: '/watch',
            element: <WatchPage/>
        }
    ]
}])

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <RouterProvider router={appRouter}/>
                {/* <Body/> */}
            </div>
        </Provider>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
