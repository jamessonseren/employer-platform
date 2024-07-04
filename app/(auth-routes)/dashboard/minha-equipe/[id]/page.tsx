import EditTeamMemberForm from "@/components/Forms/TeamMember/editTeamMemberForm"
import users from '../my-team.json'
import { BusinessUser } from "@/components/Dashboard/Tables/MyTeam/columns"
import { EditTeamMemberTabs } from "@/components/Dashboard/Tabs/MyTeam/editTeamMemberTabs"


export default async function MyTeamMemberDetails({ params }: {params: {
    id: string
}}){

    const data = users.find((user) => user.uuid === params.id) as BusinessUser

    return (
        <main>
            
            <EditTeamMemberTabs {...data}/>
        </main>
    )
}