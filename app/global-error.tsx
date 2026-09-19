'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt">
      <body>
        <main className="error-page">
          <p className="eyebrow">500 / SYSTEM ERROR</p>
          <h1>O sistema encontrou uma falha.</h1>
          <p>
            A recuperação também faz parte da engenharia. Tente carregar a página
            novamente.
          </p>
          <button className="button button-primary" onClick={reset} type="button">
            Tentar novamente
          </button>
        </main>
      </body>
    </html>
  );
}
