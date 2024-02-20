import "./Question.css"
import { useState } from "react"
import { SlArrowDown } from "react-icons/sl";

const Question = ({title, info}) => {
    const [show, setShow] = useState(false)
    return<div className="one-question">
        <section>
            <h2>{title}</h2>
            <button onClick={ () => setShow(!show) }><SlArrowDown
            style={{
              transform: show ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }} /></button>
        </section>
        {show && <p>{info}</p>}
    </div>
}

export default Question