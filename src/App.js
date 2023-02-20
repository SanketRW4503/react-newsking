import './App.css';
import CategoryMenu from './components/CategoryMenu';
import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import {  useState } from 'react';


function App() {


  let [mode,setMode]=useState({
    backgroundColor:'',
    color:''
    });

 
  function showMode(){
      if(mode.backgroundColor!=='black'){
       
       setMode( { backgroundColor:'black',
       color:'white'}) 
       
       
      }else{
        setMode({backgroundColor:'',
        color:''})
      }
  }

  return (
    <>
       
      <BrowserRouter>
   
      
         <Navbar showMode={showMode} mode={mode} />
        <CategoryMenu mode={mode} showMode={showMode} />
        <Routes>
          
          <Route exact path='/react-newsking' element={<NewsPage  mode={mode} title={'Current Top Breaking Headlines'} key='General' newscat={'General'}  />}></Route>
          <Route exact path='/business' element={<NewsPage  mode={mode} title={'Business Breaking News'} key='business' newscat={'business'}  />}></Route>
          <Route exact path='/entertainment' element={<NewsPage mode={mode}  title={'Entertainment Breaking News'} key='entertainment' newscat={'entertainment'}  />}></Route>
          <Route exact path='/sports' element={<NewsPage  mode={mode} title={'Sports Breaking News'} key='sports' newscat={'sports'} />} ></Route>
          <Route exact path='/music' element={<NewsPage mode={mode}  title={'Music Breaking News'} key='music' newscat={'music'} />}  ></Route>
          <Route exact path='/technology' element={<NewsPage mode={mode}  title={'Technology Breaking News'} key='technology' newscat={'technology'}  />}></Route>
          <Route exact path='/politics' element={<NewsPage  mode={mode} title={'Politics Breaking News'} key='politics' newscat={'politics'}  />}></Route>



          <Route path="/about" element={<About mode={mode}  />}></Route>
          <Route path="/contact" element={<Contact mode={mode}/>}></Route>
     
        </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
