import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
            <Link to='/' className="fs-3 ubuntu navbar-brand">
                Rick & Morty <span className="text-primary">WiKi</span>
            </Link>

            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <style jsx>
                    {`
                        button[aria-expanded="false"] > .close {
                            display: none;
                        }

                        button[aria-expanded="true"] > .open {
                            display: none;
                        }

                    `}
                </style>
                <i class="fa-solid fa-bars text-dark open"></i>
                <i class="fa-solid fa-xmark text-dark close"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5">
                    <NavLink to='/' activeClassName='active' className="nav-link">Characters</NavLink>
                    <NavLink to='/episode' className="nav-link">Episode</NavLink>
                    <NavLink to='/location' className="nav-link">Location</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

