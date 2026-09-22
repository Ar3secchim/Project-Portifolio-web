import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>Esta rota não existe.</h1>
      <Link className="primary-button" href="/pt">
        Voltar ao início →
      </Link>
    </main>
  );
}
