import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'

const Episode = () => {

  let [id, setID] = useState(1)
  let [info, setInfo] = useState([])
  let [results, setResults] = useState([])

  let { name, air_date } = info


  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    
    (async function () {
      let data = await fetch(api)
      .then((res) => res.json())
      setInfo(data);

      let link = await Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((res) => res.json())
        })
      )

      setResults(link)
    })()

    
  }, [api])

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center'>
          Episode : {' '}
          <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>    
        </h1>

        <h5 className='text-center'>
          Air Date: {air_date === '' ? 'Unknown' : air_date}
        </h5>
      </div>

      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'> Pick Episode</h4>
          <InputGroup total={51} name='Episode' setID={setID}/>
        </div>

        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page='/episode/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode