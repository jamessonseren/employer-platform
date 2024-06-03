import NavBar from "@/components/navBar/navBar"
import SideBar from "@/components/Sidebar"
import styles from './dashboard.module.css'
import Footer from "@/components/footer/footer"
import { ReactNode } from "react"
// import BackButton from "@/app/components/backButton/backbutton"

import { FaChevronLeft } from "react-icons/fa6"
import Header from "@/components/header/header"
import Sidebar from "@/components/Sidebar"


interface LayoutProps {
    children: ReactNode
}

const Layout = async ({ children }: LayoutProps) => {

    return (

        <div className={styles.container}>
            <input className={styles.activeSidebar} type="checkbox" id="activeSidebar" />
            <div className="hidden lg:flex min-w-[300px] border-r min-h-screen">
                <SideBar />
            </div>
           
            {/* <div className={styles.menuButton}>
                <label htmlFor="activeSidebar">
                    <FaChevronLeft height={8} width={2} />
                </label>
            </div> */}
            <div className="flex flex-col w-full min-h-screen p-4">
                <Header />
                {/* <BackButton /> */}
                <div className="flex-1 p-4 flex flex-col">
                    {children}
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default Layout