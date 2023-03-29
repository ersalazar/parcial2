//@ts-nocheck
import EmployeeForm from './EmployeeForm.tsx';
import EmployeeCard from './EmployeeCard.tsx';
import { initalStateEmployee } from '../interfaces/Employee.ts';
import useForm from './useForm.tsx';
import EmployeeContext from '../interfaces/EmployeeContextData.ts';
import '../styles/father.css'


function EmployeeContextProvider() {

  const [data, handleChange] = useForm<EmployeeForm>(initalStateEmployee);

  const contextData : EmployeeContextData = {
    data, 
    handleChange,
  }

  return (
    <div>
      <EmployeeContext.Provider value = {contextData}>
        <div className="father">
          <EmployeeForm />
          <EmployeeCard />
        </div>
      </EmployeeContext.Provider>
    </div>
  );
}


export default EmployeeContextProvider;
