import "./Colaborador.css"
import {AiFillCloseCircle , AiOutlineHeart , AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    const { Nombre,Puesto,Foto, id , fav } = props.datos
    const {color_primario , eliminarColaborador, like} = props
    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id,Nombre)} className="eliminar"/>
            <div className="encabezado" style={{background:color_primario}}>
                <img src={Foto} alt={Nombre}/>
            </div>
            <div className="info">
                <h4>{Nombre}</h4>
                <h5>{Puesto}</h5>
                {fav ? <AiFillHeart  color="red" onClick={()=>{like(id)}} /> : <AiOutlineHeart onClick={()=>{like(id)}} />}
                
                
                
            </div>
          </div>
}

export default Colaborador