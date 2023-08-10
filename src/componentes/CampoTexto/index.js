
import "./CampoTexto.css"

const CampoTexto= (props) => {

    
    const placeholdermodificado = `${props.placeholder}...`;
    
    const manejarcambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className="Campo-Texto">
            <label>{props.titulo}</label>
            <input 
                    placeholder={placeholdermodificado} 
                    required={props.required} 
                    value={props.valor}
                    onChange={manejarcambio}
            />
           </div>
}

export default CampoTexto