import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const equipo = (props) => {

    //Destructuracion
    const {color_primario,color_secundario, titulo , id} = props.equipo
    const {Colaboradores , eliminarColaborador,actualizarColor , like}= props
    //esto hace referencia a lo de arriba
    //const color_primario= props.equipo.color_primario

    const obj = {background:hexToRgba(color_primario,0.4)}
    const estituloTitulo=  {borderColor:color_primario}
    return <>
        { Colaboradores.length > 0 &&
            <section className="equipo" style={obj }>

            <input 
                type="color"
                className="input-color"
                value={color_primario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value,id)
                }}
            />
            <h3 style={estituloTitulo}>{titulo} </h3>
            <div className="Colaboradores">
                
                {
                    Colaboradores.map((colaborador,index)=> <Colaborador 
                    datos = {colaborador} 
                    key={index}
                    color_primario = {color_primario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
           </section>
        }
    </>
}

export default equipo