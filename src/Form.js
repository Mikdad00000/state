import { useState } from "react";
function Input({ label, value, setValue,type }) {
    return (
        <div className="flex h-[20%] w-full justify-between m-5 ">
            <label className="text-2xl ">{label}</label>
            <input
                type={type || "text"}
                value={value}
                onChange={e => setValue(e.target.value)}
                className="h-full border w-9/12 "
            />
        </div>)
}

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="h-screen justify-center w-full">
            <div className="flex flex-col w-[50%] justify-center h-full  border shadow-md p-5">
                <Input
                    label="User Name"
                    value={name}
                    setValue={setName}
                />
                <Input
                    label="Email"
                    value={email}
                    setValue={setEmail}
                /><Input
                    label="Phone Number"
                    value={phone}
                    setValue={setPhone}
                /><Input
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    type="password"
                /><p> {name} </p>
                <p> {email} </p>
                <p> {phone} </p>
                <p> {password} </p>
            </div>
        </div>
    )
};
export default Form;
