"use client";
import axios from "axios";
import Link from "next/link";
import { SyntheticEvent } from "react";

export default function RegisterPage() {
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			email: { value: string };
			password: { value: string };
		};
		const email = target.email.value;
		const password = target.password.value;

		try {
			axios.post("/api/register", { email, password }).then((response) => {
				const data = response.data;
				console.log(data);
			});
		} catch (error: any) {
			console.log("Something went wrong!!");
		}
	};

	return (
		<main className="flex items-center justify-center min-h-screen text-black">
			<div className="space-y-6 p-6 rounded-lg w-[400px] bg-slate-100">
				<header className="text-xl font-bold text-center border-b-2">Register</header>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email" className="font-semibold text-lg">
							Email
						</label>
						<input type="email" name="" id="email" className="w-full border p-2 border-black rounded-md" />
					</div>
					<div>
						<label htmlFor="password" className="font-semibold text-lg">
							Password
						</label>
						<input type="password" name="" id="password" className="w-full border p-2 border-black rounded-md" />
					</div>
					<button type="submit" className="bg-black text-white font-bold w-full py-2 rounded-md">
						Register
					</button>
				</form>
				<div className="text-sm">
					<span>New to here? </span>
					<Link href="login" className="underline">
						login please
					</Link>
				</div>
			</div>
		</main>
	);
}
