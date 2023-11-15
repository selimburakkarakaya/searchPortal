import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SortIco from '../../../assets/icons/sort.png'
import { setSort } from '../../../features/Slice'
import locIcon from '../../../assets/icons/location.png'


function ListTable({ list }) {

  const [showSort, setShowSort] = useState(false)

  const dispatch = useDispatch()

  const sortType = (type) => {
    setShowSort(false)
    dispatch(setSort(type))
  }

  return (
    <div>
      <div className="sort-div" onClick={() => setShowSort(!showSort)}>
        <img src={SortIco} alt="icon" />
        Order By
      </div>
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
              <div className="list-table-right">
                <div className="item-2">{x[1]}</div>
                <div className="item-4">{x[3]}</div>
              </div>
            </div>
          </div>
        ))
      }
      {
        showSort &&
        <div className="sort-list">
          <div className="sort-item" onClick={() => sortType(1)}> Name ascending</div>
          <div className="sort-item" onClick={() => sortType(2)}> Name descending</div>
          <div className="sort-item" onClick={() => sortType(3)}> Country ascending</div>
          <div className="sort-item" onClick={() => sortType(4)}> Country descending </div>
        </div>
      }

    </div>
  )
}

export default ListTable