'use client'

import { ResponsiveBump } from '@nivo/bump'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'

type BumpProps = {
  data: any
}
const MyResponsiveBump = (props: BumpProps) => (
<ResponsiveBump
    data={props.data}
    role=''
    layers={null}
    renderWrapper={false}
    debugMesh={false}
    colors={{ scheme: 'spectral' }}
    lineWidth={3}
    activeLineWidth={6}
    inactiveLineWidth={3}
    inactiveOpacity={0.15}
    pointSize={10}
    activePointSize={16}
    inactivePointSize={0}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={3}
    activePointBorderWidth={3}
    pointBorderColor={{ from: 'serie.color' }}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: -36,
      truncateTickAt: 0,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'ranking',
      legendPosition: 'middle',
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    margin={{ top: 20, right: 60, bottom: 20, left: 20 }}
    axisRight={null}

    // Required properties
    useMesh={true} // or false, depending on your needs
    interpolation="smooth" // or other interpolation methods
    xPadding={0.6} // Adjust as needed
    xOuterPadding={0.8} // Adjust as needed
    yOuterPadding={0.1} // Adjust as needed
    opacity={1} // Adjust as needed
    activeOpacity={1} // Adjust as needed
    startLabel={d => d.id} // Adjust as needed or provide a custom function
    endLabel={d => d.id} // Adjust as needed or provide a custom function
    startLabelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    endLabelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    startLabelPadding={5} // Adjust as needed
    endLabelPadding={5} // Adjust as needed
    inactivePointBorderWidth={0} // Adjust as needed
    enableGridX={false} // or true, depending on your needs
    enableGridY={false} // or true, depending on your needs

    // Missing required properties
    isInteractive={true} // or false, depending on your needs
    defaultActiveSerieIds={[]} // Provide default active series IDs if needed
    lineTooltip={null}// Customize line tooltip if needed
    pointTooltip={null} // Customize point tooltip if needed
    theme={{}} // Define your theme if needed
  />);
export default function General() {
  const data = [
    {
      "id": "Serie 1",
      "data": [
        {
          "x": "2000",
          "y": 2
        },
        {
          "x": "2001",
          "y": 2
        },
        {
          "x": "2002",
          "y": 8
        },
        {
          "x": "2003",
          "y": 12
        },
        {
          "x": "2004",
          "y": 11
        }
      ]
    },
    {
      "id": "Serie 2",
      "data": [
        {
          "x": "2000",
          "y": 3
        },
        {
          "x": "2001",
          "y": 8
        },
        {
          "x": "2002",
          "y": 1
        },
        {
          "x": "2003",
          "y": 9
        },
        {
          "x": "2004",
          "y": 4
        }
      ]
    },
    {
      "id": "Serie 3",
      "data": [
        {
          "x": "2000",
          "y": 1
        },
        {
          "x": "2001",
          "y": 7
        },
        {
          "x": "2002",
          "y": 3
        },
        {
          "x": "2003",
          "y": 7
        },
        {
          "x": "2004",
          "y": 1
        }
      ]
    },
    // {
    //   "id": "Serie 4",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 5
    //     },
    //     {
    //       "x": "2001",
    //       "y": 4
    //     },
    //     {
    //       "x": "2002",
    //       "y": 12
    //     },
    //     {
    //       "x": "2003",
    //       "y": 3
    //     },
    //     {
    //       "x": "2004",
    //       "y": 3
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 5",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 6
    //     },
    //     {
    //       "x": "2001",
    //       "y": 3
    //     },
    //     {
    //       "x": "2002",
    //       "y": 5
    //     },
    //     {
    //       "x": "2003",
    //       "y": 4
    //     },
    //     {
    //       "x": "2004",
    //       "y": 8
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 6",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 7
    //     },
    //     {
    //       "x": "2001",
    //       "y": 5
    //     },
    //     {
    //       "x": "2002",
    //       "y": 7
    //     },
    //     {
    //       "x": "2003",
    //       "y": 11
    //     },
    //     {
    //       "x": "2004",
    //       "y": 12
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 7",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 9
    //     },
    //     {
    //       "x": "2001",
    //       "y": 6
    //     },
    //     {
    //       "x": "2002",
    //       "y": 2
    //     },
    //     {
    //       "x": "2003",
    //       "y": 2
    //     },
    //     {
    //       "x": "2004",
    //       "y": 2
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 8",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 4
    //     },
    //     {
    //       "x": "2001",
    //       "y": 11
    //     },
    //     {
    //       "x": "2002",
    //       "y": 10
    //     },
    //     {
    //       "x": "2003",
    //       "y": 8
    //     },
    //     {
    //       "x": "2004",
    //       "y": 7
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 9",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 10
    //     },
    //     {
    //       "x": "2001",
    //       "y": 9
    //     },
    //     {
    //       "x": "2002",
    //       "y": 11
    //     },
    //     {
    //       "x": "2003",
    //       "y": 1
    //     },
    //     {
    //       "x": "2004",
    //       "y": 9
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 10",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 11
    //     },
    //     {
    //       "x": "2001",
    //       "y": 10
    //     },
    //     {
    //       "x": "2002",
    //       "y": 6
    //     },
    //     {
    //       "x": "2003",
    //       "y": 5
    //     },
    //     {
    //       "x": "2004",
    //       "y": 10
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 11",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 12
    //     },
    //     {
    //       "x": "2001",
    //       "y": 12
    //     },
    //     {
    //       "x": "2002",
    //       "y": 9
    //     },
    //     {
    //       "x": "2003",
    //       "y": 6
    //     },
    //     {
    //       "x": "2004",
    //       "y": 5
    //     }
    //   ]
    // },
    // {
    //   "id": "Serie 12",
    //   "data": [
    //     {
    //       "x": "2000",
    //       "y": 8
    //     },
    //     {
    //       "x": "2001",
    //       "y": 1
    //     },
    //     {
    //       "x": "2002",
    //       "y": 4
    //     },
    //     {
    //       "x": "2003",
    //       "y": 10
    //     },
    //     {
    //       "x": "2004",
    //       "y": 6
    //     }
    //   ]
    // }
  ]
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Esta semana</CardTitle>
        <CardDescription>Resultados semanais</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4 h-[400px]' >
        <MyResponsiveBump data={data} />
      </CardContent>
    </Card>
  )
}