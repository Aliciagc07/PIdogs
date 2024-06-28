import "./HomePage.css"
import Cards from "../../components/cards/cards"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDogs } from "../../redux/actions/action";

//Crear vista react
function HomePage() {
    const allDogs = useSelector((state) => state.allDogs);
    // Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
    }, [dispatch]);

    return (
        <div>
            <h1>Home Page</h1>
            <Cards allDogs={allDogs} />
        </div>
    )
}

export default HomePage;