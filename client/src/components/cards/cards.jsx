import "./cards.css"
import Card from '../card/card'


function Cards({ allDogs }) {
    return (
        <div>
            {allDogs.map((dog, index) => {
                return <Card key={index} image={dog.image} name={dog.name} temperamets={dog.temperament} weight={dog.weight} />
            })}
        </div>
    )
}

export default Cards;