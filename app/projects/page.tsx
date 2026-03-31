import Link from "next/link";

// Data project (bisa diganti dengan data kamu sendiri)
const projects = [
  {
    id: "1",
    title: "Todo App",
    description:
      "Aplikasi todo list sederhana untuk mengelola tugas harian. Fitur CRUD lengkap dengan local storage.",
    tech: ["React", "Tailwind CSS", "Local Storage"],
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca real-time yang menampilkan informasi cuaca berdasarkan lokasi pengguna.",
    tech: ["Next.js", "OpenWeather API", "Chart.js"],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Website portfolio pribadi yang dibangun dengan Next.js dan Tailwind CSS (project ini!).",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">My Projects</h1>
      <p className="text-gray-600 mb-10">
        Beberapa project yang sudah saya kerjakan.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
