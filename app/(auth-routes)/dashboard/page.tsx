import { Button } from "@/components/ui/button"
import { auth } from "../../lib/auth"
import General from "@/components/Dashboard/Graphs/general"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Calendar from "@/components/Dashboard/Graphs/calendar"
import Lines from "@/components/Dashboard/Graphs/lines"
import { TableDemo } from "@/components/Dashboard/Graphs/table"
import { DataTableDemo } from "@/components/Dashboard/Graphs/dataTable"
import {TabsDemo} from "@/components/Dashboard/Tabs/tabs"
import { BenefitsTabs } from "@/components/Dashboard/Tabs/Benefits/benefitsTabs"

export default async function Dashboard() {

    return (
        // <main className="grid gap-[32px]">
        //     <div className="">
        //         <TabsDemo />
        //         {/* <General />
        //         <div className="grid gap-[32px]">
        //             <Calendar />
        //             <Calendar />
        //         </div> */}
        //     </div>
        //     <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] mb-[32px]">
        //         <Lines />
        //         {/* <Card className="overflow-y-scroll">
        //             <CardHeader>
        //                 <CardTitle>Esta semana</CardTitle>
        //                 <CardDescription>Resultados semanais</CardDescription>
        //             </CardHeader>
        //             <div className="px-4">
        //                 <TableDemo />
        //             </div>
        //         </Card> */}
        //         <Card className=" overflow-y-scroll">
        //             <CardHeader>
        //                 <CardTitle>Esta semana</CardTitle>
        //                 <CardDescription>Resultados semanais</CardDescription>
        //             </CardHeader>
        //             <div className="px-4">
        //                 <DataTableDemo />
        //             </div>
        //         </Card>
        //     </div>

        // </main>
        <main>
            {/* <BenefitsTabs /> */}
        </main>
    )
}