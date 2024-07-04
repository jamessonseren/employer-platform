import { fetchSingleEmployee } from "@/app/lib/actions"
import { EmployeeTabs } from "@/components/Dashboard/Tabs/Employee/employeeTabs"
import { EmployeeResponse } from "@/utils/types/employee"


export default async function EmployeeDetails({ params }: {params: {
    id: string
}}){
    
    const result = await fetchSingleEmployee(params.id)

    const data: EmployeeResponse = result.data
    return(
        <main>
            <EmployeeTabs  {...data}/>
        </main>
    )
}