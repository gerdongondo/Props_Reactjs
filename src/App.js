

import Post from './Post';

import './App.css';



function App(){

  const textPost1="Bonjour tout le monde?"
  const textPost2="comment allez-vous?"
 
  return (
      <>
        <h1> Fil d'actualite</h1>
        <Post text={textPost1} author="vincent" likes={20}/>
        <Post text={textPost2} author="Lucas" likes={30}/>
        <Post text="Vive React.JS" author="Tom" likes={12}/>
      </>
  )
    
}

export default App;

