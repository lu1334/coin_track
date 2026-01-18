import { Link,Outlet } from "react-router-dom";

export const NavBar = ()=>{
    return (
        <>
        <div className="nav-shell">
            <ul className="nav">
                <li><Link className="nav-link" to={"/home"}>Home</Link></li>
                <li><Link className="nav-link" to={"/purchased"}>My purchased</Link></li>
            </ul>
            <div className="nav-content">
                <Outlet/>
            </div>
        </div>
        </>
    )
}
