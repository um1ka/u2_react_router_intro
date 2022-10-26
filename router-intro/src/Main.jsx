import { Route, Routes } from 'react-router-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import Home from './Home'
export default function () {

    const userName = "Umika"

    return (
     <div className="main">
        <Routes>
            <Route exact path="/" element ={<Home userName={userName}/>}/>
            <Route exact path="componentA" element={<ComponentA/>}/>
            <Route exact path="componentB" element={<ComponentB/>}/>
        </Routes>
    </div>
    )
}