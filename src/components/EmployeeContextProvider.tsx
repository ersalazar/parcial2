//@ts-nocheck
import EmployeeForm from './EmployeeForm.tsx';
import EmployeeCard from './EmployeeCard.tsx';
import { initalStateEmployee } from '../interfaces/Employee.ts';
import useForm from './useForm.tsx';
import EmployeeContext from '../interfaces/EmployeeContextData.ts';


function EmployeeContextProvider() {

  const [data, handleChange] = useForm<EmployeeForm>(initalStateEmployee);

  const contextData : EmployeeContextData = {
    data, 
    handleChange,
  }

  return (
    <div>
      <EmployeeContext.Provider value = {contextData}>
      <EmployeeForm />
      <EmployeeCard />
      </EmployeeContext.Provider>
    </div>
  );
}


export default EmployeeContextProvider;
