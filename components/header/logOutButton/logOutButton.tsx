'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import styles from './logOutButton.module.css'
import { LogOut } from "lucide-react"

export default function LogOutButton() {
    const router = useRouter()

    async function logOut() {
        await signOut({
            redirect: false
        })

        router.replace('/')
    }
    return (
        <button className={styles.logout} onClick={logOut}>
            <LogOut className="size-4" />
            Sair
        </button>
    )
}