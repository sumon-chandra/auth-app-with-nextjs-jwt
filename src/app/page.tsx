import Link from "next/link";
import React from "react";

const PublicPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div>
				<h3 className="text-4xl font-bold pb-4">This is the public page.</h3>
				<Link href="login" className="bg-white rounded-md px-6 py-2 font-semibold text-black w-full">
					Login
				</Link>
			</div>
		</div>
	);
};

export default PublicPage;
