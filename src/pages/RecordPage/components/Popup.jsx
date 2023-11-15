import React from 'react'
import './popup.css'
import { useSelector } from 'react-redux'

function Popup() {
  const valid = useSelector(state => state.selection.valid)
  
  const showPopup = Object.values(valid).some(x => x === false);

  return showPopup ?  (
    <div className="popup-con">
      <div className="popup">
        <div className="closeBtn">
          <button>X</button>
        </div>
        <div className="captionError">
          <div className="caption">
            <p>Error while adding link element</p>
            <span>{valid.errorText}</span>
          </div>
          <div className="errorBtn">
            <button>Error</button>
          </div>
        </div>
      </div>
    </div>
  )
  : ''
}

export default Popup