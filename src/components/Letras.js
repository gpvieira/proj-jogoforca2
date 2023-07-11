import {useState} from 'react'

export default function Letras({erros, setErros, palavraJogo, setPalavraJogo, palavraRandom, setPalavraRandom, setClasseCor, setDesabilitadorElementos, setLetrasEscolhidas, letrasEscolhidas, alfabeto}) {

    
    
    function selecionarLetra(letra) {
        const novoArray = [...letrasEscolhidas, letra];
        setLetrasEscolhidas(novoArray);

            
        if (palavraRandom.includes(letra)){
          const novaPalavra = [...palavraJogo]
          palavraRandom.forEach((l,i) => {
            if (l === letra){
              novaPalavra[i] = l
              setPalavraJogo(novaPalavra)              
            }
          })
          
          if (palavraRandom.join('') === novaPalavra.join('')){
            setClasseCor('green')
            inativar()
          }
        } else {
            const totalDeErros = erros + 1
            setErros(totalDeErros)
    
          if(totalDeErros === 6){
            setPalavraJogo(palavraRandom)
            setClasseCor('red')
            inativar()        
          }
        }    
      }

    function inativar(){
        setDesabilitadorElementos(true);
        setLetrasEscolhidas([...alfabeto])    
    }
    
    return (
        <div className='alfabeto'>
          {alfabeto.map(letra=> (<button key={letra} disabled={letrasEscolhidas.includes(letra)} onClick={()=>selecionarLetra(letra)}>{letra}</button>))}
        </div>
    )
}