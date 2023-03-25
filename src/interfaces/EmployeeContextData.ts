//@ts-nocheck
import { ChangeEventHandler, createContext} from "react"
import { Employee, initalStateEmployee } from "./Employee.ts"


export interface EmployeeContextData{
    handleChange: ChangeEventHandler<HTMLInputElement> | null
    data : Employee
}

const contextData = {
    data: initalStateEmployee,
    handleChange : null,
}

const EmployeeContext = createContext<EmployeeContextData>(contextData)

export default EmployeeContext