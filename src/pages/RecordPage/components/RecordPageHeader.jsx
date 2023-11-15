import React from 'react'
import './recordpageheader.css'
import logo from '../../../assets/images/logo.jpg'
import arrow from '../../../assets/icons/leftArrow.png'
import { Link } from 'react-router-dom'

function RecordPageHeader() {
  return (
    <div className='header'>
      <div className="addnewLogo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="returnList">
        <Link to="/">
          <img src={arrow} alt="left arrow" />
        </Link>
        <h1>Return to List Page</h1>
      </div>
    </div>
  )
}

export default RecordPageHeader