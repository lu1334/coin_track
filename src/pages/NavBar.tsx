import { Link,Outlet } from "react-router-dom";

export const NavBar = ()=>{
    return (
        <>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/purchased"}>My purchased</Link></li>
        </ul>
        <Outlet/>
        </>
    )
}