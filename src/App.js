import React,{useState} from 'react'
import axios from 'axios'
import Gallery from './Gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch] = useState("")
  const [images,setImages] = useState([])
  const changeHandler = e => {
    setSearch(e.target.value)
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(search)
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then(response => setImages(response.data.photos.photo))
  }
  return (
    <div>
       <center>
        <h2>Gallery snapshots</h2>
        <form onSubmit={submitHandler}>
          <input type='text' value={search} onChange={changeHandler}/><br></br><br></br>
          <input type='submit'/>
        </form> <br></br>
        {images.length>=1?<Gallery data={images}/>:<h4>No data loaded</h4>}
        {/*there should be no gaps in  the above line*/}
       </center>
    </div>
  )
}

export default App
