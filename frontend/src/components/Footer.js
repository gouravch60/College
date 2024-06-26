import { Fragment } from "react";
import PageFooter from "./layout/footer/PageFooter";
import { useLocation } from "react-router-dom";

const Footer =()=>{
    const location = useLocation();
    let isAdmin = location.pathname.startsWith('/admin');

    return (
        <Fragment>
            {isAdmin?(
                ''
            ):(
                <PageFooter/>
            )}
            
        </Fragment>
    );
}

export default Footer;