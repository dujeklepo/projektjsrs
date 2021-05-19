import React from 'react';
import { Link, Router } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="footer">
            <p><Link to="/Povijest">Povijest</Link> <Link to="/Puska">Puska</Link> <Link to="/Revolver">Revolver</Link> <Link to="/Bande">Bande</Link> <Link to="/Create">Novo!!!</Link></p>
        </div>
    );
}