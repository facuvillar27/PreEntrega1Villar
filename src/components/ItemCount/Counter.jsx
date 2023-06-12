import "../App.css"
import ItemCount from "."

function Counter(props) {
    return (
        <div>
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default Counter