import React, {useState} from "react"

const Features = () => {
    const [variable, setVariable] = useState(0)
    console.log(variable)

    const suma = () => {
        setVariable(variable + 1)
    }

    const resta = () => {
        setVariable(variable - 1)
    }

    return <> 
       <div className="caja">{variable}</div>
       <button onClick={suma}>+</button>
       <button onClick={resta}>-</button>
    </>
}

export default Features