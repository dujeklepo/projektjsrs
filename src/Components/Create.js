import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pic19 from '../pic19.jpg';

export class Create extends Component{
    state={
        ime:"",
        lozinka:"",
    }
    onSubmit=e=>{e.preventDefault();document.getElementById("upis").innerText=("Vaš username je: "+this.state.ime+", a vaša lozinka je: "+this.state.lozinka);window.alert(this.state.ime +", čestitam ulogirao si se u svoj račun!! Da li je ovo vaša lozinka: " + this.state.lozinka)}
    render(){
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

                    <td> <p className="naslov_paragrafa">Ulogiraj se u svoj račun: </p>
                        <hr></hr>
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <form id="forma">
                            <label>
                                Ime:
                                <input placeholder="ime" value={this.state.ime} onChange={e=>this.setState({ime:e.target.value})}></input>
                            </label>
                            <br></br>
                            <label>
                                Lozinka:
                                <input type="password" placeholder="lozinka" value={this.state.prezime} onChange={e=>this.setState({lozinka: e.target.value})}></input>
                            </label>
                            <br></br>
                            <button onClick={e=>this.onSubmit(e)}>Submit</button>

                            <br></br><br></br>
                            
                        
                            Izaberi svoju revolver:<br></br>
                            <input type="radio"></input>
                            <label>LeMat Revolver</label><br></br>
                            <input type="radio"></input>
                            <label>Colt Single Action Army Revolver</label><br></br>
                            <input type="radio"></input>
                            <label>Colt Navy Revolver</label>
        

                            <br></br><br></br>

                            Izaberi svoju pušku:<br></br>
                            <input type="radio"></input>
                            <label>Winchester 1873. rifle</label><br></br>
                            <input type="radio"></input>
                            <label for="Whitworth rifle">Whitworth rifle</label><br></br>
                            <input type="radio"></input>
                            <label>Sharps rifle</label>
                            <br></br>
                            <button>Napravi svog lika!!!</button>
                        </form>
                        <p id="upis">

                        </p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><img src={pic19} id="slika19"></img></td>
                </tr>
            </table>
        </div>
    );
}
}


export default Create;
