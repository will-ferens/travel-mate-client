import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.css'
import { CAMERA, HEART, TELESCOPE } from '../constants/svg'




const fill = "#fff"
const HomePage = (props) => {
    return (
        <div className="home-wrapper">
            <header>
                <div>
                </div>
                <div>
                </div>
                <div className="signin-links">
                    <Link to="/signin"><button className="sign-button">Sign In</button></Link>
                    <div className="divider">|</div>
                    <Link to="/signup"><button className="sign-button">Sign Up</button></Link>
                </div>
            </header>
            <main>
                <div className="row-1">
                    <h1 className="title-1">Travel</h1>
                    <div className="img-offset">
                        <h1 className="title">Mate</h1>
                    </div>
                </div>
                <div className="row-2">
                    <div className="description">
                        <svg width="75" height="75" viewBox="0 0 600 600" className="svg">
                            <path d={CAMERA.CAMERA} fill={fill}></path>
                            <path d={CAMERA.CAMERA_2} fill={fill}></path>
                            <path d={CAMERA.CAMERA_3} fill={fill}></path>
                            <path d={CAMERA.CAMERA_4} fill={fill}></path>
                        </svg>
                        <h1 className="description-head">Create</h1>
                    </div>
                    <div className="description">
                        <svg width="75" height="75" className="svg">
                            <path d={HEART.HEART} fill={fill}></path>
                            <path d={HEART.HEART_2} fill={fill}></path>
                        </svg>
                        <h1 className="description-head">Share</h1>
                    </div>
                    <div className="description">
                        <svg width="75" height="75" viewBox="0 0 600 600" className="svg">
                            <path d={TELESCOPE.TELESCOPE} fill={fill}></path>
                            <path d={TELESCOPE.TELESCOPE_2} fill={fill}></path>
                        </svg>
                        <h1 className="description-head">Explore</h1>
                    </div>
                </div>
                <div className="row-3">
                    <div>
                        <h1 className="description-head">Featured Users</h1>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default HomePage