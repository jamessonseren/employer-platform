'use client'

import { ButtonComp } from "@/components/FormsInput/Button/button";
import { Input, MultiSelect } from "@/components/FormsInput/formsInput";
import { useState } from "react";

export const permissions = [
    {
        label: "Vendas",
        value: "sales"
    },
    {
        label: "Finanças",
        value: "finances"
    },
    {
        label: "Marketing",
        value: "marketing"
    },
]
export default function NewTeamMemberForm() {
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);


    const userOptions = permissions.map(permission => ({
        value: permission.value,
        label: permission.label
    }));
    return (
        <section>
            <form className="flex flex-col gap-3">
                <div>
                    <label htmlFor="">Nome *</label>
                    <Input
                        type="text"
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="">Nome de usuário *</label>
                    <Input
                        type="text"
                        name="user_name"
                    />
                </div>
               
                <div>
                    <label htmlFor="">Email *</label>
                    <Input
                        type="text"
                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="">Senha *</label>
                    <Input
                        type="text"
                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="">Função *</label>
                    <MultiSelect 
                        options={userOptions}
                        selectedValues={selectedPermissions}
                        onChange={setSelectedPermissions}
                        searchText="Buscar por permissão"

                    />
                </div>
                <ButtonComp>Criar usuário</ButtonComp>
            </form>
        </section>
    )
}