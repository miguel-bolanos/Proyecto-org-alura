
import "./Campo.css"

const Campo= (props) => {

    
    const placeholdermodificado = `${props.placeholder}...`;
    const {type = "text"} = props

    const manejarcambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className={`Campo Campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                    placeholder={placeholdermodificado} 
                    required={props.required} 
                    value={props.valor}
                    onChange={manejarcambio}
                    type = {type}
            />
           </div>
}

export default Campo