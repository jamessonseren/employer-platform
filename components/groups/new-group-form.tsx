'use client'

import React, { useState, useContext } from "react";
import CurrencyInput from "react-currency-input-field";
import { Input, Select } from "@/components/FormsInput/formsInput";
import { MultiSelect } from "@/components/FormsInput/formsInput";
import { EmployeeContext } from "@/app/contexts/employeeContexts";
import { ButtonComp } from "../FormsInput/Button/button";

export default function NewGroup() {
    const { employees } = useContext(EmployeeContext); // Use o contexto para obter os employees
    const [value, setValue] = useState<string | undefined>("");
    const [groupName, setGroupName] = useState<string>("");
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const [errors, setErrors] = useState<{ groupName?: string, value?: string }>({});

    const validateForm = () => {
        const newErrors: { groupName?: string, value?: string } = {};
        if (!groupName) newErrors.groupName = "Nome do grupo é obrigatório.";
        if (!value) newErrors.value = "Valor é obrigatório.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateForm()) return;

        const groupData = {
            name: groupName,
            value: parseFloat(value!.replace(/[R$.\s]/g, '').replace(',', '.')),
            users: selectedUsers
        };

        // Enviar dados para o servidor
        try {
            const response = await fetch('/api/groups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(groupData)
            });

            if (!response.ok) {
                throw new Error('Erro ao criar grupo');
            }

            alert('Grupo criado com sucesso!');
            setGroupName("");
            setValue("");
            setSelectedUsers([]);
        } catch (error) {
            console.error(error);
            alert('Erro ao criar grupo');
        }
    };
    // Filtre os employees para excluir aqueles que já possuem um grupo definido
    //const filteredEmployees = employees.filter(employee => employee.status !== 'pending');

    // Mapeie os employees para o formato esperado pelo MultiSelect
    const userOptions = employees.map(employee => ({
        value: employee.uuid,
        label: employee.full_name
    }));

    return (
        <section>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                    <label htmlFor="">Selecione o benefício</label>
                    <Select>
                        <option value=''>Escola uma opção</option>
                        <option>Beneficio 1</option>
                        <option>Beneficio 2</option>
                        <option>Beneficio 3</option>

                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="groupName">Nome do grupo</label>
                    <Input
                        type="text"
                        id="groupName"
                        name="name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                    {errors.groupName && <span className="text-red-500">{errors.groupName}</span>}
                </div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <CurrencyInput
                        id="value"
                        name="value"
                        placeholder="Digite o valor que os colaboradores deste grupo receberão"
                        value={value}
                        decimalsLimit={2}
                        decimalSeparator=","
                        groupSeparator="."
                        prefix="R$ "
                        onValueChange={(value) => setValue(value)}
                        customInput={Input}
                    />
                    {errors.value && <span className="text-red-500">{errors.value}</span>}
                </div>
                <div>
                    <label htmlFor="users">Usuários</label>
                    <MultiSelect
                        options={userOptions}
                        selectedValues={selectedUsers}
                        onChange={setSelectedUsers}
                        searchText="Buscar por nome"
                    />
                </div>
                <ButtonComp>Criar Grupo</ButtonComp>
            </form>
        </section>
    );
}