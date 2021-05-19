import React from 'react';
import {Link, Router} from 'react-router-dom';
import pic3 from "../pic3.jpg";
import pic4 from "../pic4.jpg";
import pic5 from '../pic5.jpg';


export default function Povijest(){ 
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

                    <td> <p className="naslov_paragrafa">Povijest :</p>
                        <hr></hr>
                    </td>

                    <td><Link to="/Create">Vaš Profil</Link></td>
                </tr>

                <tr>
                    <td rowSpan="2" className="linkovi">

                    </td>
                    <td>
                        <p className="povijest_paragraf">
                            <h3>Divlji zapad: 1865.-1889.</h3>
                            Dok je u istočnim Sjedinjenim Državama počinjala druga industrijska revolucija koja je počela oko 1871.,
                            zapadna granica počela se sve gušće naseljavati. U ranim danima divljeg zapada, velik dio zemlje bio je u javnom vlasništvu, 
                            otvoren za iskorištavanje i u stočarstvu i u ratarstvu. U većem dijelu divljeg zapada bilo je malo ili nimalo mjesnog provođenja
                            zakona, a vojska je samo na nekim mjestima imala koncentriranu prisutnost. Američki lovci na bizone, radnici na željeznici,
                            lutalice i vojnici sukobljavali su se oko sitnica, koja su često završavala pucnjavama gdje su ljudi ginuli "sa čizmama na nogama"
                            (izraz koji označava aktivnu smrt, za razliku od smrti od starosti u krevetu, il "s papučama na nogama").

                            <br></br> <br></br> <br></br>


                            <h3>Indijanski ratovi na zapadu</h3>
                            U ratovima protiv Apača i Navaho Indijanaca pukovnik Christopher "Kit" Carson borio se protiv Apača oko rezervatâ 1862.
                            godine. Okršaji između SAD-a i Apača nastavljaju se do 1886. godine kada se Geronimo predaje američkim snagama.
                            Kit Carson je u tim bitkama provodio politiku spaljene zemlje, paleći polja i domove Navaha, kradući i 
                            ubijajući njihovu stoku. U tome su mu pomagali druga Indijanska plemena koja su s plemenom Navaho bila 
                            u dugotrajnom neprijateljstvu, prvenstveno Ute. Kasnije se borio protiv zajedničkih snaga plemena  
                            Kiowa, Komanča i Čejena, što je završilo pat pozicijom u Prvoj bitci kod zida od nepečene cigle,
                            ali i uništenim indijanskim selom i zimskim zalihama. 27. lipnja 1874. 'Bat' Masterson i manja 
                            skupina lovaca na bizone borila se protiv puno većih indijanskih snaga u Drugoj bitci kod zida od nepečene cigle.

                            <br></br> <br></br> <br></br>


                            <h3>Rat u okrugu Lincoln</h3>
                            Rat u okrugu Lincoln između dvije utvrđene strane dogodio se 1877. godine. Ovaj "rat" vodili su bogati<br></br>
                            rančeri s jedne i posjednici trgovačkog monopola u okrugu Lincoln u Novom Meksiku. Istaknut borac na<br></br>
                            strani rančera bio je Billy the Kid, zloglasni pogranični odmetnik i ubojica. Uživao je glas<br></br> 
                            kao ubojica 21 čovjeka, jedan za svaku godinu svog života, ali je taj iznos vjerojatno bliži broju 9<br></br>
                            (četvero osobno i 5 uz pomoć drugih).

                            <br></br> <br></br> <br></br>

                            <h3>Od 1890. <br></br>
                            Nestajanje granice
                            </h3>
                            Američki jedanaesti popis stanovništva poduzet je u 1890. godini i njegov glavni administrator<br></br>
                            proglasio je da jasna granica naseljenosti više ne postoji; Frederick Jackson Turner zaključuje da kontinentalne<br></br>
                            granice na zapadu više nema. Njegova iznimno utjecajna Disertacija o granici bavila se puno ranijim razdobljem.<br></br>
                            Otkrićem zlata u Klondikeu 1896. godine otvara se nova granica u nepreglednom sjevernom teritoriju.<br></br>
                            Posljednja granica postala je Aljaska.

                            <br></br> <br></br> <br></br>

                            <h3>Pogranični pljačkaški pohodi</h3>
                            Nakon napuštanja službe svom ocu, Pancho Villa otišao je u bandite u gradiću Durango, a kasnije i meksičkoj državi Chihuahua.<br></br>
                            Nekoliko puta je bio uhićivan za zločine od razbojništva do krađe konjâ i stoke, ali je utjecajnim poznanstvima<br></br>
                            uvijek osiguravao izlazak na slobodu. Kasnije je postao kontroverzni revolucionarni junak, vodeći skupinu<br></br>
                            meksičkih pljačkaša u napadima protiv raznih režima, a tražila ga je i vlada SAD-a.
                        </p>
                    </td>

                    <td rowSpan="2" className="galerija">
                        <a href="https://www.fodors.com/news/photos/10-legendary-wild-west-towns-where-you-can-play-outlaw"><img src={pic3} id="slika3"></img></a>
                        <a href="https://www.fodors.com/news/photos/10-legendary-wild-west-towns-where-you-can-play-outlaw"><img src={pic4} id="slika4"></img></a>
                        <a href="https://www.fodors.com/news/photos/10-legendary-wild-west-towns-where-you-can-play-outlaw"><img src={pic5} id="slika5"></img></a>
                    </td>
                </tr>

                <tr>
                    
                    <td></td>
                    
                </tr>
            </table>
        </div>
    );
}
