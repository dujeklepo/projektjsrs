import React from 'react';
import {Link} from 'react-router-dom';
import pic6 from '../pic6.jpg';
import pic7 from '../pic7.jpg';
import pic8 from '../pic8.jpg';
import pic9 from '../pic9.jpg';
import pic10 from '../pic10.jpg';


export default function Puska(){
    return(
        <div>
            <table className="Struktura">
                <tr>
                    <td className="linkovi_box">
                        <Link to="/" className="linkovi">Glavna stranica</Link><br></br>
                        <a href="https://www.fodors.com/news/photos/10-legendary-wild-west-towns-where-you-can-play-outlaw" className="linkovi">Izleti</a><br></br>
                        <a href="https://hr.wikipedia.org/wiki/Divlji_zapad" className="linkovi">Wikipedia</a><br></br>
                        <a href="https://www.biography.com/news/wild-west-figures" className="linkovi">Legende Divljeg Zapada</a><br></br>
                        <a href="https://www.history.com/news/10-things-you-didnt-know-about-the-old-west" className="linkovi">10 fun facts</a><br></br>
                    </td>

                    <td> <p className="naslov_paragrafa">Puske Divljeg Zapada :</p>
                        <hr></hr>
                    </td>

                    <td><Link to="/Create">Vaš Profil</Link></td>
                </tr>

                <tr>
                    <td rowSpan="2" className="linkovi">

                    </td>
                    <td>
                        <div className="povijest_paragraf">
                            <h3>Winchester 1873. rifle: </h3>
                            <p>Temeljen na pušci Henry Repeating Rifle iz 1860. godine, poznati Winchester sadržavao je cijevni magazin ogromnog kapaciteta za to vrijeme i djelovanje poluge za brzo pucanje. 
                                Njegov mehanizam kasnije će nadahnuti strojnicu Maxim. Model iz 1873. godine najpoznatiji je, čak je glumio u vlastitom filmu: Winchester '73 (1950).</p>
                            <img src={pic6} id="slika6"></img>
                            

                            <br></br> <br></br> <br></br>



                            <h3>Whitworth rifle: </h3>
                            <p>Britanska puška Whitworth podsjeća na poznatiji Enfield Pattern 1853, ali sadrži šesterokutnu pušku i dizajnirana je za ispaljivanje usko postavljenog,
                                šesterokutnog metka. To je potrošilo manje pogonskog plina na pucanje, čineći ga cijenjenim zbog svoje točnosti među konfederacijskim snajperima u Američkom
                                građanskom ratu. Manje poznato oružje tog razdoblja, nedavno se pojavilo kao radnja u viktorijanskoj policijskoj drami BBC One 'Ripper Street'.</p>
                            <img src={pic7} id="slika7"></img>
                           

                            <br></br> <br></br> <br></br>


                            <h3>Sharps rifle: </h3>
                            <p>Za razliku od Winchestera, koji je pucao iz streljivog streljiva kratkog dometa, Sharps je bio puška puške jednog puška u kojem se nalazilo 
                            snažno vladino streljivo .50-70 ili .45-70. To ga je učinilo vrlo preciznim i snažnim, bilo za lov na velike životinje ili za ‘snajpersko djelovanje’
                            ljudskih ciljeva, kao u ‘Django Unchained’ (2012).</p>
                            <img src={pic8} id="slika8"></img>
                            
                        </div>
                    </td>

                    <td rowSpan="2" className="galerija">
                        <img src={pic9} id="slika9"></img>
                        <img src={pic10} id="slika10"></img>
                        
                    </td>
                </tr>

                <tr>
                    
                    <td></td>
                    
                </tr>
            </table>
        </div>
    );
}