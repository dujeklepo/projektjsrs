import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";

export default function Početna(){
    return(
        <div className="App">
            <p class="paragraf">
                Divlji zapad, naziv koji podrazumijeva predio današnjeg SAD-a zapadno<br></br> 
                od Mississippija u vremenskom periodu između Građanskog rata i kasnog 19. stoljeća.<br></br> 
                Njime su obuhvaćeni mitovi, legende, pripovijesti i vjerovanja (mnoga od kojih su istinita)<br></br> 
                skupljena po zapadnim Sjedinjenim državama od 1865. do 1890. godine.<br></br><br></br><br></br>
            
                Kao okruženje u brojnim književnim i filmskim djelima, to razdoblje i područje<br></br> 
                ubrzo su postali toliko popularni da su doveli do razvoja vlastitog žanra zvanog "Western",<br></br> 
                u kojima je često predstavljena romantična slika ere koju karakteriziraju izolirani slučajevi nasilja,<br></br> 
                ali i koji su potaknuli interes u njegovu stvarnu povijest. Povijesna revizija primijećuje kako se određeni interesi<br></br> 
                (najznačajnije kauboji, Indijanci, poslovni ljudi i vlada Sjedinjenih Država) stalno sukobljavaju, te kako ih nekoliko<br></br> 
                izvora naziva i "zapadnim građanskim ratom za pripajanje" koji je ustanovio vlast Sjedinjenih država nad tim područjem.<br></br> 
                Iako je stari zapad često viđen kao neobično nasilan, neki prosuđuju da je on bio "daleko civiliziraniji, mirniji i sigurniji<br></br> 
                od današnjeg američkog društva".
                <br></br><br></br><br></br><br></br>
                
        Stari, Divlji zapad često je viđen kao neobično nasilan, no neki poput<br></br>
        profesora Hollona W. Eugena (u knjizi Frontier Violence: Another Look- Granično nasilje: Drugi pogled) prosuđuju da je on bio daleko civiliziraniji,<br></br>
        mirniji, sigurniji od današnjeg američkog društva. Mnogi su razlozi naveli pionire na daleka putovanja prema zapadu. Neki su se nadali jeftinoj zemlji i<br></br>
        uzgoju stoke, drugi su pak tražili zlato i srebro, a treći su jednostavno išli s nadom u bolje sutra. U ranim danima Divljeg Zapada najveći<br></br>
        dio zemlje je bio u javnom vlasništvu, otvoren za iskorištavanje u stočarstvu, ratarstvu. Velikim dijelom tog područja je vladalo <br></br>
        bezakonje, a vojska je bila prisutna samo na nekim mjestima, smještena u utvrdama. Osvajanje zapadnog teritorija dobrim je dijelom <br></br>
        izraženo kroz nasilno protjerivanje starosjedilaca - Indijanaca, potpomognuto tadašnjom istrebljivačkom politikom. Indijanaca, <br></br>
        poslovnih ljudi i vlade Sjedinjenih Država stalno sukobljavaju te tako ih nekoliko izvora naziva i zapadnim građanskim ratom <br></br>
        za pripajanje kojim je i ustanovljena vlast Sjedinjenih Država nad tim ogromnim prostranstvima. Stari, Divlji zapad često je <br></br>
        viđen kao neobično nasilan, no neki poput profesora Hollona W. Eugena (u knjizi Frontier Violence: Another Look- <br></br>
        Granično nasilje: Drugi pogled) prosuđuju da je on bio daleko civiliziraniji, mirniji, sigurniji od današnjeg američkog društva.
        
        <br></br><br></br><br></br>

        Jedna od najpoznatijih bitaka tih Indijanskih ratova bila je ona kod Little Bighorna u kojoj su ujedinjene snage Siouxa i Cheyennea porazile<br></br> 
        7. konjičku generala Georgea Armstronga Custera. Rat oko Black Hillsa vodili su Lakote pod vodstvom Bika Koji Sjedi i Ludog Konja.<br></br>  
        Ovaj sukob počeo je nakon neprestanog kršenja Sporazuma iz Fort Laramieja nakon što je u brdima otkriveno zlato. S druge strane,<br></br> 
        u ratovima protiv Apachea i Navajo Indijanaca pukovnik Christopher Kit Carson borio se oko njihovih rezervata 1862. godine.<br></br> 
        Okršaji između SAD-a i Apachea nastavljaju se do 1886. godine kada se Geronimo predaje američkim snagama.<br></br> 
        Područje Velikih Ravnica - The Great Plains - koje se prostire istočno od Rocky Mountainsa, od kanadskih provincija Alberta<br></br> 
        i Manitoba na sjeveru pa sve do južnog Teksasa, izuzetno je pogodovalo stočarstvu te je uzgoj stoke postao jedna od uzdanica<br></br> 
        gospodarstva te regije. Stoga je posao kauboja uveliko poprimio na značaju, pa su time kauboji postali jedim od nezaobilaznih simbola Divljeg Zapada.
        </p>

      <img src={pic1} id="slika1"></img>
      <img src={pic2} id="slika2"></img>

      <a href="https://hr.wikipedia.org/wiki/Divlji_zapad#/media/Datoteka:Wild-Bill-Buffalo-Bill.jpg"><h6 id="opis">Divlji Bill, Texas Jack Omhundro, i Buffalo Bill Cody</h6></a>
      
        </div>
    );
}
