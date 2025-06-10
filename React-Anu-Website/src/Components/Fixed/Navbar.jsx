import React from 'react'
import '../../CSS/Components/Fixed/Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg">
            <div className="container">
                {/* <a className="" href="#">আমার প্রিয়তমা🫵❤️</a> */}
                 <Link className="nav-link navbar-brand" to={'/'} >আমার প্রিয়তমা🫵❤️</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'} >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/who-is-she'} >Who is She</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={'/dedicated-poems'} >Dedicated Poems</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar