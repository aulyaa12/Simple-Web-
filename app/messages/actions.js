"use server";

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(id) {
  // Cari indeks pesan yang cocok berdasarkan id
  const index = messages.findIndex((msg) => msg.id === id);

  // Jika ditemukan, hapus pesan dari array messages
  if (index !== -1) {
    messages.splice(index, 1);
  }

  // Panggil revalidatePath agar cache Next.js dibersihkan
  // dan tampilan /messages otomatis diperbarui di server
  revalidatePath("/messages");
}
