import '../App.css';
import react from 'react';
import { useState } from 'react/cjs/react.development';


function World() {

    const [total,newtotal] = useState("Fetching..");
    const [active,newactive] = useState("Fetching..");
    const [death,newdeath] = useState("Fetching..");
    const [recover,newrecover] = useState("Fetching..");
    const [Date,newDate] = useState("Fetching..");
    async function getdata(){
        const jsondata = await fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats");
        const jsdata = await jsondata.json()
        console.log(jsdata);
        newtotal(jsdata.data.total_cases)
        newactive(jsdata.data.currently_infected)
        newdeath(jsdata.data.death_cases)
        newrecover(jsdata.data.recovery_cases)
        newDate(jsdata.data.last_update)



        // const jsondat = await fetch("https://www.mohfw.gov.in/data/datanew.json");
        // const jsdat = await jsondat.json()
        // console.log(jsdat);
    }

 getdata();


  return (
      <>

<div class="section">

<div class="dateinfo">
    <pan>World</pan><br />
    <date>Last Updated on {Date}</date>
</div>

<div class="first"  id="box">

    <h2>Confirmed Case-</h2>
    <h1 id="total">{total}</h1>
    <p>No. of Confirmed COVID-19 Cases in World</p>
</div>
<div class="second" id="box">
    
    <h2>Active Case-</h2>
    <h1 id="active">{active}</h1>
    <p>No. of Active COVID-19 Cases in World</p>
</div>
<div class="third" id="box">
   
    <h2>Recovered Case-</h2>
    <h1 id="recover">{recover}</h1>
    <p>No. of Recoveries COVID-19 Cases in World</p>
</div>
<div class="fourth" id="box">
    
    <h2>Deceased Case-</h2>
    <h1 id="death">
    {death}</h1>
    <p>No. of Deaths caused by COVID-19 in World</p>
</div>


</div>

      </>
   
  );
}

export default World;
