import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [Nombre,actualizarNombre]=useState("")
    const [Puesto,actualizarPuesto]=useState("")
    const [Foto,actualizarFoto]=useState("")
    const [Equipo,ActualizarEquipo]=useState("")
    const [Titulo,ActualizarTitulo]=useState("")
    const [Color,ActualizarColor]=useState("")

    const {registrarColaborador , crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosEnviar = {
            Nombre ,
            Puesto,
            Foto,
            Equipo
        }
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo:Titulo,color_primario:Color})
    }

    return <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>

                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingresar Nombre" 
                    required valor={Nombre} 
                    actualizarValor={actualizarNombre}
                />

                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresar Puesto" 
                    required valor={Puesto} 
                    actualizarValor={actualizarPuesto}
                />

                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar Enlace de Foto" 
                    required valor={Foto} 
                    actualizarValor={actualizarFoto}
                />

                <ListaOpciones
                    valor={Equipo}
                    ActualizarEquipo={ActualizarEquipo}
                    equipos = {props.equipos}
                />

                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el Equipo.</h2>

                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar Titulo" 
                    required valor={Titulo} 
                    actualizarValor={ActualizarTitulo}
                />

                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar El Color en Hex" 
                    required valor={Color} 
                    actualizarValor={ActualizarColor}
                    type="color"
                />
                <Boton>
                    Crear Equipo
                </Boton>
            </form>
        </section>
}

export default Formulario