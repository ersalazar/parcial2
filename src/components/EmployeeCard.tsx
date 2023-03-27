//@ts-nocheck
import useForm from "./useForm.tsx";
import { Employee, initalStateEmployee } from "../interfaces/Employee.ts";
import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../interfaces/EmployeeContextData.ts";
import EmployeeContextData from "../interfaces/EmployeeContextData.ts";
import Modal from "./Modal/Modal.tsx";
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
    const [isBlocked, setIsBlocked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const block = () => {
        if((!name|| !dateOfBirth || !position || !email || !phoneNumber || !photo)){
            setError(true)
            setErrorMessage('Todos los campos son obligatorios')
        }else{
            updateDisplays();
            setIsBlocked(true);
        }
    }
    const unblock = () => {
        setIsBlocked(false);
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