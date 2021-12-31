import React from 'react';
import { Link } from 'react-router-dom';

function Criptografia() {
    return (
        <>
            <nav className="navbar navbar-expand py-0">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href=" " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Desktop App
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Tecnicas_Comuns_de_Criptografia">C#</a>
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Tecnicas_Comuns_de_Criptografia_Java">Java</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Voltar</Link>
                    </li>
                </ul>
            </nav>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <h5>- Técnicas Comuns de Criptografia -</h5>
                    <br/>
                    <div className="form-inline">
                        <Link className="btn btn-primary btn-default-width" to="/criptografia/cifraxor">Cifra XOR</Link>
                        <span className="separar"></span>
                        <Link className="btn btn-primary btn-default-width" to="/criptografia/cifradecesar">Cifra de César</Link>
                    </div>
                    <br/>
                    <div className="form-inline">
                        <Link className="btn btn-primary btn-default-width" to="/criptografia/cifrarailfence">Cifra Rail Fence</Link>
                        <span className="separar"></span>
                        <Link className="btn btn-primary btn-default-width" to="/criptografia/ciframatematica">Cifra Matemática</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Criptografia;
