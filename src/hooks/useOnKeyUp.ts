import { useEffect } from "react";

export function useOnKeyUp(key: string, callback: () => void) {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === key) callback();
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
}
