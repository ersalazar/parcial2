import { useState } from "react"


// Por nomenclatura todos los hooks deben de comenzar con use
const useForm = (initalState : any) => {

    const [state, setState] = useState(initalState)
    
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

        const value = e.target.files && e.target.files[0] ? e.target.files[0] : e.target.value; 

        console.log(value)

        setState(state => ({ ...state, [e.target.name] : value}));
    }
    
    return [
        state,
        handleChange
    ];
}

export default useForm