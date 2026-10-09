"use client";

import { useState } from "react";
import {useRouter} from "next/navigation";

export default function Login(){
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(event){
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);
        const response = await fetch("/api/student/login",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
            studentId: formData.get("studentId"),
            password: formData.get("password"),
        }),
     });

        if (!response.ok) {
        setError("شمارهٔ محصل یا پسورد اشتباه است.");
        return;
        }

        router.push("/student/dashboard");
    }
    return(
        <main className="min-h-screen flex items-center justify-center bg-purple-50">
            <div className="p-8 rounded-2xl bg-white border border-yellow-300 shadow-lg w-full max-w-md">
                <img src="/images/JSXU5140.JPG" width={50} height={50} className="rounded-full mx-auto mb-4"></img>
            <h1 className="text-center text-2xl font-bold">Student Portal</h1>
            <p className="text-center text-gray-600 mt-2">Welcome back!Please login to access your student dashboard</p>
             <form onSubmit={handleSubmit}>
              {error && <p className="mt-3 text-red-600">{error}</p>} 
              <div className="flex flex-col">
            <label htmlFor="student-id">Student ID:</label>
            <input className="rounded-lg w-full border border-gray-300 px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-purple-300" required id="student-id" name="studentId" type="text" placeholder="Student ID" />
            </div> 
            <div className="flex flex-col mt-3">
            <label htmlFor="password">Password:</label>
            <input className="rounded-lg w-full border border-gray-300 px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-purple-300" required id="password" name="password" type="password" placeholder="Password" />
            </div> 
            <div className="text-center mt-6">
            <button type="submit" className=" w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded">Login</button>
            </div>
            </form>
            </div>
        </main>
    )
}