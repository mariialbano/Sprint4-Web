
import React, { useState } from 'react';
import BikeFrente from '../../assets/images/bikeFrente.png'
import BikeDireito from '../../assets/images/bikeDireito.png'
import BikeCompleta from '../../assets/images/bikeCompleta.png'
import Pedivela from '../../assets/images/pedivela1.png';
import Nserie from '../../assets/images/numero-series.png';
import NotaFiscal from '../../assets/images/nota-fiscal.png';

export default function Vistoria() {
  const [divToShow, setDivToShow] = useState('bikeCompleta');


  const mostrarDiv = (divId) => {
    setDivToShow(divId);
  };

  const divs = [
    {
      id: 'bikeCompleta',
      content: (
        <>
          <img src={BikeCompleta} alt="BikeCompleta" className='fotosBike' />
          <p>
            <strong>Tire uma foto completa da sua bike, sempre do lado que apareça a corrente (não obstrua a marca)</strong>
          </p>
        </>
      ),
    },
    {
      id: 'pedivela',
      content: (
        <>
          <img src={Pedivela} alt="Pedivela" className='fotosBike' />
          <p>
            <strong>Tire uma foto do pé de vela da sua bike</strong>
          </p>
        </>
      ),
    },
    {
      id: 'bikeFrente',
      content: (
        <>
          <img src={BikeFrente} alt="BikeFrente" className='fotosBike' />
          <p>
            <strong>Tire uma foto da sua bicicleta de frente (não obstrua a marca)</strong>
          </p>
        </>
      ),
    },
    {
      id: 'ladoDireito',
      content: (
        <>
          <img src={BikeDireito} alt="LadoDireito" className='fotosBike' />
          <p>
            <strong>Tire uma foto do lado direito da sua bicicleta, sempre do lado que apareça a corrente (não obstrua a marca)</strong>
          </p>
        </>
      ),
    },
    {
      id: 'notaFiscal',
      content: (
        <>
          <img src={NotaFiscal} alt="nota fiscal" className='fotosBike' />
          <p>
            <strong>Tire uma foto completa da nota fiscal da sua bike</strong>
          </p>
        </>
      ),
    },{
      id: 'numeroDeSerie',
      content: (
        <>
          <img src={Nserie} alt="nota fiscal" className='fotosBike' />
          <p>
            <strong>Tire uma foto don numero de serie da sua bike</strong>
          </p>
        </>
      ),
    },
  ];

  const currentIndex = divs.findIndex((item) => item.id === divToShow);

  const avancar = () => {
    if (currentIndex === divs.length - 1) {
      // Se estiver na última div, não avance
      return;
    }
    const nextIndex = currentIndex + 1;
    mostrarDiv(divs[nextIndex].id);
  };

  const voltar = () => {
    if (currentIndex === 0) {
      // Se estiver na primeira div, não volte
      return;
    }
    const prevIndex = currentIndex - 1;
    mostrarDiv(divs[prevIndex].id);
  };

  return (
    <main>
      <div style={{ display: 'flex' }}>
        {divs.map((item) => (
          <div key={item.id} style={{ display: divToShow === item.id ? 'flex' : 'none' }}>
            {item.content};
          </div>
        ))}
      </div>
      <div>
        <button class='foto' onClick={() => mostrarDiv(divToShow)}>Tirar foto</button>
        <div class="bto">
        <button class='bt' onClick={voltar}>Voltar</button>
        <button class='bt' onClick={avancar}>Avançar</button>
        </div>
      </div>
      
    </main>
  );
}

