
import { columns } from '@/components/Dashboard/Tables/MyTeam/columns'
import users from './my-team.json'
import { DataTable } from "@/components/Dashboard/Tables/MyTeam/data-table"


export default function MyTeam(){
    const data = users

    return(
        <main>
            <DataTable columns={columns} data={data}/>
        </main>
    )
}