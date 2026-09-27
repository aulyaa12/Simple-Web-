/* export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ccc", // Garis tepi kartu
        padding: "30px 15px", // Jarak dalam (atas/bawah 30px, kiri/kanan 15px)
        minHeight: "150px", // Tinggi minimal kartu
        textAlign: "left", // Teks rata kiri
        borderRadius: "8px", // Sudut kartu agak melengkung
        width: "18%", // Lebar kartu (agar muat 5 di satu baris)
        display: "inline-block", // Menyusun kartu ke samping
        margin: "1%", // Jarak antar-kartu di luar
        boxSizing: "border-box", // Menjaga total lebar tetap pas dengan padding
        fontSize: "16px", // Ukuran teks
        backgroundColor: "#bbc8d4", // Warna latar belakang kartu
        verticalAlign: "top", // Posisi kartu rata di bagian atas
      }}
    >
      <p style={{ margin: 0, lineHeight: "1.6" }}>
        <strong>Name:</strong> {user.name} <br />
        <strong>Email:</strong> {user.email} <br />
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
} */

/*export default function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  );
}*/

/*export default function UserCard({ user }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{user.name}</h3>

      <p className="mt-2 text-sm text-gray-600">{user.email}</p>

      <p className="mt-1 text-sm text-gray-500">{user.company.name}</p>
    </div>
  );
}

*/

import { Button } from "@/components/ui/button";

export default function UserCard({ user }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{user.name}</h3>

      <p className="mt-2 text-sm text-gray-600">{user.email}</p>

      <p className="mt-1 text-sm text-gray-500">{user.company.name}</p>

      <Button className="mt-4">View Profile</Button>
    </div>
  );
}
