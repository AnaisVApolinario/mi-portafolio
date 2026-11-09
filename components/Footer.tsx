export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-center py-10">
      <p>© {new Date().getFullYear()} Ani.dev</p>
      <p className="mt-2 text-sm">
        Construido con Next.js y Tailwind CSS
      </p>
    </footer>
  );
}