import "../App.css"
import ItemCount from "./itemCount"

function Greeting(props) {
    return (
        <div>
            <h1>{ props.saludo }</h1>
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default Greeting