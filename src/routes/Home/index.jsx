import LogoPorto from '../../assets/images/logoporto.png'

export default function Home(){

    return(
        <main>
            <div>
                <img src={LogoPorto} alt="LogoPorto" className='LogoPorto'/>
                <h1>Quem somos?</h1>
                <p>A porto é mais que uma seguradora: é um ecossistema com todas as soluções para transformar sonhos em realidades diárias.</p>
                <p>
                Com mais de 75 anos de mercado, possui hoje três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank, formando, assim, um conjunto de soluções de proteção para os seus momentos que vão desde o dia a dia até o grande dia.</p>
                <h2>Instruções para a vistoria</h2>
                <p>Entre no link que será encaminhado via Whatsapp para realizar a vistoria</p>
                <p>A vistoria deve ser feita diretamente por um celular com fotos tiradas na hora</p>
                <p>Tenha o documento e/ou nota fiscal de sua bike por perto</p>
            </div>
          
            
        </main>
    )
}