//@ts-nocheck
import { useState } from "react";
import { ErrorState, ValidationError } from "../interfaces/Errors.ts";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const useErrorHandle = (initialState: any, validations: { [key: string]: ValidationError }) => {
  const [errorState, setErrorState] = useState<ErrorState>({});

  const handleErrorChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    const errorMessage = validations[name] ? validations[name](value) : undefined;

    setErrorState({ ...errorState, [name]: errorMessage || "" });
  };

  return {
    errorState,
    handleErrorChange,
  };
};

export default useErrorHandle;

