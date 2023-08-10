import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const [Nombre,actualizarNombre]=useState("")
    const [Puesto,actualizarPuesto]=useState("")
    const [Foto,actualizarFoto]=useState("")
    const [Equipo,ActualizarEquipo]=useState("")

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosEnviar = {
            Nombre ,
            Puesto,
            Foto,
            Equipo
        }
        console.log(datosEnviar)
    }

    return <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>

                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar Nombre" 
                    required valor={Nombre} 
                    actualizarValor={actualizarNombre}
                />

                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar Puesto" 
                    required valor={Puesto} 
                    actualizarValor={actualizarPuesto}
                />

                <CampoTexto 
                    titulo="Foto" 
                    placeholder="Ingresar Enlace de Foto" 
                    required valor={Foto} 
                    actualizarValor={actualizarFoto}
                />

                <ListaOpciones
                    valor={Equipo}
                    ActualizarEquipo={ActualizarEquipo}
                />

                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
}

export default Formulario