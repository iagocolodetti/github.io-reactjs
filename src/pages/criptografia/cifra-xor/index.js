import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { CifraXOR as cxor } from '../../../utils/criptografia';

function CifraXOR() {
    const [texto, setTexto] = useState('');
    const [chave, setChave] = useState('');
    const [resultado, setResultado] = useState('');

    function cifrar() {
        if (texto.length > 0 && chave.length > 0) {
            try {
                setResultado(cxor.cifrar(texto, chave));
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
                    <h3>Cifra XOR</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center textarea-wrap">
                    <textarea className="form-control text-center" rows="5" id="texto" name="texto" value={texto} onChange={e => setTexto(e.target.value)} required></textarea>
                    <span className="floating-label text-center">Texto (Cifrado / Decifrado)</span>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center input-wrap">
                    <input type="text" className="form-control text-center" id="chave" name="chave" value={chave} onChange={e => setChave(e.target.value)} required />
                    <span className="floating-label text-center">Chave</span>
                </div>
            </div>
            <div className="form-inline justify-content-center">
                <div className="form-group text-center">
                    <button className="btn btn-primary btn-fix" onClick={cifrar} disabled={texto.length === 0 || chave.length < 1 || chave.length > 8}>Cifrar / Decifrar</button>
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

export default CifraXOR;
