import { createContext, useContext, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { useCheckAuth } from "./useCheckAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null);

	const [auth, loading, checkAuth] = useCheckAuth();
	const navigate = useNavigate();

	// call this function when you want to authenticate the user
	const login = async (data) => {
		console.log(data)
		setUser(data);
		navigate("/index");
	};

	// call this function to sign out logged in user
	const logout = () => {
		setUser(null);
		navigate("/login", { replace: true });
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
		}
	}, [loading]);

	return <AuthContext.Provider value={authStatus}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};