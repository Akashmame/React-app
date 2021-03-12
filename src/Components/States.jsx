import '../App.css';
import react from 'react';
import { useState } from 'react/cjs/react.development';

function States() {




    

 function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable1");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }










  const [anc,newanc] = useState("-/-");
  const [ant,newant] = useState("-/-");
  const [and,newand] = useState("-/-");
  const [anr,newanr] = useState("-/-");
  const [anv,newanv] = useState("-/-");
 
 
 
 
 
  const [apc,newapc] = useState("-/-");
  const [apt,newapt] = useState("-/-");
  const [apd,newapd] = useState("-/-");
  const [apr,newapr] = useState("-/-");
  const [apv,newapv] = useState("-/-");
 
 
  const [arc,newarc] = useState("-/-");
  const [art,newart] = useState("-/-");
  const [ard,neward] = useState("-/-");
  const [arr,newarr] = useState("-/-");
  const [arv,newarv] = useState("-/-");
 
 
  const [asc,newasc] = useState("-/-");
  const [ast,newast] = useState("-/-");
  const [asd,newasd] = useState("-/-");
  const [asr,newasr] = useState("-/-");
  const [asv,newasv] = useState("-/-");
 
  const [BRC,newBRC] = useState("-/-");
  const [BRT,newBRT] = useState("-/-");
  const [BRD,newBRD] = useState("-/-");
  const [BRR,newBRR] = useState("-/-");
  const [BRV,newBRV] = useState("-/-");
 
  const [CHC,newCHC] = useState("-/-");
  const [CHT,newCHT] = useState("-/-");
  const [CHD,newCHD] = useState("-/-");
  const [CHR,newCHR] = useState("-/-");
  const [CHV,newCHV] = useState("-/-");
 
  const [CTC,newCTC] = useState("-/-");
  const [CTT,newCTT] = useState("-/-");
  const [CTD,newCTD] = useState("-/-");
  const [CTR,newCTR] = useState("-/-");
  const [CTV,newCTV] = useState("-/-");
 
  const [DNC,newDNC] = useState("-/-");
  const [DNT,newDNT] = useState("-/-");
  const [DND,newDND] = useState("-/-");
  const [DNR,newDNR] = useState("-/-");
  const [DNV,newDNV] = useState("-/-");
 
  const [DLC,newDLC] = useState("-/-");
  const [DLT,newDLT] = useState("-/-");
  const [DLD,newDLD] = useState("-/-");
  const [DLR,newDLR] = useState("-/-");
  const [DLV,newDLV] = useState("-/-");
 
  const [GAC,newGAC] = useState("-/-");
  const [GAT,newGAT] = useState("-/-");
  const [GAD,newGAD] = useState("-/-");
  const [GAR,newGAR] = useState("-/-");
  const [GAV,newGAV] = useState("-/-");
 
  const [GJC,newGJC] = useState("-/-");
  const [GJT,newGJT] = useState("-/-");
  const [GJD,newGJD] = useState("-/-");
  const [GJR,newGJR] = useState("-/-");
  const [GJV,newGJV] = useState("-/-");
 
  const [HRC,newHRC] = useState("-/-");
  const [HRT,newHRT] = useState("-/-");
  const [HRD,newHRD] = useState("-/-");
  const [HRR,newHRR] = useState("-/-");
  const [HRV,newHRV] = useState("-/-");
 
  const [HPC,newHPC] = useState("-/-");
  const [HPT,newHPT] = useState("-/-");
  const [HPD,newHPD] = useState("-/-");
  const [HPR,newHPR] = useState("-/-");
  const [HPV,newHPV] = useState("-/-");
 
  const [JKC,newJKC] = useState("-/-");
  const [JKT,newJKT] = useState("-/-");
  const [JKD,newJKD] = useState("-/-");
  const [JKR,newJKR] = useState("-/-");
  const [JKV,newJKV] = useState("-/-");
 
  const [JHC,newJHC] = useState("-/-");
  const [JHT,newJHT] = useState("-/-");
  const [JHD,newJHD] = useState("-/-");
  const [JHR,newJHR] = useState("-/-");
  const [JHV,newJHV] = useState("-/-");
 
  const [KAC,newKAC] = useState("-/-");
  const [KAT,newKAT] = useState("-/-");
  const [KAD,newKAD] = useState("-/-");
  const [KAR,newKAR] = useState("-/-");
  const [KAV,newKAV] = useState("-/-");
 
  const [KLC,newKLC] = useState("-/-");
  const [KLT,newKLT] = useState("-/-");
  const [KLD,newKLD] = useState("-/-");
  const [KLR,newKLR] = useState("-/-");
  const [KLV,newKLV] = useState("-/-");
 
  const [LDC,newLDC] = useState("-/-");
  const [LDT,newLDT] = useState("-/-");
  const [LDD,newLDD] = useState("-/-");
  const [LDR,newLDR] = useState("-/-");
  const [LDV,newLDV] = useState("-/-");
 
  const [MPC,newMPC] = useState("-/-");
  const [MPT,newMPT] = useState("-/-");
  const [MPD,newMPD] = useState("-/-");
  const [MPR,newMPR] = useState("-/-");
  const [MPV,newMPV] = useState("-/-");
 
  const [MHC,newMHC] = useState("-/-");
  const [MHT,newMHT] = useState("-/-");
  const [MHD,newMHD] = useState("-/-");
  const [MHR,newMHR] = useState("-/-");
  const [MHV,newMHV] = useState("-/-");
 
  const [MNC,newMNC] = useState("-/-");
  const [MNT,newMNT] = useState("-/-");
  const [MND,newMND] = useState("-/-");
  const [MNR,newMNR] = useState("-/-");
  const [MNV,newMNV] = useState("-/-");
 
  const [MLC,newMLC] = useState("-/-");
  const [MLT,newMLT] = useState("-/-");
  const [MLD,newMLD] = useState("-/-");
  const [MLR,newMLR] = useState("-/-");
  const [MLV,newMLV] = useState("-/-");
 
  const [MZC,newMZC] = useState("-/-");
  const [MZT,newMZT] = useState("-/-");
  const [MZD,newMZD] = useState("-/-");
  const [MZR,newMZR] = useState("-/-");
  const [MZV,newMZV] = useState("-/-");
 
  const [NLC,newNLC] = useState("-/-");
  const [NLT,newNLT] = useState("-/-");
  const [NLD,newNLD] = useState("-/-");
  const [NLR,newNLR] = useState("-/-");
  const [NLV,newNLV] = useState("-/-");
 
  const [ORC,newORC] = useState("-/-");
  const [ORT,newORT] = useState("-/-");
  const [ORD,newORD] = useState("-/-");
  const [ORR,newORR] = useState("-/-");
  const [ORV,newORV] = useState("-/-");
 
  const [PYC,newPYC] = useState("-/-");
  const [PYT,newPYT] = useState("-/-");
  const [PYD,newPYD] = useState("-/-");
  const [PYR,newPYR] = useState("-/-");
  const [PYV,newPYV] = useState("-/-");
 
  const [PBC,newPBC] = useState("-/-");
  const [PBT,newPBT] = useState("-/-");
  const [PBD,newPBD] = useState("-/-");
  const [PBR,newPBR] = useState("-/-");
  const [PBV,newPBV] = useState("-/-");
 
  const [RJC,newRJC] = useState("-/-");
  const [RJT,newRJT] = useState("-/-");
  const [RJD,newRJD] = useState("-/-");
  const [RJR,newRJR] = useState("-/-");
  const [RJV,newRJV] = useState("-/-");
 
  const [SKC,newSKC] = useState("-/-");
  const [SKT,newSKT] = useState("-/-");
  const [SKD,newSKD] = useState("-/-");
  const [SKR,newSKR] = useState("-/-");
  const [SKV,newSKV] = useState("-/-");
 
  const [TNC,newTNC] = useState("-/-");
  const [TNT,newTNT] = useState("-/-");
  const [TND,newTND] = useState("-/-");
  const [TNR,newTNR] = useState("-/-");
  const [TNV,newTNV] = useState("-/-");
 
  const [TGC,newTGC] = useState("-/-");
  const [TGT,newTGT] = useState("-/-");
  const [TGD,newTGD] = useState("-/-");
  const [TGR,newTGR] = useState("-/-");
  const [TGV,newTGV] = useState("-/-");
 
  const [TRC,newTRC] = useState("-/-");
  const [TRT,newTRT] = useState("-/-");
  const [TRD,newTRD] = useState("-/-");
  const [TRR,newTRR] = useState("-/-");
  const [TRV,newTRV] = useState("-/-");
 
  const [UPC,newUPC] = useState("-/-");
  const [UPT,newUPT] = useState("-/-");
  const [UPD,newUPD] = useState("-/-");
  const [UPR,newUPR] = useState("-/-");
  const [UPV,newUPV] = useState("-/-");
 
  const [UTC,newUTC] = useState("-/-");
  const [UTT,newUTT] = useState("-/-");
  const [UTD,newUTD] = useState("-/-");
  const [UTR,newUTR] = useState("-/-");
  const [UTV,newUTV] = useState("-/-");
 
  const [WBC,newWBC] = useState("-/-");
  const [WBT,newWBT] = useState("-/-");
  const [WBD,newWBD] = useState("-/-");
  const [WBR,newWBR] = useState("-/-");
  const [WBV,newWBV] = useState("-/-");
 
 
 
  async function getstate(){
     const jsondata = await fetch("https://api.covid19india.org/v4/min/data.min.json");
     const jsdata = await jsondata.json()
     newanc(jsdata.AN.total.confirmed)
     newant(jsdata.AN.total.tested)
     newand(jsdata.AN.total.deceased)
     newanv(jsdata.AN.total.vaccinated)
     newanr(jsdata.AN.total.recovered)
 
 
 
     newapc(jsdata.AP.total.confirmed)
     newapt(jsdata.AP.total.tested)
     newapd(jsdata.AP.total.deceased)
     newapv(jsdata.AP.total.vaccinated)
     newapr(jsdata.AP.total.recovered)
 
     newarc(jsdata.AR.total.confirmed)
     newart(jsdata.AR.total.tested)
     neward(jsdata.AR.total.deceased)
     newarv(jsdata.AR.total.vaccinated)
     newarr(jsdata.AR.total.recovered)
 
     newasc(jsdata.AS.total.confirmed)
     newast(jsdata.AS.total.tested)
     newasd(jsdata.AS.total.deceased)
     newasv(jsdata.AS.total.vaccinated)
     newasr(jsdata.AS.total.recovered)
 
     newBRC(jsdata.BR.total.confirmed)
     newBRT(jsdata.BR.total.tested)
     newBRD(jsdata.BR.total.deceased)
     newBRV(jsdata.BR.total.vaccinated)
     newBRR(jsdata.BR.total.recovered)
 
     newCHC(jsdata.CH.total.confirmed)
     newCHT(jsdata.CH.total.tested)
     newCHD(jsdata.CH.total.deceased)
     newCHV(jsdata.CH.total.vaccinated)
     newCHR(jsdata.CH.total.recovered)
 
     newCTC(jsdata.CT.total.confirmed)
     newCTT(jsdata.CT.total.tested)
     newCTD(jsdata.CT.total.deceased)
     newCTV(jsdata.CT.total.vaccinated)
     newCTR(jsdata.CT.total.recovered)
 
     newDNC(jsdata.DN.total.confirmed)
     newDNT(jsdata.DN.total.tested)
     newDND(jsdata.DN.total.deceased)
     newDNV(jsdata.DN.total.vaccinated)
     newDNR(jsdata.DN.total.recovered)
 
     newDLC(jsdata.DL.total.confirmed)
     newDLT(jsdata.DL.total.tested)
     newDLD(jsdata.DL.total.deceased)
     newDLV(jsdata.DL.total.vaccinated)
     newDLR(jsdata.DL.total.recovered)
 
     newGAC(jsdata.GA.total.confirmed)
     newGAT(jsdata.GA.total.tested)
     newGAD(jsdata.GA.total.deceased)
     newGAV(jsdata.GA.total.vaccinated)
     newGAR(jsdata.GA.total.recovered)
 
     newGJC(jsdata.GJ.total.confirmed)
     newGJT(jsdata.GJ.total.tested)
     newGJD(jsdata.GJ.total.deceased)
     newGJV(jsdata.GJ.total.vaccinated)
     newGJR(jsdata.GJ.total.recovered)
 
     newHRC(jsdata.HR.total.confirmed)
     newHRT(jsdata.HR.total.tested)
     newHRD(jsdata.HR.total.deceased)
     newHRV(jsdata.HR.total.vaccinated)
     newHRR(jsdata.HR.total.recovered)
 
     newHPC(jsdata.HP.total.confirmed)
     newHPT(jsdata.HP.total.tested)
     newHPD(jsdata.HP.total.deceased)
     newHPV(jsdata.HP.total.vaccinated)
     newHPR(jsdata.HP.total.recovered)
 
     newJKC(jsdata.JK.total.confirmed)
     newJKT(jsdata.JK.total.tested)
     newJKD(jsdata.JK.total.deceased)
     newJKV(jsdata.JK.total.vaccinated)
     newJKR(jsdata.JK.total.recovered)
 
     newJHC(jsdata.JH.total.confirmed)
     newJHT(jsdata.JH.total.tested)
     newJHD(jsdata.JH.total.deceased)
     newJHV(jsdata.JH.total.vaccinated)
     newJHR(jsdata.JH.total.recovered)
 
     newKAC(jsdata.KA.total.confirmed)
     newKAT(jsdata.KA.total.tested)
     newKAD(jsdata.KA.total.deceased)
     newKAV(jsdata.KA.total.vaccinated)
     newKAR(jsdata.KA.total.recovered)
 
     newKLC(jsdata.KL.total.confirmed)
     newKLT(jsdata.KL.total.tested)
     newKLD(jsdata.KL.total.deceased)
     newKLV(jsdata.KL.total.vaccinated)
     newKLR(jsdata.KL.total.recovered)
 
     newLDC(jsdata.LD.total.confirmed)
     newLDT(jsdata.LD.total.tested)
     newLDD(jsdata.LD.total.deceased)
     newLDV(jsdata.LD.total.vaccinated)
     newLDR(jsdata.LD.total.recovered)
 
     newMPC(jsdata.MP.total.confirmed)
     newMPT(jsdata.MP.total.tested)
     newMPD(jsdata.MP.total.deceased)
     newMPV(jsdata.MP.total.vaccinated)
     newMPR(jsdata.MP.total.recovered)
 
     newMHC(jsdata.MH.total.confirmed)
     newMHT(jsdata.MH.total.tested)
     newMHD(jsdata.MH.total.deceased)
     newMHV(jsdata.MH.total.vaccinated)
     newMHR(jsdata.MH.total.recovered)
 
     newMLC(jsdata.ML.total.confirmed)
     newMLT(jsdata.ML.total.tested)
     newMLD(jsdata.ML.total.deceased)
     newMLV(jsdata.ML.total.vaccinated)
     newMLR(jsdata.ML.total.recovered)
 
     newMZC(jsdata.MZ.total.confirmed)
     newMZT(jsdata.MZ.total.tested)
     newMZD(jsdata.MZ.total.deceased)
     newMZV(jsdata.MZ.total.vaccinated)
     newMZR(jsdata.MZ.total.recovered)
 
     newMNC(jsdata.MN.total.confirmed)
     newMNT(jsdata.MN.total.tested)
     newMND(jsdata.MN.total.deceased)
     newMNV(jsdata.MN.total.vaccinated)
     newMNR(jsdata.MN.total.recovered)
 
     newNLC(jsdata.NL.total.confirmed)
     newNLT(jsdata.NL.total.tested)
     newNLD(jsdata.NL.total.deceased)
     newNLV(jsdata.NL.total.vaccinated)
     newNLR(jsdata.NL.total.recovered)
 
     newORC(jsdata.OR.total.confirmed)
     newORT(jsdata.OR.total.tested)
     newORD(jsdata.OR.total.deceased)
     newORV(jsdata.OR.total.vaccinated)
     newORR(jsdata.OR.total.recovered)
 
     newPYC(jsdata.PY.total.confirmed)
     newPYT(jsdata.PY.total.tested)
     newPYD(jsdata.PY.total.deceased)
     newPYV(jsdata.PY.total.vaccinated)
     newPYR(jsdata.PY.total.recovered)
 
     newPBC(jsdata.PB.total.confirmed)
     newPBT(jsdata.PB.total.tested)
     newPBD(jsdata.PB.total.deceased)
     newPBV(jsdata.PB.total.vaccinated)
     newPBR(jsdata.PB.total.recovered)
 
     newRJC(jsdata.RJ.total.confirmed)
     newRJT(jsdata.RJ.total.tested)
     newRJD(jsdata.RJ.total.deceased)
     newRJV(jsdata.RJ.total.vaccinated)
     newRJR(jsdata.RJ.total.recovered)
 
     newSKC(jsdata.SK.total.confirmed)
     newSKT(jsdata.SK.total.tested)
     newSKD(jsdata.SK.total.deceased)
     newSKV(jsdata.SK.total.vaccinated)
     newSKR(jsdata.SK.total.recovered)
 
     newTNC(jsdata.TN.total.confirmed)
     newTNT(jsdata.TN.total.tested)
     newTND(jsdata.TN.total.deceased)
     newTNV(jsdata.TN.total.vaccinated)
     newTNR(jsdata.TN.total.recovered)
 
     newTGC(jsdata.TG.total.confirmed)
     newTGT(jsdata.TG.total.tested)
     newTGD(jsdata.TG.total.deceased)
     newTGV(jsdata.TG.total.vaccinated)
     newTGR(jsdata.TG.total.recovered)
 
     newTRC(jsdata.TR.total.confirmed)
     newTRT(jsdata.TR.total.tested)
     newTRD(jsdata.TR.total.deceased)
     newTRV(jsdata.TR.total.vaccinated)
     newTRR(jsdata.TR.total.recovered)
 
     newUPC(jsdata.UP.total.confirmed)
     newUPT(jsdata.UP.total.tested)
     newUPD(jsdata.UP.total.deceased)
     newUPV(jsdata.UP.total.vaccinated)
     newUPR(jsdata.UP.total.recovered)
 
     newUTC(jsdata.UT.total.confirmed)
     newUTT(jsdata.UT.total.tested)
     newUTD(jsdata.UT.total.deceased)
     newUTV(jsdata.UT.total.vaccinated)
     newUTR(jsdata.UT.total.recovered)
 
     newWBC(jsdata.WB.total.confirmed)
     newWBT(jsdata.WB.total.tested)
     newWBD(jsdata.WB.total.deceased)
     newWBV(jsdata.WB.total.vaccinated)
     newWBR(jsdata.WB.total.recovered)
   
 
 }
 
 getstate();
 









  return (
   <>

     
<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for State.." />
          {/* <table  class ="table table-dark table-striped" id="myTable1">
              <tr class="header"> */}


              <table role="table" id="myTable1">
  <thead role="rowgroup">
    <tr role="row">
                <th role="columnheader">State</th>
                <th role="columnheader">confirmed</th>
                <th role="columnheader">recovered</th>
                <th role="columnheader">tested</th>
                <th role="columnheader">deceased</th>
                <th role="columnheader">vaccinated</th>
              </tr>
              </thead>
  <tbody role="rowgroup">
              <tr role="row">
                <td role="cell">Andaman and Nicobar Islands</td>
                <td role="cell">{anc}</td>
                <td role="cell">{anr}</td>
                <td role="cell">{ant}</td>
                <td role="cell">{and}</td>
                <td role="cell">{anv}</td>
              </tr>
              <tr role="row">
              <td role="cell">Andhra Pradesh</td>
              <td role="cell">{apc}</td>
                <td role="cell">{apr}</td>
                <td role="cell">{apt}</td>
                <td role="cell">{apd}</td>
                <td role="cell">{apv}</td>
              </tr>
              <tr role="row">
              <td role="cell">Arunachal Pradesh</td>
              <td role="cell">{arc}</td>
                <td role="cell">{arr}</td>
                <td role="cell">{art}</td>
                <td role="cell">{ard}</td>
                <td role="cell">{arv}</td>
              </tr>
              <tr role="row">
              <td role="cell">Assam</td>
              <td role="cell">{asc}</td>
                <td role="cell">{asr}</td>
                <td role="cell">{ast}</td>
                <td role="cell">{asd}</td>
                <td role="cell">{asv}</td>
              </tr>
              <tr role="row">
              <td role="cell">Bihar</td>
              <td role="cell">{BRC}</td>
                <td role="cell">{BRR}</td>
                <td role="cell">{BRT}</td>
                <td role="cell">{BRD}</td>
                <td role="cell">{BRV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Chandigarh</td>
              <td role="cell">{CHC}</td>
                <td role="cell">{CHR}</td>
                <td role="cell">{CHT}</td>
                <td role="cell">{CHD}</td>
                <td role="cell">{CHV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Chhattisgarh</td>
              <td role="cell">{CTC}</td>
                <td role="cell">{CTR}</td>
                <td role="cell">{CTT}</td>
                <td role="cell">{CTD}</td>
                <td role="cell">{CTV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Dadra and Nagar Haveli</td>
              <td role="cell">{DNC}</td>
                <td role="cell">{DNR}</td>
                <td role="cell">{DNT}</td>
                <td role="cell">{DND}</td>
                <td role="cell">{DNV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Delhi</td>
              <td role="cell">{DLC}</td>
                <td role="cell">{DLR}</td>
                <td role="cell">{DLT}</td>
                <td role="cell">{DLD}</td>
                <td role="cell">{DLV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Goa</td>
              <td role="cell">{GAC}</td>
                <td role="cell">{GAR}</td>
                <td role="cell">{GAT}</td>
                <td role="cell">{GAD}</td>
                <td role="cell">{GAV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Gujarat</td>
              <td role="cell">{GJC}</td>
                <td role="cell">{GJR}</td>
                <td role="cell">{GJT}</td>
                <td role="cell">{GJD}</td>
                <td role="cell">{GJV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Haryana</td>
              <td role="cell">{HRC}</td>
                <td role="cell">{HRR}</td>
                <td role="cell">{HRT}</td>
                <td role="cell">{HRD}</td>
                <td role="cell">{HRV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Himachal Pradesh</td>
              <td role="cell">{HPC}</td>
                <td role="cell">{HPR}</td>
                <td role="cell">{HPT}</td>
                <td role="cell">{HPD}</td>
                <td role="cell">{HPV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Jammu and Kashmir</td>
              <td role="cell">{JKC}</td>
                <td role="cell">{JKR}</td>
                <td role="cell">{JKT}</td>
                <td role="cell">{JKD}</td>
                <td role="cell">{JKV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Jharkhand</td>
              <td role="cell">{JHC}</td>
                <td role="cell">{JHR}</td>
                <td role="cell">{JHT}</td>
                <td role="cell">{JHD}</td>
                <td role="cell">{JHV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Karnataka</td>
              <td role="cell">{KAC}</td>
                <td role="cell">{KAR}</td>
                <td role="cell">{KAT}</td>
                <td role="cell">{KAD}</td>
                <td role="cell">{KAV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Kerala</td>
              <td role="cell">{KLC}</td>
                <td role="cell">{KLR}</td>
                <td role="cell">{KLT}</td>
                <td role="cell">{KLD}</td>
                <td role="cell">{KLV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Lakshadweep</td>
              <td role="cell">{LDC}</td>
                <td role="cell">{LDR}</td>
                <td role="cell">{LDT}</td>
                <td role="cell">{LDD}</td>
                <td role="cell">{LDV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Madhya Pradesh</td>
              <td role="cell">{MPC}</td>
                <td role="cell">{MPR}</td>
                <td role="cell">{MPT}</td>
                <td role="cell">{MPD}</td>
                <td role="cell">{MPV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Maharastra</td>
              <td role="cell">{MHC}</td>
                <td role="cell">{MHR}</td>
                <td role="cell">{MHT}</td>
                <td role="cell">{MHD}</td>
                <td role="cell">{MHV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Manipur</td>
              <td role="cell">{MNC}</td>
                <td role="cell">{MNR}</td>
                <td role="cell">{MNT}</td>
                <td role="cell">{MND}</td>
                <td role="cell">{MNV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Meghalaya</td>
              <td role="cell">{MLC}</td>
                <td role="cell">{MLR}</td>
                <td role="cell">{MLT}</td>
                <td role="cell">{MLD}</td>
                <td role="cell">{MLV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Mizoram</td>
              <td role="cell">{MZC}</td>
                <td role="cell">{MZR}</td>
                <td role="cell">{MZT}</td>
                <td role="cell">{MZD}</td>
                <td role="cell">{MZV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Nagaland</td>
              <td role="cell">{NLC}</td>
                <td role="cell">{NLR}</td>
                <td role="cell">{NLT}</td>
                <td role="cell">{NLD}</td>
                <td role="cell">{NLV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Odisha</td>
              <td role="cell">{ORC}</td>
                <td role="cell">{ORR}</td>
                <td role="cell">{ORT}</td>
                <td role="cell">{ORD}</td>
                <td role="cell">{ORV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Puducherry</td>
              <td role="cell">{PYC}</td>
                <td role="cell">{PYR}</td>
                <td role="cell">{PYT}</td>
                <td role="cell">{PYD}</td>
                <td role="cell">{PYV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Punjab</td>
              <td role="cell">{PBC}</td>
                <td role="cell">{PBR}</td>
                <td role="cell">{PBT}</td>
                <td role="cell">{PBD}</td>
                <td role="cell">{PBV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Rajasthan</td>
              <td role="cell">{RJC}</td>
                <td role="cell">{RJR}</td>
                <td role="cell">{RJT}</td>
                <td role="cell">{RJD}</td>
                <td role="cell">{RJV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Sikkim</td>
              <td role="cell">{SKC}</td>
                <td role="cell">{SKR}</td>
                <td role="cell">{SKT}</td>
                <td role="cell">{SKD}</td>
                <td role="cell">{SKV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Tamil Nadu</td>
              <td role="cell">{TNC}</td>
                <td role="cell">{TNR}</td>
                <td role="cell">{TNT}</td>
                <td role="cell">{TND}</td>
                <td role="cell">{TNV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Telangana</td>
              <td role="cell">{TGC}</td>
                <td role="cell">{TGR}</td>
                <td role="cell">{TGT}</td>
                <td role="cell">{TGD}</td>
                <td role="cell">{TGV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Tripura</td>
              <td role="cell">{TRC}</td>
                <td role="cell">{TRR}</td>
                <td role="cell">{TRT}</td>
                <td role="cell">{TRD}</td>
                <td role="cell">{TRV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Uttar Pradesh</td>
              <td role="cell">{UPC}</td>
                <td role="cell">{UPR}</td>
                <td role="cell">{UPT}</td>
                <td role="cell">{UPD}</td>
                <td role="cell">{UPV}</td>
              </tr>
              <tr role="row">
              <td role="cell">Uttarakhand	</td>
              <td role="cell">{UTC}</td>
                <td role="cell">{UTR}</td>
                <td role="cell">{UTT}</td>
                <td role="cell">{UTD}</td>
                <td role="cell">{UTV}</td>
              </tr>
              <tr role="row">
              <td role="cell">West Bengal</td>
              <td role="cell">{WBC}</td>
                <td role="cell">{WBR}</td>
                <td role="cell">{WBT}</td>
                <td role="cell">{WBD}</td>
                <td role="cell">{WBV}</td>
              </tr>
              
              </tbody>
</table>


   </>
  );
}

export default States;
