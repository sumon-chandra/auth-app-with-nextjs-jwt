"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/getUser";
import { useRouter } from "next/navigation";

interface UserTypes {
	email: string;
}

const Dashboard = () => {
	const { push } = useRouter();
	const [user, setUser] = useState<UserTypes | null>(null);

	useEffect(() => {
		(async () => {
			const { user, error } = await getUser();
			if (error) {
				push("/");
				return;
			}
			setUser(user);
		})();
	}, [push]);

	if (!user) {
		return (
			<main className="min-h-screen flex flex-col items-center justify-center">
				<p className="font-bold text-xl">Loading...</p>
			</main>
		);
	}

	return (
		<div className="space-y-6">
			<h3 className="text-4xl font-bold">Welcome to the Dashboard</h3>
			<p>Your email: {user?.email}</p>
		</div>
	);
};

export default Dashboard;
