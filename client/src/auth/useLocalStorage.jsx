/**
 * custom hook to get value from localstorage
 */
import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue, auth) => {

	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = window.localStorage.getItem(keyName);
			
			if (value && Date(value.expiry) < Date.now()) {
				//set that as session
				console.log("Session exists");
				return JSON.parse(value);
			} else {
				window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (err) {
			return defaultValue;
		}
	});
	
	const setValue = (newValue) => {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(newValue));
		} catch (err) {}
			setStoredValue(newValue);
	};

	return [storedValue, setValue];
};