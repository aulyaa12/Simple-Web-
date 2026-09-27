"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  // 2. Jika masih loading, tampilkan ini dulu
  if (loading) {
    return <p>Loading...</p>;
  }

  // 3. Saat loading selesai, tampilkan datanya
  return (
    <main>
      <h1 className="text-center font-bold uppercase mb-5 text-2xl">Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}
