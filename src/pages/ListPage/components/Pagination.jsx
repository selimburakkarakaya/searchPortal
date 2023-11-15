import React, { useEffect, useState } from 'react'

export default function Pagination({ totalData, setPage, page }) {

    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        if (totalData) {
            setPageNumbers(Array.from(Array(Math.ceil(totalData / 5))?.keys()))
        }
    }, [totalData])

    const paginate = (pageNumber) => {
        if (pageNumber === '...') {
            setPage(prev => page < pageNumbers?.length ? prev + 1 : 1)
        } else {

            setPage(pageNumber);
        }
    }

    const [pageList, setPageList] = useState()
    useEffect(() => {

        let newPage = pageNumbers.map(x => x + 1)
        let data = [...newPage]
        
        let firstToLast = newPage.slice(newPage.length - 3)[0]

        if (newPage.length < 7) {
            data = newPage
        }
        else if (page < 4) {
            data = [...newPage.slice(0, 3), '...', ...newPage.slice(newPage.length - 3)]
        } else if (page <= newPage.length) {
            data = [...newPage.slice(page >= firstToLast ? firstToLast - 4 : page - 3, page >= firstToLast ? firstToLast - 1 : page), '...', ...newPage.slice(newPage.length - 3)]
        }

        setPageList(data)
    }, [page, pageNumbers])

    return (
        <>
            {
                totalData > 0 &&
                <div className="pagination-position">
                    <div className="previous_and_next" onClick={() => page > 1 && paginate(page - 1)} >Previous</div>
                    {
                        pageList?.map(number => (
                            <div key={number} className={page === number ? 'pagination-item-active' : number === '...' ? 'pagination-item-dots' : 'pagination-item'} onClick={() => paginate(number)}>
                                {number}
                            </div>
                        ))
                    }
                    <div className="previous_and_next" onClick={() => page < pageNumbers?.length && paginate(page + 1)} >Next</div>
                </div >
            }

        </>
    )
}
