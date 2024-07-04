'use client'

import { ReactNode } from "react";
import { EmployeesProvider } from "../contexts/employeeContexts";

interface PrivateLayoutProps {
    children: ReactNode
}


export default function PrivateLayout({ children }: PrivateLayoutProps) {

    return <EmployeesProvider>
        {children}
    </EmployeesProvider>
}