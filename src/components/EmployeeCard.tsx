//@ts-nocheck
import useForm from "./useForm.tsx";
import { Employee, initalStateEmployee } from "../interfaces/Employee.ts";
import { useContext } from "react";
import EmployeeContext from "../interfaces/EmployeeContextData.ts";
import EmployeeContextData from "../interfaces/EmployeeContextData.ts";
// import UploadAndDisplayImage from "./UploadAndDisplayImage.tsx";




function EmployeeCard () {

    const {data, handleChange} = useContext<EmployeeContextData>(EmployeeContext);

    const { name, dateOfBirth, position, email, phoneNumer, photo } = data

    return (
        <div class="EmployeeCard">
            <h4>Nombre: {name}</h4>
            <br />
            {/* Fecha de naciemiento: {dateOfBirth} */}
            <br />
            <h4>Puesto: {position}</h4>
            <br />
            <h4>Email: {email}</h4>
            <br />
            <h4>Teléfono: {phoneNumer}</h4>
            <br />
            {/* Fecha de naciemiento: {`${dateOfBirth.gatDate()}/${dateOfBirth.gatMonth() + 1}/${dateOfBirth.gatFullYear()}`} */}
            <h4>Fecha de naciemiento: {dateOfBirth}</h4>
            <br />
            <h4>Foto:</h4>
            <img
                alt="not found"
                width={"250px"}
                src={photo && URL.createObjectURL(photo)}
            />
            </div> 
    );
}

export default EmployeeCard