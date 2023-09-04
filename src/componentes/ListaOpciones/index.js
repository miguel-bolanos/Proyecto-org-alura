import "./Listaopciones.css"
const ListaOpciones = (props) =>{
    //metodo map para recorrer un arreglo se usa de la siguiente forma   index(poscicion)
    //estructura map => arreglo.map( (equipo,index ) => {
    //      return <option>  </option>
    //})
    const manejarCambio = (event) => {
        props.ActualizarEquipo(event.target.value)
    }

    return  <div className="SelectList">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccione una opcion</option>
                {
                    props.equipos.map((equipo,index)=> {
                        return <option key={index} value={equipo}>{equipo}</option>
                    })
                }
            </select>
            </div>
}

export default ListaOpciones