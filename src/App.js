import { useState } from 'react';

import palavras from './palavras'
import Jogo from './components/Jogo';
import Letras from './components/Letras';

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {

  const [desabilitadorElementos, setDesabilitadorElementos] = useState(true)
  
  const [erros, setErros] = useState(0)
  const [palavraJogo, setPalavraJogo] = useState([])
  const [classeCor, setClasseCor] = useState('black')
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([...alfabeto])
  const [palavraRandom, setPalavraRandom] = useState([]);

  return (
    <div className='tela-inteira'>
      
      <Jogo palavraRandom={palavraRandom} setPalavraRandom={setPalavraRandom} erros={erros} setErros={setErros} palavraJogo={palavraJogo} setPalavraJogo={setPalavraJogo} classeCor={classeCor} setClasseCor={setClasseCor} setDesabilitadorElementos={setDesabilitadorElementos} letrasEscolhidas={letrasEscolhidas} setLetrasEscolhidas={setLetrasEscolhidas}/>
      
      <Letras palavraRandom={palavraRandom} setPalavraRandom={setPalavraRandom} erros={erros} setErros={setErros} palavraJogo={palavraJogo} setPalavraJogo={setPalavraJogo} setClasseCor={setClasseCor} setDesabilitadorElementos={setDesabilitadorElementos} letrasEscolhidas={letrasEscolhidas} setLetrasEscolhidas={setLetrasEscolhidas} alfabeto={alfabeto}/>

      <div className='input'>
        <span>Já sei a palavra</span>
        <input disabled={desabilitadorElementos}/>
        <button disabled={desabilitadorElementos}>Chutar</button>
      </div>      
    </div>
  );
}
