import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss'

const Cards = ({ results, page }) => {
  
  let display;
  if (results) {
    display = results.map(result => {
      return (
        <Link 
          style={{textDecoration: 'none'}} to={`${page}${result.id}`} 
          className="col-lg-4 col-md-6 col-sm-12 mb-4 position-relative text-dark" 
          key={result.id}
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={result.image} alt='' className={`img-fluid ${styles.img}`} />
            <div style={{ padding: "10px"}} className='content'>
              <div className='fs-5 fw-bold mb-4'>{result.name}</div>
              <div className=''>
                <div className='fs-6'>Last Location</div>
                <div className='fs-5'>{result.location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (result.status === 'Dead') {
              return (
                <div className={`badge text-bg-danger position-absolute ${styles.badge}`}>{result.status}</div>
              )
            } else if (result.status === 'unknown') {
              return (
                <div className={`badge text-bg-secondary position-absolute ${styles.badge}`}>{result.status}</div>
              )
            } else {
              return (
                <div className={`badge text-bg-success position-absolute ${styles.badge}`}>{result.status}</div>
              )
            }
          })()}
          
        </Link>
      )
    })
  } else {
    display = "No Characters Found :/"
  }


  return (
    <>{display}</>
  )
}

export default Cards;