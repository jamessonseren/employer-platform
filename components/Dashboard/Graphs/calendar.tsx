'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"

import { ResponsiveCalendar } from '@nivo/calendar'

type CalendarProps = {
    data: any
}
const MyResponsiveCalendar = (props: CalendarProps) => (
    <ResponsiveCalendar
        data={props.data}
        from="2023-03-01"
        to="2023-07-12"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)

export default function Calendar() {


    function generateDataArray() {
        const data = []

        const startDate = new Date("2023-01-01")
        const endDate = new Date("2023-12-31")

        while (startDate <= endDate){

            const value = Math.floor(Math.random() * 301)
            const formattedDate = startDate.setDate(startDate.getDate() + 1)
            data.push({
                "value": value,
                "day": formattedDate
            })

        }
    return data
    }

    const dataArray = generateDataArray()

    return <Card>
        <CardHeader>
            <CardTitle>Calendário</CardTitle>
            <CardDescription>Resultados deste ano</CardDescription>
        </CardHeader>
        <CardContent className="h-[200px] flex items-center w-full">
            <MyResponsiveCalendar data={dataArray} />
        </CardContent>
    </Card>
}