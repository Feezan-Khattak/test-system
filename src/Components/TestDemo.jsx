import React from 'react';
import MainDiv from "../Styles/MainDiv";
import TestDemoStyle from "../Styles/TestDemoStyle";

const TestDemo = () => {
    const classes = TestDemoStyle();
    const mainStyle = MainDiv();
    return (
        <div className={mainStyle.mainDiv}>
            <div className={classes.testDemo}>
                <h1>Build Test By Your Own</h1>
                <p>Go to Build Test and Create your test that's all</p>
            </div>


        </div>
    );
};

export default TestDemo;