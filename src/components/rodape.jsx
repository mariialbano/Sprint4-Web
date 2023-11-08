import LogoPorto from "../assets/images/logo-porto.png"
import './rodape.css'
export default function Rodape(){

    return(
        <footer>
            <img src={LogoPorto} alt="LogoPorto" height="100px" />
            <p>Adicione a Porto no WhatsApp e siga as orientações da nossa assistente virtual: </p>
            <button> (11) 3003 9303</button>
        </footer>
    )
}