const profile = {
  name: "Aulya Rakhmawati",
  role: "Peserta Bootcamp",
  favoriteTech: ["Python", "Anaconda", "VS Code", "PHP"],
};

export async function GET() {
  return Response.json(profile);
}
