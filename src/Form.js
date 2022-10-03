import { useState } from "react";
function Input({ label, value, setValue, type }) {
  return (
    <div className="flex h-[5%] w-full justify-between m-5 ">
      <label className="text-2xl ">{label}</label>
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-full border w-9/12 "
      />
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const submit = () => {
    const user = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    setUsers([...users, user]);
  };
  return (
    <div className="h-screen justify-center w-full">
      <div className="flex flex-col w-[50%] justify-center  border shadow-md p-5">
        <Input label="User Name" value={name} setValue={setName} />
        <Input label="Email" value={email} setValue={setEmail} />
        <Input label="Phone Number" value={phone} setValue={setPhone} />
        <Input
          label="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <button type="button" onClick={submit} className="border bg-green-500">
          Submit
        </button>

        <p> {JSON.stringify(users)} </p>
      </div>
    </div>
  );
}
export default Form;
