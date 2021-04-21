import React from "react";
import {Navbar, Nav, NavbarBrand} from "bootstrap-react";
import Link from "next/link";

const Header:React.VFC = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark">
                    <NavbarBrand href="/">
                        {/*<img/>*/}
                    </NavbarBrand>
                </Navbar>
            </header>
        </>
    )
}

export default Header