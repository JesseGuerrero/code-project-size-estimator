import React, { Component } from "react";
import Dropzone from '../Dropzone/Dropzone';
import "./Dashboard.scss";

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <div className="outer-title-box">
                    <h1 className="title">analy<span className="dot">.</span>se</h1>
                    {/*<div className="dash"></div>*/}
                </div>
                <section className="main-content">
                    <div className="outer-card">
                        <Dropzone onFilesAdded={console.log} />
                    </div>
                </section>
                Source code here: <a href={"https://github.com/JesseGuerrero/Lines-Of-Code-ReactJS"}>My fork</a> & <a href={"https://github.com/CodHeK/analy.se"}>original</a>
            </div>
        );
    }
}

export default Dashboard;
