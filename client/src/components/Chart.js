import { 
    Tooltip,
    LineChart, 
    Line, 
    CartesianGrid, 
    XAxis, 
    YAxis,
    Legend 
} from 'recharts';
import {useEffect, useState} from "react"

function Chart ({values2, keys, symbol}) {
    const [data, setData] = useState([])
    // console.log(values2)
    // console.log(keys)
    
    
    useEffect(() => {
        setData([
            {
              date: keys[6],
              close: values2[6]["4. close"],
              
            }, 
            {
              date: keys[5],
              close: values2[5]["4. close"],
              
            },
            {
              date: keys[4],
              close: values2[4]["4. close"],
              
            },
            {
              date: keys[3],
              close: values2[3]["4. close"],
              
            },
            {
              date: keys[2],
              close: values2[2]["4. close"],
              
            },
            {
              date: keys[1],
              close: values2[1]["4. close"],
              
            },
            {
              date: keys[0],
              close: values2[0]["4. close"],
              
            }
          ])

    }, [])

    

    const renderLineChart = (
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <XAxis dataKey="date" />
          <YAxis dataKey="close"/>
          <Tooltip />
          <Legend />
        </LineChart>
      )

      return (
        <div>
            {symbol}
          {renderLineChart}
        </div>
      )
    }

    export default Chart