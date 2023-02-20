import Newscard from './Newscard'
import '../App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import Loader from './Loader';
import Footer from './Footer';
import imageNotFound from './images/image-not-found.png'


export default function NewsPage(props) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

let nullObj={
  image:imageNotFound
  ,title:"No Title",description:'No Description Available Click On "Read More" to know more'
}

  function nextFun() {
    setLoading(true)
    setPage(page+1)
     


  }

  function prevFun() {
    setLoading(true)

    setPage(page-1)
   
  }


  
    
  
  
  useEffect(() => {
    setLoading(true)
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.newscat}&apiKey=38a057e43aab4e1db7a056524a9c7b1f&page=` +page
      axios.get(url).then((response => {
      setData(response.data)
      setLoading(false)

     
       }));
  // eslint-disable-next-line
}, [page]);





   
      
      if(loading===false){
        return <section className='Content-Page' style={props.mode.backgroundColor==='black'?{backgroundColor:'#3c3c3c',color:'white'}:props.mode}>
        <h1>{props.title}</h1>
        <div id='news-box'>
          {data.articles.map((e, index) => {
            return <Newscard title={e.title===null?nullObj.title:e.title} img={e.urlToImage===null?nullObj.image:e.urlToImage} 
            description={e.description===null?nullObj.description:e.description} newsUrl={e.url} key={index} mode={props.mode} />

          })
          }
        </div>
        <div id='pageChanger'>
          <button onClick={prevFun} disabled={page === 1}>Prev</button>

          <button onClick={nextFun} disabled={page === Math.ceil(data.totalResults / 20)} >Next</button>
        </div>
        {window.innerWidth<850? <Footer mode={props.mode}/>:<div></div>} 

      </section>
        }else{
         return <Loader mode={props.mode}/>
              

        }
      
   
  




}
