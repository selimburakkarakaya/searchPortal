import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SearchInput from '../../components/SearchInput'
// import {data} from '../../data/mock-data-old.json'
import ListTable from './components/ListTable'
import Pagination from './components/Pagination'
import { useSelector } from 'react-redux'
import { getData } from '../../app/utils'
import logo from '../../assets/images/logo.jpg'

function ListPage() {
  const data = getData()
  const { paramValue } = useParams()
  const [list, setList] = useState()
  const [click, setClick] = useState(true)
  const [searchValue, setSearchValue] = useState(paramValue)
  const [totalData, setTotalData] = useState()
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  let secondValue = page * 5;
  let firstValue = secondValue - 5;

  const sort = useSelector(state => state.selection.sort)
  const url = useSelector(state => state.selection.url)

  useEffect(() => {
    orderSort()
  }, [sort])

  const orderSort = async () => {
    if (sort === 1 || sort === 2) {
      data.sort((x, y) => {
        let a = x[1].toUpperCase(), b = y[1].toUpperCase();
        switch (sort) {
          case 1:
            return a === b ? 0 : a > b ? 1 : -1;
          case 2:
            return a === b ? 0 : a < b ? 1 : -1;
          default:
            break;
        }
        return a === b ? 0 : a > b ? 1 : -1;
      });
    } else if (sort === 3 || sort === 4) {
      data.sort((x, y) => {
        var a = x[6].split('/').reverse().join(),
          b = y[6].split('/').reverse().join();
        switch (sort) {
          case 3:
            return a < b ? -1 : (a > b ? 1 : 0);
          case 4:
            return a > b ? -1 : (a < b ? 1 : 0);
          default:
            break;
        }
        return a < b ? -1 : (a > b ? 1 : 0);
      });
    }
  }

  useEffect(() => {
    if (click) {
      if ((paramValue && paramValue?.length > 0) || (searchValue && searchValue?.length > 0)) {
        const search = paramValue !== searchValue ? searchValue : paramValue
        let allData = data.filter((x, index) => (x[1]?.toLowerCase().includes(search?.toLowerCase()) || x[6]?.toLowerCase().includes(search?.toLowerCase()) || x[7]?.toLowerCase().includes(search?.toLowerCase())))
        setTotalData(Object.keys(allData)?.length > 0 ? allData?.length : 0)
        setList(allData.slice(firstValue, secondValue))
      }
      navigate("/listPage/" + searchValue);

    } else {
      if ((paramValue && paramValue?.length > 0) || (url && url?.length > 0)) {
        const search = paramValue !== url ? url : paramValue
        let allData = data.filter((x, index) => (x[1]?.toLowerCase().includes(search?.toLowerCase()) || x[6]?.toLowerCase().includes(search?.toLowerCase()) || x[7]?.toLowerCase().includes(search?.toLowerCase())))
        setList(allData.slice(firstValue, secondValue))
      }
    }
  }, [paramValue, searchValue, click, page, sort])


  useEffect(() => {
    if (paramValue && paramValue?.length > 0) {
      setSearchValue(paramValue)
    }
  }, [paramValue])

  return (
    <div>
      <div className="list-page-area">
        <div className="list-page-logo">
          <Link to="/">
            <img src={logo} alt='logo'></img>
          </Link>
        </div>
        <div className="list-page-search">
          <SearchInput setSearchValue={setSearchValue} searchValue={searchValue} setClick={setClick} click={click} list={list} setPage={setPage} page={page} />
        </div>
        <div className="addBtn">
          <Link to="/recordPage">
            <button>Add new record</button>
          </Link>
        </div>
      </div>
      <div className="list-page-table">
        {
          list && list?.length <= 0 &&
          <div className="text-color">
            <span>Not Found..</span>
          </div>
        }
        <ListTable list={list} />
      </div>
      <div>
        <Pagination totalData={totalData} setPage={setPage} page={page} />
      </div>
    </div>
  )
}

export default ListPage