'use client'

import { ButtonComp } from "@/components/FormsInput/Button/button";
import { Input, MultiSelect } from "@/components/FormsInput/formsInput";
import { useState } from "react";
import { permissions as allPermissions } from "./newTeamMemberForm";
import { BusinessUser } from "@/components/Dashboard/Tables/MyTeam/columns";


export default function EditTeamMemberForm(props: BusinessUser) {
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>(props.permissions);

    const userOptions = allPermissions.map(permission => ({
        value: permission.value,
        label: permission.label
    }));

    return (
        <section>
            <form className="flex flex-col gap-3">
                <div>
                    <label htmlFor="name">Nome</label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={props.user_name}
                    />
                </div>
                <div>
                    <label htmlFor="user_name">Nome de usuário</label>
                    <Input
                        type="text"
                        id="user_name"
                        name="user_name"
                        defaultValue={props.user_name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input
                        type="text"
                        id="email"
                        name="email"
                        defaultValue={props.email}
                    />
                </div>
                <div>
                    <label htmlFor="permissions">Função</label>
                    <MultiSelect 
                        id="permissions"
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