import Navbar from '../componentes/Navbar'
import './Valores.css'
function Valores() {
    return (
<div>
    <Navbar />
    <div className='cont'>
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Cartas del 1 al 7</h5>
                <p class="card-text">
                    Estas cartas mantienen su valor nominal, esto quiere decir que mantienen su valor.
                </p>
                <p>Por ejemplo:</p>
                <p>1 = 1 punto</p>
                <p>2 = 2 puntos</p>
                <p>3 = 3 puntos</p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Cartas 8 y 9</h5>
                <p class="card-text">
                    Estas cartas son descartadas, por lo que no forman parte del juego.
                </p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Cartas del 10 al 12</h5>
                <p class="card-text">
                    Estas cartas no mantienen su valor nominal. El valor de estas cartas es de 0.5 puntos.
                </p>
                <p>Por ejemplo:</p>
                <p>10 = 0.5 puntos</p>
                <p>11 = 0.5 puntos</p>
                <p>12 = 0.5 puntos</p>
            </div>
        </div>
    </div>
</div>
    )
}
export default Valores