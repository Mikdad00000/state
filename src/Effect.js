import { useEffect, useState } from "react";

function Effect() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        fetch(`http://api.aladhan.com/v1/timings`)
            .then(respons => respons.json())
            .then(x => setCounter(x.status));
    }, []);
    console.log(counter);
    return (
        <div className="mt-40">Amar
            {counter}
        </div>
    );
}
export default Effect; 
