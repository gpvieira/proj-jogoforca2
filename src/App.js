import { useState } from 'react';

import palavras from './palavras'
import Jogo from './components/Jogo';
import Letras from './components/Letras';

export default function App() {

  const [desabilitadorElementos, setDesabilitadorElementos] = useState(true)
  const [palavraRandom, setPalavraRandom] = useState([]);
  const [erros, setErros] = useState(0)
  const [palavraJogo, setPalavraJogo] = useState([])
  const [classeCor, setClasseCor] = useState('black')

  return (
    <div className='tela-inteira'>
      
      <Jogo erros={erros} setErros={setErros} palavraJogo={palavraJogo} classeCor={classeCor} setClasseCor={setClasseCor} setDesabilitadorElementos={setDesabilitadorElementos}/>
      
      <Letras erros={erros} setErros={setErros} palavraJogo={palavraJogo} setPalavraJogo={setPalavraJogo} setClasseCor={setClasseCor} setDesabilitadorElementos={setDesabilitadorElementos}/>

      <div className='input'>
        <span>Já sei a palavra</span>
        <input disabled={desabilitadorElementos}/>
        <button disabled={desabilitadorElementos}>Chutar</button>
      </div>      
    </div>
  );
}
