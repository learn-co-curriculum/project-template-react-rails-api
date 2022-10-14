import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import YogaTutorial from './YogaTutorial';
function YogaTutorials (){

  onst [yogatutorials, setYogaTutorails] = useState([])
  useEffect(() => {
    const getYogaTutorials = async () => {
    const YogaTutorials = await fetchYogaTutorials()
    setYogaTutorails(YogaTutorials)
    }
    getYogaTutorials()
}, [])

const fetchYogaTutorials = async () => {
  const res = await fetch('/yoga')
  const data = await res.json()
  return data
}

<Route path='/'
exact
render={(props) => (
<>
{showAddConst && <AddConstituency  onAdd={addConstituency} onAddConst={() => setShowAddConst(!showAddConst)} showAddConst={showAddConst} />}

{constituencies.length > 0 ? (
{yogatutorials.map((tutorial, index) => (
        <YogaTutorial key={index} constituency={constituency}   />
      ))}

) : (
  'No constituency records found'
)}
</>

});
export default YogaTutorials;
