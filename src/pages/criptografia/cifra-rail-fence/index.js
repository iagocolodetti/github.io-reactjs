import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { CifraRailFence as crf } from '../../../utils/criptografia';

function CifraRailFence() {
    const [texto, setTexto] = useState('');
    const [resultado, setResultado] = useState('');

    function cifrar() {
        if (texto.length > 0) {
            try {
                setResultado(crf.cifrar(texto));
            } catch (error) {
                setResultado(error);
            }
        }
    }
    
    function decifrar() {
        if (texto.length > 0) {
            try {
                setResultado(crf.decifrar(texto));
            } catch (error) {
                setResultado(error);
            }
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand py-0">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/criptografia">Voltar</Link>
                    </li>
                </ul>
            </nav>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <h3>Cifra Rail Fence</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center textarea-wrap">
                    <textarea className="form-control text-center" rows="5" id="texto" name="texto" value={texto} onChange={e => setTexto(e.target.value)} required></textarea>
                    <span className="floating-label text-center">Texto (Cifrado / Decifrado)</span>
                </div>
            </div>
            <div className="form-inline justify-content-center">
                <div className="form-group text-center">
                    <button className="btn btn-primary btn-fix" onClick={cifrar} disabled={texto.length === 0}>Cifrar</button>
                    <span className="separar"></span>
                    <button className="btn btn-primary btn-fix" onClick={decifrar} disabled={texto.length === 0}>Decifrar</button>
                </div>
            </div>
            <br/>
            <div className="row justify-content-center">
                <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                    <label for="resultado">Resultado</label>
                    <textarea className="form-control text-center" rows="5" id="resultado" name="resultado" value={resultado} readOnly></textarea>
                </div>
            </div>
        </>
    );
}

export default CifraRailFence;
