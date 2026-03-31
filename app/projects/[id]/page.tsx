import Link from "next/link";

// Data yang sama dengan halaman projects (idealnya dari database/API)
const projects: Record<string, { title: string; description: string; tech: string[]; detail: string }> = {
  "1": {
    title: "Todo App",
    description: "Aplikasi todo list sederhana untuk mengelola tugas harian.",
    tech: ["React", "Tailwind CSS", "Local Storage"],
    detail:
      "Project ini dibuat sebagai latihan pertama saya dengan React. Fitur utama termasuk menambah, mengedit, menghapus, dan menandai tugas sebagai selesai. Data disimpan di local storage sehingga tetap ada meskipun browser ditutup.",
  },
  "2": {
    title: "Weather Dashboard",
    description: "Dashboard cuaca real-time berdasarkan lokasi.",
    tech: ["Next.js", "OpenWeather API", "Chart.js"],
    detail:
      "Dashboard ini menggunakan OpenWeather API untuk mendapatkan data cuaca terkini. Dilengkapi dengan visualisasi grafik suhu menggunakan Chart.js dan mendukung pencarian berdasarkan nama kota.",
  },
  "3": {
    title: "Portfolio Website",
    description: "Website portfolio pribadi dengan Next.js.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    detail:
      "Project yang sedang kamu lihat sekarang! Dibangun menggunakan Next.js App Router dengan Tailwind CSS untuk styling. Mendemonstrasikan file-based routing, layout, dan Link component.",
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Project Tidak Ditemukan
        </h1>
        <Link href="/projects" className="text-blue-600 hover:underline">
          ← Kembali ke Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Kembali ke Projects
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed">{project.detail}</p>
    </section>
  );
}
