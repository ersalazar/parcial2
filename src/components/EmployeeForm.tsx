//@ts-nocheck
import { useContext } from "react";
import EmployeeContext from "../interfaces/EmployeeContextData.ts";
import EmployeeContextData from "../interfaces/EmployeeContextData.ts";
import useErrorHandle from "./useFormError.tsx";
import '../styles/Form.css'
// import UploadAndDisplayImage from "./UploadAndDisplayImage.tsx";

function EmployeeForm () {  

    const {data, handleChange} = useContext<EmployeeContextData>(EmployeeContext);

    const { name, dateOfBirth, position, email, phoneNumber, photo } = data

    const { errorState, handleErrorChange } = useErrorHandle(
        {
          name: "",
          email: "",
          phoneNumber: 0,
        },
        {
          email: (value: string) =>
            value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? "Correo electrónico inválido"
              : undefined,
          phoneNumber: (value: string) =>
            value && !/^[0-9]{10}$/.test(value) ? "Número de teléfono debe tener 10 dígitos" : undefined,
            name: (value: string) => {
                    if (value.length < 2 || value.length > 40) {
                        return "El nombre debe tener más de 1 letra y menos de 40.";
                    }
                    return undefined;
                },
        }
    );
    
    return (
            <div>
                <div className="EmployeeForm">
                    <form className="EmployeeForm"> 

                    <label htmlFor=""> Nombre: </label>
                    <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                    />
                    {errorState.name && <span style={{ color: "red" }}>{errorState.name}</span>}

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
                    onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                    />
                    {errorState.email && <span style={{ color: "red" }}>{errorState.email}</span>}

                    <label htmlFor=""> Número de telefono: </label>
                    <input 
                    type="number" 
                    name="phoneNumber" 
                    value={phoneNumber}
                    onChange={(e) => {
                        handleChange(e);
                        handleErrorChange(e);
                      }}
                    />
                    {errorState.phoneNumber && <span style={{ color: "red" }}>{errorState.phoneNumber}</span>}
      
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