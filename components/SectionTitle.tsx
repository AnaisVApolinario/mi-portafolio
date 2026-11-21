type Props = {
  route: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ route, title, subtitle }: Props) {
  return (
    <header className="mb-12">
      <p className="mb-2 font-mono text-sm text-accent">
        <span className="text-muted">GET </span>
        {route}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
    </header>
  );
}
