import '../App.css';
import react from 'react';
import { useState } from 'react/cjs/react.development';




function India() {



    const [total,newtotal] = useState("Fetching..");
    const [active,newactive] = useState("Fetching..");
    const [death,newdeath] = useState("Fetching..");
    const [recover,newrecover] = useState("Fetching..");
    const [Date,newDate] = useState("Fetching..");
    async function getdata(){
       const jsondat = await fetch("https://www.mohfw.gov.in/data/datanew.json");
        const jsdat = await jsondat.json()        // active cured death new_positive new_active  new_death
        newtotal(jsdat[36].new_positive)
        newactive(jsdat[36].new_active)
        newdeath(jsdat[36].new_death)
        newrecover(jsdat[36].new_cured)
       



        // const jsondat = await fetch("https://www.mohfw.gov.in/data/datanew.json");
        // const jsdat = await jsondat.json()
        // console.log(jsdat);
    }

 getdata();
  return (
      <>

<div class="section">

<div class="dateinfo">
    <pan>INDIA</pan><br />
    <date>Last Updated on {Date}</date>
</div>

<div class="first"  id="box">

    <h2>Confirmed Case-</h2>
    <h1 id="total">{total}</h1>
    <p>No. of Confirmed COVID-19 Cases in India</p>
</div>
<div class="second" id="box">
    
    <h2>Active Case-</h2>
    <h1 id="active">{active}</h1>
    <p>No. of Active COVID-19 Cases in India</p>
</div>
<div class="third" id="box">
   
    <h2>Recovered Case-</h2>
    <h1 id="recover">{recover}</h1>
    <p>No. of Recoveries COVID-19 Cases in India</p>
</div>
<div class="fourth" id="box">
    
    <h2>Deceased Case-</h2>
    <h1 id="death">
    {death}</h1>
    <p>No. of Deaths caused by COVID-19 in India</p>
</div>


</div>

      </>
   
  );
}

export default India;
