import forca0 from './../assets/forca0.png'
import forca1 from './../assets/forca1.png'
import forca2 from './../assets/forca2.png'
import forca3 from './../assets/forca3.png'
import forca4 from './../assets/forca4.png'
import forca5 from './../assets/forca5.png'
import forca6 from './../assets/forca6.png'

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

export default function Jogo({erros, setErros, palavraJogo, classeCor, setClasseCor, setDesabilitadorElementos}) {

    function comecarJogo(){
        setDesabilitadorElementos(false);
        setLetrasEscolhidas([])
        setErros(0)
        setClasseCor('black')    
        const indiceRandom = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[indiceRandom]
        setPalavraRandom(palavra);
        const arrayPalavra = palavra.split('');
        const espacosEmBranco = arrayPalavra.map(letra => ' _')
        setPalavraJogo(espacosEmBranco)
     }    

    return (
        <div className='forca'>
            <img src={imagens[erros]} alt='img da forca' />
            <button onClick={comecarJogo}>Escolher Palavra</button>
            <h1 className={classeCor}>{palavraJogo}</h1>
        </div>
    )
}