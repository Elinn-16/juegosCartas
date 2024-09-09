import Navbar from '../componentes/Navbar'
import './comoJugar.css'
function Instrucciones() {
    return (
        <>
        <Navbar/>
        <div className='cont'>
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title">Objetivo del Juego</h5>
            <p class="card-text">
                Este juego tiene como objetivo sumar un total de puntos lo más cercano a 7.5 sin pasarse. 
                En caso de que un jugador supere los 7.5 puntos, automáticamente quedará descalificado (pierde).
            </p>
        </div>
    </div>
    <div class="card text-center">
        <div class="card-header">
            ¿Y cómo juego?
        </div>
        <div class="card-body">
            <h5 class="card-title">Paso 1</h5>
            <p class="card-text">
                Un jugador deberá tomar el rol de banco, este mezclará y repartirá una carta a cada uno de los jugadores (con el incluido).
            </p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Paso 2</h5>
            <p class="card-text">
                Cada jugador tendrá su turno donde podrá pedir o no cartas al banco, con el objetivo de llegar lo más cerca posible a los 7.5 puntos.
            </p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Paso 3</h5>
            <p class="card-text">
                Luego de que todos los jugadores hayan tenido su turno, el banco jugará como uno de ellos, pudiendo elegir tomar cartas o no.
            </p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Victoria</h5>
            <p class="card-text">
                Para definir el ganador, luego de los pasos ya mencionados, se revisa quién tiene el puntaje más cercano a 7.5. 
                Quien lo tenga será el ganador. En caso de que el puntaje de algún jugador esté empatado con el del banco, el ganador será siempre el banco.
            </p>
        </div>
        <div class="card-body">
            <h5 class="card-title">Derrota</h5>
            <p class="card-text">
                Si algún jugador excede de los 7.5 puntos en su turno, este automáticamente pierde.
            </p>
        </div>
    </div>
</div>
        </>
    )
}
export default Instrucciones