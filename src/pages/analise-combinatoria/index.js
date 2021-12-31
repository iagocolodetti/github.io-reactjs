import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import analiseCombinatoria from '../../utils/analiseCombinatoria';

import './styles.css';

import permutacaosimples from '../../assets/analise-combinatoria/permutacaosimples.png';
import permutacaocomrepeticao from '../../assets/analise-combinatoria/permutacaocomrepeticao.png';
import arranjosimples from '../../assets/analise-combinatoria/arranjosimples.png';
import arranjocomrepeticao from '../../assets/analise-combinatoria/arranjocomrepeticao.png';
import combinacaosimples from '../../assets/analise-combinatoria/combinacaosimples.png';
import combinacaocomrepeticao from '../../assets/analise-combinatoria/combinacaocomrepeticao.png';

function AnaliseCombinatoria() {

    const [tipoSelecionado, setTipoSelecionado] = useState(0);
    const [info, setInfo] = useState('n = número total de elementos.');
    const [p, setP] = useState('');
    const [n, setN] = useState('');
    const [placeholderP, setPlaceholderP] = useState('Desativado');
    const [resultado, setResultado] = useState('');

    const tipos = [
        {
            tipo: 'Permutação Simples',
            formula: permutacaosimples,
            info: 'Permutação simples é definida como sendo o número de maneiras de arrumar \'n\''
            + ' elementos em \'n\' posições em que cada maneira se diferencia pela ordem em que os elementos aparecem.'
        },
        {
            tipo: 'Permutação com Repetição',
            formula: permutacaocomrepeticao,
            info: 'Permutação com repetição é definida como sendo o número de maneiras de arrumar \'n\''
            + ' elementos em \'n\' posições com repetição de elementos em que cada maneira se diferencia pela ordem em que os elementos aparecem.'
            + ' Onde \'n\' é o número total de elementos e \'p\', \'p\',... são os números de repetições de elementos.'
        },
        {
            tipo: 'Arranjo Simples',
            formula: arranjosimples,
            info: 'Arranjo simples é usado quando a ordem dos elementos importa e cada elemento pode ser contado apenas uma vez.'
            + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
        },
        {
            tipo: 'Arranjo com Repetição',
            formula: arranjocomrepeticao,
            info: 'Arranjo com repetição é usado quando a ordem dos elementos importa e cada elemento pode ser contado mais de uma vez.'
            + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
        },
        {
            tipo: 'Combinação Simples',
            formula: combinacaosimples,
            info: 'Combinação simples é usado quando a ordem dos elementos não importa e cada elemento pode ser contado apenas uma vez.'
            + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
        },
        {
            tipo: 'Combinação com Repetição',
            formula: combinacaocomrepeticao,
            info: 'Combinação com repetição é usado quando a ordem dos elementos não importa e cada elemento pode ser contado mais de uma vez.'
            + ' Onde \'n\' é o número total de elementos e \'p\' é a quantidade total de elementos escolhidos.'
        }
    ];
    
    function selecionarTipo(tipo) {
        setTipoSelecionado(tipo);
        if (tipo === 0) {
            setInfo('n = número total de elementos.');
            setPlaceholderP('Desativado');
        } else if (tipo === 1) {
            setInfo('p,p,... = número de repetições; n = número total de elementos.');
            setPlaceholderP('Digite o valor de P,P,...');
        } else {
            setInfo('p = número de elementos escolhidos; n = número total de elementos.');
            setPlaceholderP('Digite o valor de P');
        }
    }

    function calcular() {
        try {
            setResultado(analiseCombinatoria(tipoSelecionado, n, p));
        } catch (error) {
            setResultado(error);
        }
    }

    function DivButtonTipos() {
        return (
            <div className="row justify-content-center">
                <div className="form-group dropdown text-center">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Selecionar Tipo</button>
                    <div className="dropdown-menu text-center">
                        {tipos.map((tipo, index) => 
                            <button key={index} className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => selecionarTipo(index)}>{tipo.tipo}</button>
                        )}
                    </div>
                </div>
            </div>
        );
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
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Analise_Combinatoria">C# Desktop</a>
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Analise_Combinatoria_Android">Java Android</a>
                            <a className="dropdown-item" href="https://github.com/iagocolodetti/Analise_Combinatoria_WEB">Java WEB</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Voltar</Link>
                    </li>
                </ul>
            </nav>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <h3>Análise Combinatória</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label className="info">{info}</label>
                </div>
            </div>
            <DivButtonTipos />
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <h5>{tipos[tipoSelecionado].tipo}</h5>
                    <img src={tipos[tipoSelecionado].formula} alt={tipos[tipoSelecionado].tipo} />
                    <label className="info">{tipos[tipoSelecionado].info}</label>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label htmlFor="p">P:</label>
                    <input type="text" className="form-control text-center" id="p" name="p" value={p} onChange={e => setP(e.target.value)} placeholder={placeholderP} disabled={tipoSelecionado === 0} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group col-xs-10 col-sm-7 col-md-5 col-lg-5 text-center">
                    <label htmlFor="n">N:</label>
                    <input type="text" className="form-control text-center" id="n" name="n" value={n} onChange={e => setN(e.target.value)} placeholder="Digite o valor de N" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group text-center">
                    <button className="btn btn-primary btn-fix" onClick={calcular} disabled={(tipoSelecionado === 0 && n.length === 0) || (tipoSelecionado !== 0 && (p.length === 0 || n.length === 0))}>Calcular</button>
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

export default AnaliseCombinatoria;
