export default function About() {
  const skills = [
    "JavaScript / TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Bio */}
        <div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Halo! Saya adalah seorang mahasiswa yang tertarik dengan dunia
            software engineering. Saat ini saya sedang mendalami teknologi web
            modern seperti React dan Next.js.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Saya percaya bahwa belajar terbaik adalah dengan membangun
            sesuatu. Itulah kenapa saya selalu mencoba mengerjakan project
            nyata untuk mengasah kemampuan saya.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Skills & Teknologi
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
