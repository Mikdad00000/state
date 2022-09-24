import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="h-screen justify-center w-full">
            <div className="flex flex-col w-[50%] justify-center h-full  border shadow-md p-5">
                <div className="flex h-[20%] w-full justify-between m-5 ">
                    <label className="text-2xl ">User Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="h-full border w-9/12 "
                    />
                </div>
                <div className="flex h-[20%] w-full justify-between m-5 ">
                    <label className="text-xl">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="h-full border w-9/12 "
                    />
                </div>
                <div className="flex h-[20%] w-full justify-between m-5 ">
                    <label className="text-xl">Phone Number</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="h-full border w-9/12 "
                    />
                </div>
                <div className="flex h-[20%] w-full justify-between m-5 ">
                    <label className="text-xl">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="h-full border w-9/12 "
                    />
                </div>
                <p> {name} </p>
                <p> {email} </p>
                <p> {phone} </p>
                <p> {password} </p>
            </div>
        </div>

    )
};
export default Form;