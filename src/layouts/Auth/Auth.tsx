import {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../../includes/api";
import styles from "./Auth.module.css";

interface AuthProps {}

type UserType = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  currentUser: UserType | null;
  setCurrentUser: Dispatch<SetStateAction<null>>;
};

// @ts-ignore
export const AuthContext = createContext<AuthContextType>({});

const Auth: FunctionComponent<AuthProps> = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .get("/api/user")
      .then(({ data }) => {
        setCurrentUser(data);
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className={styles.Auth}>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        {currentUser ? <Outlet /> : null}
      </AuthContext.Provider>
    </div>
  );
};

export default Auth;
