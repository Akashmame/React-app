import react from 'react';
import { useState } from 'react/cjs/react.development';
import './style.css'
import Data from './Show_coll'

let i = 1;




const App = () =>{
    

    const [quote,setquote] = useState(`${Data[0].quote}`);
    const [Author,setAuthor] = useState(`${Data[0].author}`);

    const newTime = () =>{


    setquote(`${Data[i].quote}`)
    setAuthor(`${Data[i].author}`)

    i = i+1;

    }




    // setInterval(newTime )
    return(
        <>
<main>
        <div class="section">
        <h2>Quote:</h2>

        <p id="quote">{quote}</p>
        {/* <h3 id="author">Author:</h3> */}
        <h4 id="author"> - {Author}</h4>

        <span><button onClick ={newTime}> Next Quote   ----</button></span>
     </div>
     </main>

        </>
    )
}

export default App;