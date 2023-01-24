import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episode from './Pages/Episode';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />}/>  
        <Route path='/:id' element={<CardDetails />}/>  

        <Route path='/episode' element={<Episode />}/>
        <Route path='/episode/:id' element={<CardDetails />}/>  

        <Route path='/location' element={<Location />}/>
        <Route path='/location/:id' element={<CardDetails />}/>  

      </Routes>

    </Router>
  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState('')
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')

  let [fetchedData, setFetchedData] = useState([])
  let {info, results} = fetchedData
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data)
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
            <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}/>

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page='/' results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
        info={info}
      />
    </div>
  );
}

export default App;
