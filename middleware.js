import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // 1. Logika Maintenance Mode (Latihan 3)
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  const isMaintenancePage = pathname === "/maintenance";

  if (isMaintenance && !isMaintenancePage) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  // 2. Logika Logger (Latihan 1)
  if (pathname.startsWith("/api")) {
    const waktu = new Date().toISOString();
    console.log(`[${waktu}] ${request.method} ${pathname}`);
  }

  // 3. Logika Auth Guard (Latihan 2)
  if (pathname.startsWith("/favorites")) {
    const token = request.cookies.get("token");

    if (!token) {
      // Belum ada token -> redirect ke halaman utama
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next(); // Lanjutkan request jika semua aman
}

// Cukup SATU export config untuk mencakup semua rute yang ingin diproses middleware
export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // Memeriksa semua path kecuali file internal Next.js
};
