'use client'

import { ButtonComp } from "@/components/FormsInput/Button/button"
import { DateSelect, Input, MaskedDocumentInput, Select } from "@/components/FormsInput/formsInput"

export default function NewEmployee() {

    const addNew = async () => {
        alert("Adicionou novo")
    }
    return (
        <section className="flex flex-col gap-3">
            <h1 className="font-bold w-full">Novo Colaborador</h1>
            <form action={addNew} className="flex flex-col gap-3">
                <div className="">
                    <label htmlFor="">Nome completo *</label>
                    <Input
                        type="text"
                        name="name"
                    />
                </div>
                <div className="">
                    <label htmlFor="">CPF *</label>
                    <MaskedDocumentInput
                        type="text"
                        name="document"
                        readOnly={false}
                    />
                </div>
                <div className="">
                    <label htmlFor="">Gênero *</label>
                    <Select
                        name="gender"
                    >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </Select>
                </div>
                <div className="">
                    <label htmlFor="">Data de Nascimento *</label>
                    <DateSelect
                        name="date_of_birth"
                    />
                </div>
                <div className="">
                    <label htmlFor="">Estado Civil *</label>
                    <Select
                        name="marital_status"
                    >
                        <option value="">Escolha uma opção</option>
                        <option value="M">Casado</option>
                        <option value="F">Solteiro</option>
                        <option value="F">Viúvo</option>
                    </Select>
                </div>
                <div className="">
                    <label htmlFor="">Cargo *</label>
                    <Input
                        type="text"
                        name="name"
                    />
                </div>
                <div className="">
                    <label htmlFor="">Salário</label>
                    <Input
                        type="text"
                        name="name"
                    />
                </div>
                <ButtonComp>Cadastrar</ButtonComp>
            </form>
        </section>
    )
}