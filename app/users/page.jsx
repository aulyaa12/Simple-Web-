"use client";

import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Daftar Users
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tandai user favorit kamu dengan tombol hati di setiap kartu.
        </p>

        {loading ? (
          <p className="mt-10 text-muted-foreground">Memuat data...</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
