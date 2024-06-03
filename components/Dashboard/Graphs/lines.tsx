'use client'

import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: any) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
export default function Lines() {

    const data = [
        {
          "id": "japan",
          "color": "hsl(263, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 40
            },
            {
              "x": "helicopter",
              "y": 55
            },
            {
              "x": "boat",
              "y": 282
            },
            {
              "x": "train",
              "y": 107
            },
            {
              "x": "subway",
              "y": 177
            },
            {
              "x": "bus",
              "y": 150
            },
            {
              "x": "car",
              "y": 115
            },
            {
              "x": "moto",
              "y": 131
            },
            {
              "x": "bicycle",
              "y": 206
            },
            {
              "x": "horse",
              "y": 158
            },
            {
              "x": "skateboard",
              "y": 131
            },
            {
              "x": "others",
              "y": 39
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(311, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 35
            },
            {
              "x": "helicopter",
              "y": 237
            },
            {
              "x": "boat",
              "y": 42
            },
            {
              "x": "train",
              "y": 258
            },
            {
              "x": "subway",
              "y": 27
            },
            {
              "x": "bus",
              "y": 244
            },
            {
              "x": "car",
              "y": 128
            },
            {
              "x": "moto",
              "y": 295
            },
            {
              "x": "bicycle",
              "y": 115
            },
            {
              "x": "horse",
              "y": 259
            },
            {
              "x": "skateboard",
              "y": 260
            },
            {
              "x": "others",
              "y": 9
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(229, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 88
            },
            {
              "x": "helicopter",
              "y": 161
            },
            {
              "x": "boat",
              "y": 13
            },
            {
              "x": "train",
              "y": 111
            },
            {
              "x": "subway",
              "y": 155
            },
            {
              "x": "bus",
              "y": 222
            },
            {
              "x": "car",
              "y": 221
            },
            {
              "x": "moto",
              "y": 213
            },
            {
              "x": "bicycle",
              "y": 207
            },
            {
              "x": "horse",
              "y": 53
            },
            {
              "x": "skateboard",
              "y": 233
            },
            {
              "x": "others",
              "y": 49
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(168, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 23
            },
            {
              "x": "helicopter",
              "y": 87
            },
            {
              "x": "boat",
              "y": 125
            },
            {
              "x": "train",
              "y": 44
            },
            {
              "x": "subway",
              "y": 41
            },
            {
              "x": "bus",
              "y": 277
            },
            {
              "x": "car",
              "y": 251
            },
            {
              "x": "moto",
              "y": 13
            },
            {
              "x": "bicycle",
              "y": 17
            },
            {
              "x": "horse",
              "y": 87
            },
            {
              "x": "skateboard",
              "y": 122
            },
            {
              "x": "others",
              "y": 241
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(94, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 198
            },
            {
              "x": "helicopter",
              "y": 140
            },
            {
              "x": "boat",
              "y": 64
            },
            {
              "x": "train",
              "y": 259
            },
            {
              "x": "subway",
              "y": 32
            },
            {
              "x": "bus",
              "y": 255
            },
            {
              "x": "car",
              "y": 246
            },
            {
              "x": "moto",
              "y": 239
            },
            {
              "x": "bicycle",
              "y": 270
            },
            {
              "x": "horse",
              "y": 139
            },
            {
              "x": "skateboard",
              "y": 85
            },
            {
              "x": "others",
              "y": 239
            }
          ]
        }
      ]

    return <Card className='w-full h-[300px]'>
        <CardHeader>
            <CardTitle>Esta semana</CardTitle>
            <CardDescription>Resultados semanais</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4 h-full' >
            <MyResponsiveLine data={data} />
        </CardContent>
    </Card>
}