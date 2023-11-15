import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import locIcon from '../../../assets/icons/location.png'

function SearchList({ list }) {
  const url = useSelector(state => state.selection.url)

  return (
    <div className="search-main">
      <div className="search-list">
        {
          list?.map((x, index) => (
            <div key={index} className="list-table">
              <div className="list-table-position">
                <div className="list-table-left">
                  <div>
                    <img src={locIcon} alt="" />
                  </div>
                  <div>
                    <div className="item-1">{x[2]}</div>
                    <div className="item-3">{x[7] + ' - ' + x[6]}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        <div className="show-more">
          <Link className="show-more-text" to={`/listPage/${url}`} >
            <span className="cursor">
              Show more...
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchList