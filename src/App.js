import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [MostarFormulrio,actualizarMostar] = useState(false)
  //Ternario --> condicion ? se muestra: no se muestra (como un if ?) 

  const [Colaboradores,actualizarColaboradores] = useState([{
    id:uuid(),
    Equipo: "Front End",
    Foto: "https://github.com/harlandlohora.png",
    Nombre: "Harland Lohora",
    Puesto: "Instructor",
    fav: true
  },
  {
    id:uuid(),
    Equipo: "Programación",
    Foto: "https://github.com/JeanmarieAluraLatam.png",
    Nombre: "Genesys Rondón",
    Puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id:uuid(),
    Equipo: "UX y Diseño",
    Foto: "https://github.com/JeanmarieAluraLatam.png",
    Nombre: "Jeanmarie Quijada",
    Puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id:uuid(),
    Equipo: "Programación",
    Foto: "https://github.com/christianpva.png",
    Nombre: "Christian Velasco",
    Puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id:uuid(),
    Equipo: "Innovación y Gestión",
    Foto: "https://github.com/JoseDarioGonzalezCha.png",
    Nombre: "Jose Gonzalez",
    Puesto: "Dev FullStack",
    fav: false
  }])
  //Dato prueba
  
  //Lista de equipos
  const [equipos,actualizarEquipos]=useState([   
    {
      id:uuid(),
      titulo: "Programación",
      color_primario:"#57C278",
      color_secundario:"#D9F7E9"
    },
    {
      id:uuid(),
      titulo: "Front End",
      color_primario:"#82CFFA",
      color_secundario:"#E8F8FF"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      color_primario:"#A6D157",
      color_secundario:"#F0F8E2"
    },
    {
      id:uuid(),
      titulo: "Devops",
      color_primario:"#E06B69",
      color_secundario:"#FDE7E8"
    },
    {
      id:uuid(),
      titulo: "UX y Diseño",
      color_primario:"#DB6EBF",
      color_secundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo: "Móvil",
      color_primario:"#FFBA05",
      color_secundario:"#FFF5D9"
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      color_primario:"#FF8A29",
      color_secundario:"#FFEEDF"
    },
    ])

  const cambiarMostar = ()=> {
    actualizarMostar(!MostarFormulrio);
  };

  //registrar colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo Colaborador",colaborador)
    //Spread operador copia de los datos actuales
    actualizarColaboradores([...Colaboradores,colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id,nombre) => {
    console.log("Colaborador: ",nombre," Eliminado")
    const nuevosColaboradores = Colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  
  // crear Equipo
  const crearEquipo = (nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  //actualizar color de equipo
  const actualizarColor = (color,id) =>{

    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.color_primario = color
      }
      return equipo })
      actualizarEquipos(equiposActualizados)
  }

  //actualizar estado favorito
  const like = (id) => {
    const colaboradoresActualizados = Colaboradores.map((colaborador)=>{
      if(colaborador.id ===  id ){
        colaborador.fav = !colaborador.fav 
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
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
        {
          MostarFormulrio && <Formulario
          
            equipos= {equipos.map((equipo)=> equipo.titulo )}
            registrarColaborador={registrarColaborador}
            crearEquipo = {crearEquipo}
          />
          
        }
        
        <MiOrg cambiarMostar={cambiarMostar}/>
        {
          equipos.map((equipo) => <Equipo 
            equipo={equipo} 
            key={equipo.titulo} 
            Colaboradores={Colaboradores.filter(Colaborador =>Colaborador.Equipo === equipo.titulo )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
            />
            
          )
        }
        < Footer/>
    </div>
  );
}

export default App;
