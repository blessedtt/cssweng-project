import { createContext, useContext, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { useCheckAuth } from "./useCheckAuth";

import { loginUserAPI } from "../api/auth/loginUserAPI";
import { logoutUserAPI } from "../api/auth/logoutUserAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null);

	const [auth, loading, checkAuth] = useCheckAuth();
	const navigate = useNavigate();

	// call this function when you want to authenticate the user
	const login = async (data) => {
		try{
			const result = await loginUserAPI(data);
			setUser(result);
			console.log(result);
		} catch(err){
			throw err;
		}

	};

	// call this function to sign out logged in user
	const logout = () => {
		logoutUserAPI().then((result) => {
			setUser(null);
			navigate("/auth/login");
		})
	};

	const authStatus = useMemo(
		() => ({ user, login, logout, }),
		[user]
	);

	//check user is authenticated on the server using user
	//if they are, setUser to match returned data on user variable from useCheckAuth
	useEffect(() => {
		if (!loading){
			if (user === null && auth !== null){
				setUser(auth);
			}

			else if (user !== null && auth === null){
				setUser(null);
			}
			
		}
	}, [loading]);

	return <AuthContext.Provider value={authStatus}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};