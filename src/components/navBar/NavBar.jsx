import React from "react";
// import './NavBar.css';
import "./NavBar.scss";
import styled from "styled-components";
import { NavLink } from "react-router";
const Navstyledcomponent = styled.nav`
    background-color: blue;
    padding: 10px;
    text-align: center;
`;
// const styles={
//     navStyle:{
//         backgroundColor: "black",
//         padding: "10px"
//     },

//     ulStyle:{
//         listStyleType: "none",
//         display: "flex",
//     }
// }

// const navStyle={
//     backgroundColor: "black",
//     padding: "10px"
// }

// const ulStyle={
//     listStyleType: "none",
//     display: "flex",
// }

function NavBar() {
    return (
        <>
            {/* <nav style={navStyle}>
            <ul style={ulStyle}> */}
            {/* <nav style={styles.navStyle}>
            <ul style={styles.ulStyle}> */}
            <Navstyledcomponent>
                <ul>
                    <li>
                        <NavLink to="/">home page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">contact us</NavLink>
                    </li>
                </ul>
            </Navstyledcomponent>
        </>
    );
}

export default NavBar;
