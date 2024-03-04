"use client";
import { getUser } from "@/lib/getUser";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

interface DashboardLayoutProps {
	children: ReactNode;
}
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
	return <main className="min-h-screen flex flex-col items-center justify-center">{children}</main>;
};

export default DashboardLayout;
