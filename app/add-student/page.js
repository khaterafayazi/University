"use client";

import { useState } from "react";

export default function AddStudent() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: formData.get("studentId"),
        name: formData.get("name"),
        email: formData.get("email"),
        nationalId: formData.get("nationalId"),
        password: formData.get("password"),
        department: formData.get("department"),
        semester: Number(formData.get("semester")),
      }),
    });

    if (response.ok) {
      setMessage("Student added successfully!");
      event.currentTarget.reset();
    } else {
      setMessage("Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-purple-50 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        
        <h1 className="text-2xl font-bold mb-6">
          Add New Student
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="studentId"
            placeholder="Student ID"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="name"
            placeholder="Student Name"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="nationalId"
            placeholder="National ID"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="department"
            placeholder="Department"
            required
            className="w-full border p-2 rounded"
          />

          <input
            name="semester"
            type="number"
            placeholder="Semester"
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Add Student
          </button>

        </form>

        {message && (
          <p className="mt-4 text-center">
            {message}
          </p>
        )}

      </div>
    </main>
  );
}