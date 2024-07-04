import EditGroup from "@/components/groups/edit-group-form"
import { data } from "../page"

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