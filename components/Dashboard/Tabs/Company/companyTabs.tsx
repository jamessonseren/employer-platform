'use client'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"

import CompanyDataForm from "@/components/Forms/Company/companyForm"

enum BusinessStatus {
    pending_approval,
    pending_contract,
    active,
    inactive
}
enum BusinessTypeOptions {
    empregador,
    comercio,
    autonomo_comercio,
    empregador_comercio
}

type CompanyTabsProps = {
    uuid: string;
    branch_info_uuid: string
    fantasy_name: string
    corporate_reason: string | null
    document: string
    classification: string
    colaborators_number: number
    status: BusinessStatus
    phone_1: string
    phone_2: string | null
    email: string
    business_type: BusinessTypeOptions
    address_uuid: string
    line1: string
    line2: string
    line3: string | null
    neighborhood: string
    postal_code: string
    city: string
    state: string
    country: string
    availableData: boolean
}
export function CompanyTabs(companyData: CompanyTabsProps) {


    return (
        <Tabs defaultValue="account" className="w-full grow">
            <TabsList className="grid grow grid-cols-1 ">
                <TabsTrigger value="account">Dados da Empresa</TabsTrigger>
                {/* <TabsTrigger value="password">Endereço</TabsTrigger> */}

            </TabsList>
            <TabsContent value="account" className="grid lg:grid-cols-2 gap-[32px]">

                <CompanyDataForm
                    dataUuid={companyData.uuid}
                    addressUuid={companyData.address_uuid}
                    availableData={companyData.availableData}
                    fantasy_name={companyData.fantasy_name}
                    document={companyData.document}
                    classification={companyData.classification}
                    colaborators_number={companyData.colaborators_number}
                    phone_1={companyData.phone_1}
                    phone_2={companyData.phone_2}
                    line1={companyData.line1}
                    line2={companyData.line2}
                    line3={companyData.line3}
                    neighborhood={companyData.neighborhood}
                    postal_code={companyData.postal_code}
                    city={companyData.city}
                    state={companyData.state}
                    country={companyData.country}


                />
                <Card className="border-hidden w-full flex flex-col items-center">
                    <CardHeader>
                        <CardTitle>Visualize os dados da sua empresa</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Image src="/correctinho/3.png" width={300} height={300} alt="Correctinho" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    Aqui estão os dados gerais da sua empresa
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardContent>

                </Card>

            </TabsContent>

            {/* <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save password</Button>
                    </CardFooter>
                </Card>
            </TabsContent> */}
        </Tabs>
    )
}
