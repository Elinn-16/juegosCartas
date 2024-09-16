import Navbar from './Navbar'
import { useState } from 'react'
function Contenido() {
const PosiblesCartas = [1,2,3,4,5,6,7,10,11,12]
const [cartaElegida,setCartaElegida] = useState(0)
const [jugador,setJugador] = useState(0)
const [casa,setCasa] = useState(0)
const finTurno = ()=>{

}
const otra = ()=>{
    const carta = PosiblesCartas[Math.floor(Math.random() * PosiblesCartas.length)];
    if (carta > 7){
        setJugador(jugador+0.5)
    }else{
        setJugador(jugador+carta)
    }
    console.log(jugador)
}
const partidaNueva = ()=>{
    setCasa(0);
    setJugador(0);
}
const iniciar = ()=>{
    const cas = PosiblesCartas[Math.floor(Math.random() * PosiblesCartas.length)];
    const jug = PosiblesCartas[Math.floor(Math.random() * PosiblesCartas.length)];
    if (cas > 7){
        setCasa(casa+0.5)
    }else{
        setCasa(casa+cas)
    }
    if (jug > 7){
        setJugador(jugador+0.5)
    }else{
        setJugador(jugador+jug)
    }
    console.log(casa,jugador)
}
    return (
        <>
        <Navbar/>
        <div>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Siete y medio</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" onClick={finTurno} type="button">Finalizar Turno</button>
        <button className="btn btn-primary btn-lg" onClick={otra} type="button">Otra Carta</button>
        <button className="btn btn-primary btn-lg" onClick={iniciar} type="button">Iniciar Juego</button>
        <button className="btn btn-primary btn-lg" onClick={partidaNueva} type="button">Juego Nuevo</button>
      </div>
    </div>
        </div>
        </>
    )
}
export default Contenido