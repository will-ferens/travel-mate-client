import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = (props) => {
    return (
        <div>
            <header>
                <div>
                    <Link to="/signin"><button>Sign In</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>
            </header>
            <main>
                
            </main>
            <footer>
            </footer>
        </div>
    )
}

export default HomePage