import Head from "next/head";
import Link from "next/link";
import {useState, useEffect} from 'react'
import styles from "../styles/Home.module.css";

export default function Search() {
    const [formInputs, setFormInputs] = useState()
    const [searchField, setSearchField] = useState('love')
    const [searchResponse, setSearchResponse] = useState([])


    useEffect(()=>{
      setSearchResults(initialData.loveGifs.data)
    }, [initialData])

    //Validating form input
    const handleInputs = (event) =>{
        let {name, value} = event.target 
        setFormInputs({...formInputs, [name]: [value]});
    }

    // Fetching response from API
    const search = async (event) => {
      event.preventDefault()
      let gifs = await fetch('https://api.giphy.com/v1/gifs/search?q=${formInputs.searchField}&api_key=tv6yWZ56py5wWeWnm38aXowXMKW6DPr2&limit=6')
      gifs = await gifs.json()
      setSearchResponse(gifs.data)
      setSearchField(formInputs.searchField)
    }

  return (
    <>
      <Head>
        <title>Search Giphy</title>
      </Head>
      <main className={styles.container}>
        <h1>Giphy-next.js Website</h1>
        <p>Search any Giphy right in here.</p>


        <section>
          <form onSubmit={search}>
              <input type="text" name="searchField" onChange={handleInputs}  />
              <button>Search</button>
          </form>
      </section>

      {/* Displaying data */}
      <div className="giphy-search-results-grid">
        {searchResponse.map((each, index) => {
          return(
            <div key={index}>
              <h3>{each.title}</h3>
              <img src={each.images.original.url} alt={each.title}/>
            </div>
          )
        })}
      </div>
      </main>


    </>
  );
}

export async function getStaticProps() {
  let loveGifs = await fetch('https://api.giphy.com/v1/gifs/search?q=love&api_key=tv6yWZ56py5wWeWnm38aXowXMKW6DPr2&limit=6')
  loveGifs = await loveGifs.json()
  return {props: {loveGifs: loveGifs}}  
}
