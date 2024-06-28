import "./LandingPage.css"
import { Link } from "react-router-dom";
import Button from "../../components/button/button";


//Crear vista react
function LandingPage() {
    return (
        <div>
            <h1>LandingPage</h1>
            <Link to='/home'>
                <Button name="Entrar" />
            </Link>
        </div>
    )
}

export default LandingPage;