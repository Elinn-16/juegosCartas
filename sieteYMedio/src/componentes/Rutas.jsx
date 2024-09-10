import Contenido from './Contenido'
import Valores from './Valores'
import ComoJugar from "./comoJugar"
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
const Rutas = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Contenido/>} />
                    <Route path='/ComoJugar' element={<ComoJugar/>} />
                    <Route path='/Valores' element={<Valores/>} />
                </Routes>
            </div>
        </Router>
    )
}
export default Rutas