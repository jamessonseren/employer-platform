'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { TableDemo } from "../Graphs/table"
import { DataTableDemo } from "../Graphs/dataTable"

export function TabsDemo() {
    return (
        <Tabs defaultValue="account" className="w-full grow">
            <TabsList className="grid grow grid-cols-2 ">
                <TabsTrigger value="account">Gráficos</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] ">
                <Card className="overflow-y-scroll w-fit">
                    <CardHeader className="flex flex-row justify-between w-full">
                        <div className="">
                            <CardTitle>Esta semana</CardTitle>
                            <CardDescription>Últimas transações</CardDescription>
                        </div>
                        <div>
                            <Button variant="link">Ver mais</Button>

                        </div>
                    </CardHeader>
                    <div className="px-4">
                        <TableDemo />
                    </div>
                </Card>
                <Card className=" overflow-y-scroll w-fit">
                    <CardHeader>
                        <CardTitle>Esta semana</CardTitle>
                        <CardDescription>Resultados semanais</CardDescription>
                    </CardHeader>
                    <div className="px-4">
                        <DataTableDemo />
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="password">
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
            </TabsContent>
        </Tabs>
    )
}
