'use client'

import SideBar from "@/components/Sidebar"
import styles from './dashboard.module.css'
import Footer from "@/components/footer/footer"
import { ReactNode, useEffect, useState } from "react"
// import BackButton from "@/app/components/backButton/backbutton"

import { FaChevronLeft } from "react-icons/fa6"
import Header from "@/components/header/header"
import Sidebar from "@/components/Sidebar"
import BackButton from "@/components/backButton/backbutton"


interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

     // Função para fechar o menu ao clicar fora
     const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    // Efeito para adicionar o listener de clique no documento
    useEffect(() => {
        // Adiciona o listener de clique no documento
        document.addEventListener('click', closeMenu);

        // Remove o listener de clique ao desmontar o componente
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [menuOpen]);

    return (

        <div className={styles.container}>
             <input
                className={`${styles.activeSidebar} bg-soft`}
                type="checkbox"
                id="activeSidebar"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
            />
            <div className={styles.menu}>
                <SideBar />
            </div>

            <label htmlFor="activeSidebar" className={`${styles.menuButton} bg-soft`}>
                <FaChevronLeft height={5} width={2} />
            </label>

            <div className="flex flex-col w-full min-h-screen p-4">
                <Header />
                <BackButton />
                <div className="flex-1 p-4 flex flex-col">
                    {children}
                </div>
                <BackButton />
                <Footer />
            </div>

        </div>
    )
}

export default Layout