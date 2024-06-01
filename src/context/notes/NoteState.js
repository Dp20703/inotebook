import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Dp",
        "class": "5b"
    }
    const [state, setState] = useState(s1)
    const update = (name, classN) => {
        setTimeout(() => {
            setState({
                "name": name,
                "class": classN
            })

        }, 1000)
    }
    return (<NoteContext.Provider value={{ state, update }}>
        {props.children}
    </NoteContext.Provider>)
}

export default NoteState;