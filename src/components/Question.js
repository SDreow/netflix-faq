import "./Question.css"
import { useState } from "react"

const Question = ({title, info}) => {
    const [show, setShow] = useState(false)
    return<>
        <section>
            <h2>{title}</h2>
            <button onClick={ () => setShow(!show) }>Odpověď</button>
        </section>
        {show && <p>{info}</p>}
        
    </>
}

export default Question