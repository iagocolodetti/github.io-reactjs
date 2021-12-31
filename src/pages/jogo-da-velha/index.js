import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

function JogoDaVelha() {
    const [iniciado, setIniciado] = useState(false);
    const [jogadas, setJogadas] = useState(0);
    const [vez, setVez] = useState('--');
    const [bts, setBts] = useState([]);
    const [resultadoX, setResultadoX] = useState(0);
    const [resultadoO, setResultadoO] = useState(0);
    const [resultadoV, setResultadoV] = useState(0);
    const [vencedor, setVencedor] = useState(null);

    const resetarBotoes = useCallback(() => {
        let _bts = [];
        for (let i = 0; i < 9; i++) {
            const bt = {
                texto: '-',
                cor: 'black'
            };
            _bts = [..._bts, bt];
        }
        setBts(_bts);
    }, []);

    useEffect(() => {
        resetarBotoes();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (iniciado && jogadas > 0) {
            const possibilidades = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            const destacarVencedor = (i, cor) => {
                let _bts = [...bts];
                _bts[possibilidades[i][0]] = { ..._bts[possibilidades[i][0]], cor };
                _bts[possibilidades[i][1]] = { ..._bts[possibilidades[i][1]], cor };
                _bts[possibilidades[i][2]] = { ..._bts[possibilidades[i][2]], cor };
                setBts(_bts);
            }
            for (let i = 0; i < possibilidades.length; i++) {
                if (bts[possibilidades[i][0]].texto === 'X' && bts[possibilidades[i][1]].texto === 'X' && bts[possibilidades[i][2]].texto === 'X') {
                    setVez('--');
                    setResultadoX(r => r + 1);
                    destacarVencedor(i, 'green');
                    setVencedor({
                        texto: 'Resultado: Jogador "X" venceu!',
                        cor: 'green'
                    });
                    setIniciado(false);
                    return;
                } else if (bts[possibilidades[i][0]].texto === 'O' && bts[possibilidades[i][1]].texto === "O" && bts[possibilidades[i][2]].texto === 'O') {
                    setVez('--');
                    setResultadoO(r => r + 1);
                    destacarVencedor(i, 'red');
                    setVencedor({
                        texto: 'Resultado: Jogador "O" venceu!',
                        cor: 'red'
                    });
                    setIniciado(false);
                    return;
                }
            }
            if (jogadas < 9) {
                if (vez === 'X') {
                    setVez('O');
                } else {
                    setVez('X');
                }
                return;
            }
            setVez('--');
            setResultadoV(r => r + 1);
            setVencedor({
                texto: 'Resultado: VELHA!',
                cor: 'black'
            });
            setIniciado(false);
        }
        // eslint-disable-next-line
    }, [jogadas]);

    function iniciar() {
        if (!iniciado) {
            setIniciado(true);
            setJogadas(0);
            setVez((Math.floor(Math.random() * 2) === 0 ? 'X' : 'O'));
            resetarBotoes();
            setVencedor(null);
        } else {
            alert('O jogo já está iniciado, termine esse primeiro.');
        }
    }

    function jogar(bt) {
        if (iniciado) {
            if (marcarSelecionado(bt)) {
                setJogadas(jogadas + 1);
            }
        } else {
            alert('É necessário iniciar o jogo para jogá-lo.');
        }
    }

    function marcarSelecionado(bt) {
        let marcado = false;
        if (bt.texto === '-') {
            let _bts = [...bts];
            _bts[bts.indexOf(bt)] = { ...bt, texto: vez };
            setBts(_bts);
            marcado = true;
        }
        return marcado;
    }

    function DivJogo() {
        if (bts.length === 9) {
            return (
                <div className="form-group jogo">
                    <div className="form-inline justify-content-center">
                        <div className="form-group text-center">
                            <button onClick={() => jogar(bts[0])} className="btn btn-default btn-fix-jogo" style={{ color: bts[0].cor }}>{ bts[0].texto }</button>
                            <span className="separar">|</span>
                            <button onClick={() => jogar(bts[1])} className="btn btn-default btn-fix-jogo" style={{ color: bts[1].cor }}>{ bts[1].texto }</button>
                            <span className="separar">|</span>
                            <button onClick={() => jogar(bts[2])} className="btn btn-default btn-fix-jogo" style={{ color: bts[2].cor }}>{ bts[2].texto }</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-inline justify-content-center">
                        <div className="form-group text-center">
                            <button onClick={() => jogar(bts[3])} className="btn btn-default btn-fix-jogo" style={{ color: bts[3].cor }}>{ bts[3].texto }</button>
                            <span className="separar">|</span>
                            <button onClick={() => jogar(bts[4])} className="btn btn-default btn-fix-jogo" style={{ color: bts[4].cor }}>{ bts[4].texto }</button>
                            <span className="separar">|</span>
                            <button onClick={() => jogar(bts[5])} className="btn btn-default btn-fix-jogo" style={{ color: bts[5].cor }}>{ bts[5].texto }</button>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-inline justify-content-center">
                        <div className="form-group text-center">
                            <button onClick={() => jogar(bts[6])} className="btn btn-default btn-fix-jogo" style={{ color: bts[6].cor }}>{ bts[6].texto }</button>
                            <span className="separar">|</span>
                            <button onClick={() => jogar(bts[7])} className="btn btn-default btn-fix-jogo" style={{ color: bts[7].cor }}>{ bts[7].texto }</button>
                            <span className="separar">|</span>
                            <button onClick={() => jogar(bts[8])} className="btn btn-default btn-fix-jogo" style={{ color: bts[8].cor }}>{ bts[8].texto }</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    function DivVencedor() {
        if (vencedor !== null) {
            return (
                <div className="form-group justify-content-center text-center">
                    <span className="identificador" style={{ color: vencedor.cor }}>{vencedor.texto}</span>
                </div>
            );
        } else return null;
    }

    return (
        <>
            <nav className="navbar navbar-expand py-0">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/iagocolodetti/Jogo_da_Velha_Android">Android App</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Voltar</Link>
                    </li>
                </ul>
            </nav>
            <div className="row justify-content-center text-center">
                <div className="form-group">
                    <h3>Jogo da Velha</h3>
                </div>
            </div>
            <div className="form-group justify-content-center text-center">
                <button onClick={iniciar} className="btn btn-primary btn-fix" disabled={iniciado}>Iniciar</button>
            </div>
            <div className="form-group justify-content-center text-center">
                <span className="identificador" style={{ color: 'gray' }}>Jogador da Vez: {vez}</span>
            </div>
            <DivJogo />
            <div className="placar">
                <div className="form-inline justify-content-center">
                    <div className="form-group text-center">
                        <span className="identificador" style={{ color: 'green' }}>X: {resultadoX}</span>
                        <span className="separar"></span>
                        <span className="identificador" style={{ color: 'black' }}>V: {resultadoV}</span>
                        <span className="separar"></span>
                        <span className="identificador" style={{ color: 'red' }}>O: {resultadoO}</span>
                    </div>
                </div>
            </div>
            <DivVencedor />
        </>
    );
}

export default JogoDaVelha;
