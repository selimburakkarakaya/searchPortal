import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <nav>
                <div className="addBtn">
                    <Link to="/recordPage">
                        <button>Add new record</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header