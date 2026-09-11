"use server"
import { revalidatePath } from "next/cache";
export async function addUser(formData : FormData ){

  const endpoid = "http://localhost:5050/users"

   const firstname = formData.get("firstname");
   const lastname = formData.get("lastname");
   const email = formData.get("email");
   const password = formData.get("password");

    await fetch(endpoid,{
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({firstname, lastname, email, password})
    });

    revalidatePath("/")
}

