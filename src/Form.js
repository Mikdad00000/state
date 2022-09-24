import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="flex flex-col justify-center h-full">
            <div className="flex h-full ">
                <label className="text-xl">User Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="h-[75%] border"
                />
            </div>
            <div className="flex h-full ">
                <label className="text-xl">Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="h-[75%] border"
                />
            </div>
            <div className="flex h-full ">
                <label className="text-xl">Phone Number</label>
                <input
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="h-[75%] border"
                />
            </div>
            <div className="flex h-full ">
                <label className="text-xl">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="h-[75%] border"
                />
            </div>
            <p> {name} </p>
            <p> {email} </p>
            <p> {phone} </p>
            <p> {password} </p>
        </div>
    )
};
export default Form;