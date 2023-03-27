//@ts-nocheck
import useForm from "./useForm.tsx";
import { Employee, initalStateEmployee } from "../interfaces/Employee.ts";
import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../interfaces/EmployeeContextData.ts";
import EmployeeContextData from "../interfaces/EmployeeContextData.ts";
// import UploadAndDisplayImage from "./UploadAndDisplayImage.tsx";

function EmployeeForm () {  

    const {data, handleChange} = useContext<EmployeeContextData>(EmployeeContext);

    const { name, dateOfBirth, position, email, phoneNumber, photo } = data
    
    return (
        <div>
            <div className="EmployeeForm">
                <form className="EmployeeForm"> 

                <label htmlFor=""> Nombre: </label>
                <input 
                type="text"
                name="name"
                value={name}
                onChange={handleChange} />

                <label htmlFor=""> Fecha de nacimiento: </label>
                <input 
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleChange} />

                <label htmlFor=""> Puesto: </label>
                <select name="position"
                defaultValue={position}
                onChange={handleChange}
                >
                    <option value="Selecciona un puesto... " selected>Select a job title</option>
                    <option value="Gerente">Gerente</option>
                    <option value="Desarrollador jr">Desarrollador jr</option>
                    <option value="Desarrollador sr">Desarrollador sr</option>
                    <option value="Soporte">Soporte</option>
                    <option value="Lider de proyecto">Lider de proyecto</option>
                </select>

                <label htmlFor=""> Email: </label>
                <input 
                type="text"
                name="email"
                value={email}
                onChange={handleChange} />

                <label htmlFor=""> Número de telefono: </label>
                <input 
                type="number" 
                name="phoneNumber" 
                min="1000000000" 
                max="9999999999"
                value={phoneNumber}
                onChange={handleChange}
                />
  
                <label>Selecciona una foto </label>
                <input
                type="file"
                name="photo"
                onChange={handleChange}    />
                </form>

            </div>
            
        </div>

    )

}

export default EmployeeForm