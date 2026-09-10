import Image from "next/image";

export default function Home() {
  return (
    <>
      <form action="" className="max-w-96 mx-auto mt-20 bg-white text-black dark:bg-zinc-900 dark:text-white p-10 font-semibold space-y-3 rounded-lg">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="">First Name</label>
          <input type="text" className="input-design" />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="" className="">Last Name </label>
          <input type="text" className="input-design" />
        </div>
        <div className="flex flex-col gap-2">

          <label htmlFor="" > Email</label>
          <input type="email" className="input-design" />
        </div>
        <div className="flex flex-col gap-2">

          <label htmlFor="" > Password</label>
          <input type="password" className="input-design"/>
        </div>
        <input type="button" value="Register" className="w-full mx-auto mt-4 bg-fuchsia-500 py-2 rounded-sm cursor-pointer " />

      </form>

    </>
  );
}
