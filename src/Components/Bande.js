import React from 'react';
import {Link} from 'react-router-dom';
import pic15 from "../pic15.jpg";
import pic16 from "../pic16.jpg";
import pic17 from '../pic17.jpg';
import pic18 from '../pic18.jpg';

export default function Bande(){
    return(
        <div className="Bande">
            <table className="Struktura">
                <tr>
                    <td className="linkovi_box">
                        <Link to="/" className="linkovi">Glavna stranica</Link><br></br>
                        <a href="https://www.fodors.com/news/photos/10-legendary-wild-west-towns-where-you-can-play-outlaw" className="linkovi">Izleti</a><br></br>
                        <a href="https://hr.wikipedia.org/wiki/Divlji_zapad" className="linkovi">Wikipedia</a><br></br>
                        <a href="https://www.biography.com/news/wild-west-figures" className="linkovi">Legende Divljeg Zapada</a><br></br>
                        <a href="https://www.history.com/news/10-things-you-didnt-know-about-the-old-west" className="linkovi">10 fun facts</a><br></br>
                    </td>

                    <td> <p className="naslov_paragrafa">Bande Divljeg Zapada :</p>
                        <hr></hr>
                    </td>

                    <td><Link to="/Create">Vaš Profil</Link></td>
                </tr>

                <tr>
                    <td rowSpan="2" className="linkovi">

                    </td>
                    <td>
                        <div className="povijest_paragraf">
                            <h3>Dalton Gang</h3>
                            <p>Bila su poznata kao Dalton Brothers jer su tri njegova člana bila braća. Banda koju su činili
                            odmetnici i zakonodavci na američkom Starom zapadu. Bili su poznati kao pljačkaši vlakova i banaka.</p>
                            <img src={pic15} id="slika15"></img>
                            

                            <br></br> <br></br> <br></br>


                            <h3>Clanton Gang </h3>
                            <p>"Kauboji" su bili slabo organizirana banda odmetnika koja je djelovala duž meksičke granice, 
                            krala stoku, pljačkajući trenerske kočije (veliko, zatvoreno vozilo s konjskom zapregom koje se
                             nekada koristilo za prijevoz putnika i često pošte redovnom rutom između dva mjesta), 
                             zasjedajući timove i počineći ubojstvo.</p>
                            <img src={pic16} id="slika16"></img>
                           

                            <br></br> <br></br> <br></br>


                            <h3>Butch Cassidy’s Wild Bunch</h3>
                            <p>Robert Leroy Parker, rođen 13. travnja 1866., poznatiji kao Butch Cassidy, bilo je jedno od najpoznatijih
                            imena Starog Zapada. Lopov i ubojica koji je osnovao jednu od najplodnijih bandi za pljačku banaka u povijesti.
                            Butch Cassidy započeo je svoj kriminalni život kao šuškavac stoke i kradljivac konja i postao je poznat po tome 
                            što je držao banke i vlakove. Radio je u mesnici i, prema popularnoj legendi, postao je poznat kao Mesar Cassidy,
                            koji se pretvorio u Butch Cassidy.</p>
                            <img src={pic17} id="slika17"></img>                           
                        </div>
                    </td>

                    <td rowSpan="2" className="galerija">
                        <img src={pic18} id="slika18"></img>
                        
                        
                    </td>
                </tr>

                <tr>
                    
                    <td></td>
                    
                </tr>
            </table>
        </div>
    );
}