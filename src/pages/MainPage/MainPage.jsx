import React, { useEffect, useState } from 'react'
// import { data } from '../../data/mock-data-old.json'
import SearchInput from '../../components/SearchInput'
import SearchList from './components/SearchList'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'

import logo from '../../assets/images/logo.jpg'
import { getData } from '../../app/utils'

function MainPage() {
  const data = getData()
  
  const [searchValue, setSearchValue] = useState()
  const [click, setClick] = useState(false)
  const [list, setList] = useState()

  const filter = (val) => {
    let filterData = []; 

    val?.map((y)=>{
      filterData.push(data?.filter((x) => x[y]?.toLowerCase().includes(searchValue?.toLowerCase())));
    })

    return filterData.filter(val=> Object.keys(val).length !== 0);
  }
  useEffect(() => {
    if (click) {
      setList()
      if (searchValue && searchValue?.length > 0) {
       setList(...filter([1,6,7]).slice(0, 3))
      }
    }
  }, [searchValue, click])
  
  return (
    <div>
      <div className="main-div">
        <div>
          <Header />
        </div>
        <div className="logo">
          <img src={logo} alt='logo'></img>
          <p>Search app</p>
        </div>
        <div>
          <div className="input-title">Find in records </div>
          <SearchInput setSearchValue={setSearchValue} list={list} searchValue={searchValue} setClick={setClick} click={click} />
        </div>
        {list && list?.length > 0 ?
          <SearchList list={list} />
          :
          list?.length <= 0 && <div className="text-color">
            <span>Not Found..</span>
          </div>
        }
        <div className="slider-con">
          <Slider />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainPage