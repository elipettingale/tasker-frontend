import { useContext } from "react";
import { FormContext } from "../Form";

export default function useFormErrors(name: string) {
  const formErrors = useContext<{ [key: string]: string[] }>(FormContext);
  const hasError = formErrors.hasOwnProperty(name);

  let errorMessage = null;

  if (hasError && formErrors[name].length > 0) {
    errorMessage = formErrors[name][0];
  }

  return [hasError, errorMessage];
}
