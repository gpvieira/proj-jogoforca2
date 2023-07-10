const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function Letras({erros, setErros, palavraJogo, setPalavraJogo, setClasseCor, setDesabilitadorElementos}) {

    const [letrasEscolhidas, setLetrasEscolhidas] = useState([...alfabeto])
    
    function selecionarLetra(letra) {
        const novoArray = [...letrasEscolhidas, letra];
        setLetrasEscolhidas(novoArray);
    
        if (palavraRandom.includes(letra)){
          const novaPalavra = [...palavraJogo]
          palavraRandom.forEach ((l,i) => {
            if (l === letra){
              novaPalavra[i] = l
            }
          })
          setPalavraJogo(novaPalavra)
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