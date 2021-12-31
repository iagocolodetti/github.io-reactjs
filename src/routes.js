import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/index';
import AnaliseCombinatoria from './pages/analise-combinatoria';
import ConversorDeBase from './pages/conversor-de-base';
import Criptografia from './pages/criptografia/index.js';
import CifraXOR from './pages/criptografia/cifra-xor';
import CifraDeCesar from './pages/criptografia/cifra-de-cesar';
import CifraRailFence from './pages/criptografia/cifra-rail-fence';
import CifraMatematica from './pages/criptografia/cifra-matematica';
import JogoDaVelha from './pages/jogo-da-velha';

export default function _Routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Index/>} />
                <Route path="/analisecombinatoria" element={<AnaliseCombinatoria/>} />
                <Route path="/conversordebase" element={<ConversorDeBase/>} />
                <Route exact path="/criptografia" element={<Criptografia/>} />
                <Route path="/criptografia/cifraxor" element={<CifraXOR/>} />
                <Route path="/criptografia/cifradecesar" element={<CifraDeCesar/>} />
                <Route path="/criptografia/cifrarailfence" element={<CifraRailFence/>} />
                <Route path="/criptografia/ciframatematica" element={<CifraMatematica/>} />
                <Route path="/jogodavelha" element={<JogoDaVelha/>} />
            </Routes>
        </BrowserRouter>
    );
}
