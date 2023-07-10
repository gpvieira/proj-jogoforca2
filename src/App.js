import forca0 from '.assets/forca0.png'
import forca1 from '.assets/forca1.png'
import forca2 from '.assets/forca2.png'
import forca3 from '.assets/forca3.png'
import forca4 from '.assets/forca4.png'
import forca5 from '.assets/forca5.png'
import forca6 from '.assets/forca6.png'
import palavras from './palavras'

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {

  const [desabilitadorElementos, setDesabilitadorElementos] = useState(true);

  return (
    <div className='tela-inteira'>
      <div className='forca'>
        <img src={forca0} alt='imagem da forca' />
        <button>Escolher Palavra</button>
        <h1>Palavra</h1>
      </div>
      <div className='alfabeto'>
        {alfabeto.map(letra=> <button disabled={desabilitadorElementos}>{letra}</button>)}
      </div>
      <div className='input'>
        <span>Já sei a palavra</span>
        <input disabled={desabilitadorElementos}/>
        <button disabled={desabilitadorElementos}>Chutar</button>
        </div>      
    </div>
  );
}
