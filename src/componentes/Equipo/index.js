import "./Equipo.css"
import Colaborador from "../Colaborador"


const equipo = (props) => {

    //Destructuracion
    const {color_primario,color_secundario, titulo} = props.equipo
    const {Colaboradores}= props
    //esto hace referencia a lo de arriba
    //const color_primario= props.equipo.color_primario

    const obj = {background:color_secundario}
    const estituloTitulo=  {borderColor:color_primario}

    return <section className="equipo" style={obj }>
            <h3 style={estituloTitulo}>{titulo} </h3>
            <div className="Colaboradores">
                
                {
                    Colaboradores.map((colaborador,index)=> <Colaborador datos = {colaborador} key={index} />)
                }
            </div>
           </section>
}

export default equipo