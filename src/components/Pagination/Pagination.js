import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';




const Pagination = ({pageNumber, setPageNumber, info}) => {
  let [width, setWidth] = useState(window.innerWidth)


  let updateDemension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDemension)

    return () => {
      window.removeEventListener('resize', updateDemension)
    }
  }, [])
    // let prev = () => {
    //     if (pageNumber === 1) return
    //     setPageNumber((value) => value - 1)
    // }

    // let next = () => {
    //     setPageNumber((value) => value + 1)
    // } 
  return (
    // <div>
    //     <div className='container d-flex justify-content-center gap-5 my-5'>
    //         <button onClick={prev} className='btn btn-primary'>Prev</button>
    //         <button onClick={next} className='btn btn-primary'>Next</button>
    //     </div>
    // </div>

    <>
      <style jsx> 
        {`
          @media (max-width: 739px) {
            .prev, .next {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate 
          pageCount={info?.pages}
          className='pagination justify-content-center gap-4 my-4'
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          breakLabel='...'
          previousLabel='Prev'
          previousClassName='btn btn-primary fs-5 prev'
          previousLinkClassName={styles.link}
          nextLabel='Next'
          nextClassName='btn btn-primary fs-5 next'
          nextLinkClassName={styles.link}
          pageClassName='page-item'
          pageLinkClassName='page-link'
          marginPagesDisplayed={width <= 739 ? 1 : 2 }
          pageRangeDisplayed={width <= 739 ? 1 : 2}
          onPageChange={(data) => { 
            console.log(data.selected);
            setPageNumber(data.selected + 1)
          }}
          activeClassName='active'
      />
    </>
  )
}

export default Pagination