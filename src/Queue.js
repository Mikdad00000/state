import { useState } from "react";

function Queue() {
    const [serial, setSerial] = useState(0);
    const [name, setName] = useState(0);
    const[people,setPeople]  = useState( [
        "irfan", "rakib", "amir", "sakib"
    ]);
    return (
        <div className="flex flex-col">
            <button type="button" onClick={()=>setSerial(serial+1)} className="bg-red-600 border-2 w-1/12">Next</button>
            { people[serial]}
            <input className="w-4/12 border-2" value={name} onChange={e=>setName(e.target.value)}/>
            <button type="button" onClick={()=>setPeople([...people,name])}>Submit</button>
        </div>
    )
};

export default Queue;
