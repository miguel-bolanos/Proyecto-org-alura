import "./Colaborador.css"
const Colaborador = (props) => {
    const { Nombre,Puesto,Foto,Equipo } = props.datos
    return <div className="colaborador">
            <div className="encabezado">
                <img src={Foto} alt={Nombre}/>
            </div>
            <div className="info">
                <h4>{Nombre}</h4>
                <h5>{Puesto}</h5>
            </div>
          </div>
}

export default Colaborador