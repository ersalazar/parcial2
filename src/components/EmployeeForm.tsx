//@ts-nocheck
import useForm from "./useForm.tsx";
import { Employee, initalStateEmployee } from "../interfaces/Employee.ts";
// import UploadAndDisplayImage from "./UploadAndDisplayImage.tsx";




function EmployeeForm () {

    const [data, handleChange] = useForm<Employee>(initalStateEmployee)

    const { name, dateOfBirth, position, email, phoneNumer, photo } = data
  
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
                type="text"
                name="phoneNumer"
                value={phoneNumer}
                onChange={handleChange} />

                {/* <label htmlFor=""> Selecciona una foto... </label>
                <input 
                type="file" 
                name="photo"
                value={} 
                onChange={handleChange}
                accept="image/png, image/jpeg" /> */}

                <input
                type="file"
                name="photo"
                onChange={handleChange}    />
                </form>
            </div>

            <h4>
                Nombre: {name}
                <br />
                {/* Fecha de naciemiento: {dateOfBirth} */}
                <br />
                Puesto: {position}
                <br />
                Email: {email}
                <br />
                Teléfono: {phoneNumer}
                <br />
                {/* Fecha de naciemiento: {`${dateOfBirth.gatDate()}/${dateOfBirth.gatMonth() + 1}/${dateOfBirth.gatFullYear()}`} */}
                Fecha de naciemiento: {dateOfBirth}
                <br />
                Foto: {photo}
            </h4>
            <img
                alt="not found"
                width={"250px"}
                src={photo && URL.createObjectURL(photo)}
            /> 
            
        </div>

    )

}

export default EmployeeForm