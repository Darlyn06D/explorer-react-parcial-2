import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="state-panel not-found container">
      <p className="eyebrow">404</p>
      <h1>Esta página no existe</h1>
      <p>El enlace puede estar escrito incorrectamente o ya no estar disponible.</p>
      <Link className="button-link" to="/">Ir al listado de países</Link>
    </main>
  );
}
