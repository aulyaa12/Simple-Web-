import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      <div className="mt-6 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Tidak ada pesan.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center justify-between rounded-lg border p-4 shadow-sm"
            >
              <div>
                <p className="font-semibold">
                  {msg.name} —{" "}
                  <span className="font-normal text-muted-foreground">
                    {msg.email}
                  </span>
                </p>
                <p className="mt-1 text-sm">{msg.message}</p>
              </div>

              {/* Form dengan Server Action untuk menghapus pesan */}
              <form action={deleteMessageAction.bind(null, msg.id)}>
                <button
                  type="submit"
                  className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700"
                >
                  Hapus
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
