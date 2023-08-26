import { useState } from "react";
import { saveTitle } from "../firebase/firebase";
export default function BeticoForm() {
    const [itsTitle, setItsTitle] = useState("");
    const handleValueState = (event) => {
        setItsTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        saveTitle(itsTitle);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué tarea guardarás hoy?"
                    onChange={handleValueState}
                    value={itsTitle}
                />
                <input type="submit" value="Guardar" />
            </form>
        {itsTitle}
        </>

    );
}