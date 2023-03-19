import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage("user", null);
	const navigate = useNavigate();

	// call this function when you want to authenticate the user
	const login = async (data) => {
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


	return <AuthContext.Provider value={authStatus}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};