import Image from "next/image";
import { addUser } from "./actions/user.action";


export default function Home() {
  return (
    <>
    <h2>Add New User</h2>
      <form action={addUser} className="max-w-96 mx-auto mt-20 bg-white text-black dark:bg-zinc-900 dark:text-white p-10 font-semibold space-y-3 rounded-lg">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="">First Name</label>
          <input type="text" className="input-design" name="firstname" />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="" className="">Last Name </label>
          <input type="text" className="input-design" name="lastname" />
        </div>
        <div className="flex flex-col gap-2">

          <label htmlFor="" > Email</label>
          <input type="email" className="input-design" name="email" required/>
        </div>
        <div className="flex flex-col gap-2">

          <label htmlFor="" > Password</label>
          <input type="password" className="input-design" name="password" required/>
        </div>
        <input type="submit" value="Register" className="w-full mx-auto mt-4 bg-fuchsia-500 py-2 rounded-sm cursor-pointer outline-0" />

      </form>

    </>
  );
}
