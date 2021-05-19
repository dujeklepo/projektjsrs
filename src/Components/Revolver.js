import React from 'react';
import {Link} from 'react-router-dom';
import pic11 from "../pic11.jpg";
import pic12 from "../pic12.jpg";
import pic13 from '../pic13.jpg';
import pic14 from '../pic14.jpg';


export default function Revolver(){
    return(
        <div className="Revolver">
            <table className="Struktura">
                <tr>
                    <td className="linkovi_box">
                        <Link to="/" className="linkovi">Glavna stranica</Link><br></br>
                        <a href="https://www.fodors.com/news/photos/10-legendary-wild-west-towns-where-you-can-play-outlaw" className="linkovi">Izleti</a><br></br>
                        <a href="https://hr.wikipedia.org/wiki/Divlji_zapad" className="linkovi">Wikipedia</a><br></br>
                        <a href="https://www.biography.com/news/wild-west-figures" className="linkovi">Legende Divljeg Zapada</a><br></br>
                        <a href="https://www.history.com/news/10-things-you-didnt-know-about-the-old-west" className="linkovi">10 fun facts</a><br></br>
                    </td>

                    <td> <p className="naslov_paragrafa">Revolveri Divljeg Zapada :</p>
                        <hr></hr>
                    </td>

                    <td className="dodatno"><Link to="/Create">Vaš Profil</Link></td>
                </tr>

                <tr>
                    <td rowSpan="2" className="linkovi">

                    </td>
                    <td>
                        <div className="povijest_paragraf">
                            <h3>LeMat Revolver: </h3>
                            <p>LeMat je bio neobičan po tome što je njegov cilindar držao devet hitaca umjesto uobičajenih pet ili šest
                            , i zato što je ispod imao dodatnu cijev za pušku. Ovo je bila velika vatrena snaga kada je revolver
                            predstavljen 1856. godine, a zatim je našao naklonost Konfederativnih država u Američkom građanskom ratu.
                            LeMat se pojavljuje na istaknutom mjestu u borilačkim vještinama / zapadnjačkom mash-up-u 'Put ratnika'
                            iz 2010. godine.</p>
                            <img src={pic11} id="slika11"></img>
                            

                            <br></br> <br></br> <br></br>


                            <h3>Colt Single Action Army Revolver: </h3>
                            <p>Vjerojatno najpoznatiji od oružja Starog Zapada, pucač Colt sa šest metaka postao je poznat kao 'puška koja je osvojila Zapad'.
                            Popularno među vojskom, agentima zakona i među kriminalcima, bivši pljačkaš vlakova rekao je da 
                            "Coltova četrdeset i pet čini sve ljude jednakima". Kraljevske oružare imaju tu sreću da na posudbu
                            imaju Colt koji je pripadao stočaru Johnu Tunstallu, čije se ubojstvo 'Billy the Kid' osvetilo 1878. godine.</p>
                            <img src={pic12} id="slika12"></img>
                           

                            <br></br> <br></br> <br></br>


                            <h3>Colt Navy Revolver: </h3>
                            <p>Mornarički revolver temeljio se na originalnom dizajnu Colta Patersona iz 1836. godine i vidio je široku vojnu
                                 i civilnu službu. Korištenje udaraljnog sustava paljenja trebalo bi neko vrijeme da se napuni, ali bio je među
                                  prvim pištoljima koji su korisniku pružili više hitaca prije ponovnog punjenja. Ovo je jedan od pištolja 
                                  kojima je Jamie Foxx upravljao u filmu 'Django Unchained' (2012.).</p>
                            <img src={pic13} id="slika13"></img>
                            
                        </div>
                    </td>

                    <td rowSpan="2" className="galerija">
                        <img src={pic14} id="slika14"></img>
                        
                        
                    </td>
                </tr>

                <tr>
                    
                    <td></td>
                    
                </tr>
            </table>
        </div>
    );
}