
import "./MiOrg.css"
const MiOrg = (props) => {
    //estados - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionCambia]
    //const [nombre,actualizarestado] = useState("Harland")

    /*const [Mostar,actualizarMostar] = useState(true)
    const manejarClick = () =>{
        console.log("mostrar",Mostar)
        actualizarMostar(!Mostar)
    }
    */
    return <section className="OrgSection">
            <h3 className="Title">Mi organización </h3>
            <img src="/img/add.png" alt="Imagen para agregar y quitar seccion" onClick={props.cambiarMostar}/>
           </section>
    
}

export default MiOrg