"use client";

import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          My Favorite Users
        </h1>
        <p className="mt-4 text-muted-foreground">
          Data ini diambil langsung dari FavoritesContext.
        </p>

        {favorites.length === 0 ? (
          <p className="mt-10 text-muted-foreground">Belum ada user favorit.</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {favorites.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
