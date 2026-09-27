"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); //milik Loading state
  const [error, setError] = useState(""); //milik Error state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  //Tampilkan pesan jika terjadi error
  if (error) {
    return <p>Error: {error}</p>;
  }

  //Jika masih loading, tampilkan ini dulu
  if (loading) {
    return <p>Loading...</p>;
  }

  //Saat loading selesai, tampilkan datanya
  return (
    <main>
      <h1>USER</h1>
      {users.map((user) => (
        <div key={user.id} className="mb-4">
          <p>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      ))}
    </main>
  );
}
