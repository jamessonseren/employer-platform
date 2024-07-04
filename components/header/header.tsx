'use client'

import { BellIcon, Building2, HandHelping, LogOut, Settings, User } from "lucide-react";
import { CommandMenu } from "../command/command";
import { Button } from "../ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import Link from "next/link";
import LogOutButton from "./logOutButton/logOutButton";

type NotificationsProps = {
    text: string,
    date: string,
    read: boolean
}
export default function Header() {
    const [notifications, setNotifications] = useState<NotificationsProps[]>([
        {
            text: "This is a notification",
            date: "02-01-2021",
            read: true
        },
        {
            text: "This is other notification",
            date: "02-01-2021",
            read: false
        },
    ])

    return (
        <div className="grid grid-cols-2 gap-4 border-b pb-2">

            <div></div>

            <div className="flex items-center justify-end gap-4">

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="relative" >
                            <div className={`absolute -top-2 -right-2 h-3 w-3 rounded-full my-1 ${notifications.find((item) => item.read === true) ? 'bg-red-500' : 'bg-green-500'}`}>
                            </div>
                            <BellIcon className="h-4 w-4" />

                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {notifications.map((item, index) =>
                            <DropdownMenuItem key={index} className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                                <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-green-500' : 'bg-red-500'}`}>
                                </div>
                                <p>{item.text}</p>

                            </DropdownMenuItem>)}
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger>

                        <Settings />


                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="align=end">
                        <Link href="/dashboard/settings/profile">
                            <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                                <User className="size-4" />
                                <p>Perfil</p>
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/dashboard/company">
                            <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                                <Building2 className="size-4" />
                                <p>Minha empresa</p>
                            </DropdownMenuItem>
                        </Link>
                        <Link href="/dashboard/suporte">
                            <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                                <HandHelping className="size-4" />
                                <p>Suporte</p>
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2">
                            <LogOutButton />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}