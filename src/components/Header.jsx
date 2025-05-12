export default function Header({ title, link, className }) {
  return (
    <header className={className}>
      <h1>{title}</h1>
      <nav>
        <a href={link.url}>{link.description}</a>
      </nav>
    </header>
  );
}
