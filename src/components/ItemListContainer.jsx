import "../App.css"
import ItemCount from "./ItemCount"

function Counter(props) {
    return (
        <div>
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default Counter