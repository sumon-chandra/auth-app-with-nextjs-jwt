"use client";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const LoginPage = () => {
	const { push } = useRouter();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const payload = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value,
		};
		try {
			const { data } = await axios.post("/api/auth/login", payload);
			console.log({ data });
			push("/dashboard");
		} catch (e) {
			const error = e as AxiosError;
			console.log({ error });

			alert(error.message);
		}
	};
	return (
		<main className="flex items-center justify-center min-h-screen text-black">
			<div className="space-y-6 p-6 rounded-lg w-[400px] bg-slate-100">
				<header className="text-xl font-bold text-center border-b-2">Login</header>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email" className="font-semibold text-lg">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							className="w-full border p-2 border-black rounded-md"
						/>
					</div>
					<div>
						<label htmlFor="password" className="font-semibold text-lg">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							className="w-full border p-2 border-black rounded-md"
						/>
					</div>
					<button className="bg-black text-gray-300 font-bold w-full py-2 rounded-md">Login</button>
				</form>
				<div className="text-sm">
					<span>New to here? </span>
					<Link href="/register" className="underline">
						register please
					</Link>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
