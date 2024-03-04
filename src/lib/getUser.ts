import axios, { AxiosError } from "axios";

export async function getUser() {
	try {
		const { data } = await axios.get("/api/auth/user");
		return {
			user: data,
			error: null,
		};
	} catch (e) {
		const error = e as AxiosError;
		console.log(error.message);
		return {
			user: null,
			error: error,
		};
	}
}
