import EditGroup from "@/components/groups/edit-group-form"
import { Groups } from "@/components/Dashboard/Tables/Groups/columns"

const data:Groups[] = [
    {
        uuid: '1',
        benefit:'',
        name: 'Nível 1',
        value: 1500,
        created_at: '2024-06-26T10:42:45'
    },
    {
        uuid: '2',
        benefit:'',
        name: 'Nível 2',
        value: 950,
        created_at: '2024-06-26T10:42:45'
    },
    {
        uuid: '3',
        benefit:'',
        name: 'Nível 3',
        value: 500,
        created_at: '2024-06-26T10:42:45'
    },
    {
        uuid: '4',
        benefit:'',
        name: 'Nível 4',
        value: 200,
        created_at: '2024-06-26T10:42:45'
    }
]
export default async function GroupDetails({ params }: {
    params: {
        id: string
    }
}) {

    const findGroup = data.find((group) => group.uuid === params.id)
    return (
        <>
            {findGroup ?

                <EditGroup {...findGroup} />

                : 'Nenhum grupo encontrado'}
        </>
    )
}