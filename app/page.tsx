import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="max-w-2xl">
        {/* Greeting */}
        <p className="text-blue-600 font-medium mb-2">Halo, saya</p>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Dendy 👋
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Seorang developer yang passionate tentang membangun produk digital
          yang bermanfaat. Saat ini sedang belajar Next.js di GDGoC UI Study
          Jam 2026.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Lihat Projects
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Tentang Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
