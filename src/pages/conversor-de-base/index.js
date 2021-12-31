import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import converterAlgarismo from '../../utils/converterAlgarismo';

import './styles.css';

function ConversorDeBase() {
    const [algarismo, setAlgarismo] = useState('');
    const [daBase, setDaBase] = useState(10);
    const [paraBase, setParaBase] = useState(2);
    const [resultado, setResultado] = useState('');

    function calcular() {
        if (algarismo !== '') {
            if ((daBase >= 2 && daBase <= 32) && (paraBase >= 2 && paraBase <= 32)) {
                try {
                    setResultado(converterAlgarismo(algarismo, daBase, paraBase));
                } catch (error) {
                    setResultado(error);
                }
            } else {
                setResultado('Utilize bases de 2 à 32.');
            }
        } else {
            setResultado('Digite um algarismo.');
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand py-0">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href=" " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Versões
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Conversor_de_Base">C# Desktop</a>
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Conversor_de_Base_Android">Java Android</a>
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Conversor_de_Base_WEB">Java WEB</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Voltar</Link>
                    </li>
                </ul>
            </nav>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <h3>Conversor de Base</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label htmlFor="algarismo">Algarismo:</label>
                    <input type="text" className="form-control text-center" id="algarismo" name="algarismo" value={algarismo} onChange={e => setAlgarismo(e.target.value)} placeholder="Digite o algarismo" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label htmlFor="daBase">Base:</label>
                    <input type="number" min="2" max="32" className="form-control text-center" id="daBase" name="daBase" value={daBase} onChange={e => setDaBase(e.target.value)} placeholder="Digite a base do algarismo" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label htmlFor="paraBase">Para base:</label>
                    <input type="number" min="2" max="32" className="form-control text-center" id="paraBase" name="paraBase" value={paraBase} onChange={e => setParaBase(e.target.value)} placeholder="Digite para qual base será convertido" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <button className="btn btn-primary btn-fix" onClick={calcular} disabled={algarismo.length === 0 || daBase === '' || paraBase === ''}>Converter</button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label htmlFor="resultado">Resultado</label>
                    <textarea className="form-control text-center" rows="5" id="resultado" name="resultado" value={resultado} readOnly></textarea>
                </div>
            </div>
        </>
    );
}

export default ConversorDeBase;
