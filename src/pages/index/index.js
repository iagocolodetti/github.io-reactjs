import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Index() {
    return (
        <>
            <div className="row justify-content-center margem">
                <div className="form-group text-center">
                    <a href="https://github.com/iagocolodetti?tab=repositories" className="btn btn-success btn-default-width">Meus Projetos</a>
                </div>
            </div>
            <br/>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <h5>- Demonstrações Funcionais -</h5>
                    <h6>- ReactJS -</h6>
                    <br/>
                    <div className="form-inline">
                        <Link className="btn btn-primary btn-default-width" to="/analisecombinatoria">Análise Combinatória</Link>
                        <span className="separar"></span>
                        <Link className="btn btn-primary btn-default-width" to="/conversordebase">Conversor de Base</Link>
                    </div>
                    <br/>
                    <div className="form-inline justify-content-center">
                        <Link className="btn btn-primary btn-default-width" to="/criptografia">Criptografia</Link>
                        <span className="separar"></span>
                        <Link className="btn btn-primary btn-default-width" to="/jogodavelha">Jogo da Velha</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
