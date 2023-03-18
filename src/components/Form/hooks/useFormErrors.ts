import { useContext } from "react";
import { FormContext } from "../Form";

export default function useFormErrors(name: string) {
  const formErrors = useContext<{ [key: string]: string[] }>(FormContext);
  const parsedName = name.replaceAll("[", ".").replaceAll("]", "");
  const hasError = formErrors.hasOwnProperty(parsedName);

  let errorMessage = null;

  if (hasError && formErrors[parsedName].length > 0) {
    errorMessage = formErrors[parsedName][0];
  }

  return [hasError, errorMessage];
}
