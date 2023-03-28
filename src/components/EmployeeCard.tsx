//@ts-nocheck
import useForm from "./useForm.tsx";
import { Employee, initalStateEmployee } from "../interfaces/Employee.ts";
import { useContext, useEffect, useState, useReducer } from "react";
import EmployeeContext from "../interfaces/EmployeeContextData.ts";
import EmployeeContextData from "../interfaces/EmployeeContextData.ts";
import Modal from "./Modal/Modal.tsx";
import {blockReducer, initialState} from '../interfaces/Reducer.ts'
// import UploadAndDisplayImage from "./UploadAndDisplayImage.tsx";


function EmployeeCard () {

    const {data, handleChange} = useContext<EmployeeContextData>(EmployeeContext);

    const {name,dateOfBirth, position, email, phoneNumber, photo } = data
    const [displayName, setDisplayName] = useState(name);
    const [displayDateOfBirth, setDisplayDateOfBirth] = useState(dateOfBirth);
    const [displayPosition, setDisplayPosition] = useState(position);
    const [displayEmail, setDisplayEmail] = useState(email);
    const [displayPhoneNumber, setDisplayPhoneNumber] = useState(phoneNumber);
    const [displayPhoto, setDisplayPhoto] = useState(photo);
    
    
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [{isBlocked}, dispatch] = useReducer(blockReducer, initialState);
    const block = () => {
        if (!name || !dateOfBirth || !position || !email || !phoneNumber || !photo) {
          setError(true);
          setErrorMessage("Todos los campos son obligatorios");
        } else {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(email)) {
            setError(true);
            setErrorMessage("Formato email incorrecto, ejemplo: Hola@hotmail.com");
          } else if (phoneNumber.length !== 10) {
            setError(true);
            setErrorMessage("Formato número incorrecto, el número tiene que ser de 10 dígitos");
          } else if (name.length < 2 || name.length > 40) {
            setError(true);
            setErrorMessage("El nombre debe tener más de 1 letra y menos de 40.");
          } else {
            dispatch({type: 'block'})
            updateDisplays();
          }
        }
      };
      
    const unblock = () => {
        dispatch({type: 'unblock'})
        updateDisplays()
    }



    const updateDisplays = () => {
        setDisplayName(name);
        setDisplayDateOfBirth(dateOfBirth);
        setDisplayPosition(position);
        setDisplayEmail(email);
        setDisplayPhoneNumber(phoneNumber);
        setDisplayPhoto(photo);
    }
    const handleClose = () => {
        setError(false);
        setErrorMessage('');
    };

    useEffect(() => {
        if(isBlocked === false){
            updateDisplays()
        }
    }, [data])

    return (
        <div className="EmployeeCard">
            <button onClick={block}>Bloquear tarjeta</button>
            <button onClick={unblock}>Desbloquear tarjeta</button>
            {isBlocked && <h5>La tarjeta se encuentra bloqueada</h5>}
            {isBlocked === false && <h5>La tarjeta se encuentra desbloqueada</h5>}
            <h4>Nombre: {displayName}</h4>
            <br />
            <h4>Puesto: {displayPosition}</h4>
            <br />
            <h4>Email: {displayEmail}</h4>
            <br />
            <h4>Teléfono: {displayPhoneNumber}</h4>
            <br />
            <h4>Fecha de nacimiento: {displayDateOfBirth}</h4>
            <br />
            <h4>Foto:</h4>
            <img
                alt="not found"
                width={"250px"}
                src={displayPhoto && URL.createObjectURL(displayPhoto)}
            />
            {error && (
                <Modal message={errorMessage} onClose={handleClose} />
              )}
            </div>
    );
}

export default EmployeeCard