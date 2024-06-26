import { Fragment } from "react"
import NavbarComponent from "./header/navbar"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const UserLayout=()=>{

    return (
        <Fragment>
            <NavbarComponent/>
                <Outlet/>
            <Footer/>
        </Fragment>
    )
}

export default UserLayout