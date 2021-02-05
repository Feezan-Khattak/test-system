import React from 'react';
import HeaderStyle from "../Styles/HeaderStyle";
import { NavLink } from "react-router-dom";
import ButtonStyle from "../Styles/ButtonStyle";
import TestDemo from './TestDemo';

const Header = () => {
    const classes = HeaderStyle();
    const btnStyle = ButtonStyle();
    return (
        <>
            <header>
                <div className={classes.mainHeaderDiv}>
                    <div className={classes.centerContent}>
                        <h1>Welcome to Online Test System</h1>
                        <p>Distribute your tests online and get the results instantly.
                             Testo does all the grading for you.</p>
                        <br />
                        <NavLink to="/buildtest" className={btnStyle.primaryBtn}>Build Test</NavLink>
                    </div>
                </div>
            </header>
            <TestDemo />
        </>
    );
};

export default Header;