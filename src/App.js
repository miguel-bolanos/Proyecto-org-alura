import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
function App() {
  const [MostarFormulrio,actualizarMostar] = useState(true)
  //Ternario --> condicion ? se muestra: no se muestra (como un if ?) 
  const cambiarMostar = ()=> {
    actualizarMostar(!MostarFormulrio)
  }
  return (
    <div >
      {/* formas de llamar a un componente
        {Header()}
        <Header></Header>
        <Header/>
        */}
        <Header/>
        {/*MostarFormulrio? <Formulario/> : <></>*/} 
        {MostarFormulrio && <Formulario/>}
        
        <MiOrg cambiarMostar={cambiarMostar}/>
    </div>
  );
}

export default App;
