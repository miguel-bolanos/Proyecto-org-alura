import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';


function App() {
  const [MostarFormulrio,actualizarMostar] = useState(false)
  //Ternario --> condicion ? se muestra: no se muestra (como un if ?) 

  const [Colaboradores,actualizarColaboradores] = useState([])

  const cambiarMostar = ()=> {
    actualizarMostar(!MostarFormulrio);
  };


  //registrar colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo Colaborador",colaborador)
    //Spread operador copia de los datos actuales
    actualizarColaboradores([...Colaboradores,colaborador])
  }

  //Lista de Equipos
  const equipos = [   
    {
      titulo: "Programación",
      color_primario:"#57C278",
      color_secundario:"#D9F7E9"
    },
    {
      titulo: "Front End",
      color_primario:"#82CFFA",
      color_secundario:"#E8F8FF"
    },
    {
      titulo: "Data Science",
      color_primario:"#A6D157",
      color_secundario:"#F0F8E2"
    },
    {
      titulo: "Devops",
      color_primario:"#E06B69",
      color_secundario:"#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      color_primario:"#DB6EBF",
      color_secundario:"#FAE9F5"
    },
    {
      titulo: "Móvil",
      color_primario:"#FFBA05",
      color_secundario:"#FFF5D9"
    },
    {
      titulo: "Innovación y  Gestión",
      color_primario:"#FF8A29",
      color_secundario:"#FFEEDF"
    },
    ];

  return (
    <div >
      {/* formas de llamar a un componente
        {Header()}
        <Header></Header>
        <Header/>
        */}
        <Header/>
        {/*MostarFormulrio? <Formulario/> : <></>*/} 
        {
          MostarFormulrio && <Formulario
          
            equipos= {equipos.map((equipo)=> equipo.titulo )}
            registrarColaborador={registrarColaborador}
          />
        }
        
        <MiOrg cambiarMostar={cambiarMostar}/>
        {
          equipos.map((equipo) => {
            console.log(equipo.titulo)
            return <Equipo equipo={equipo} key={equipo.titulo} Colaboradores={Colaboradores}/>
          })
          
        }
        
    </div>
  );
}

export default App;
