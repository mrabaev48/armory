import {Armory} from "./Armory";

/** @jsx Armory.createElement */
function Counter() {
    const [state, setState] = Armory.useState(1)
    return (
        <div>
            <h1>
                Count: {state}
            </h1>
            <button
                onClick={() => setState(c => c + 1)}
            >
                Click me
            </button>
        </div>
    )
}
const element = <Counter />
const container = document.getElementById("root")
Armory.render(element, container)
