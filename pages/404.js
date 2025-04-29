import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="error-404-section wpo-site-header flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 relative">
      <div className="container text-center">
        <h1 className="text-8xl font-bold text-[#D66371] mb-6">404</h1>
        <h2 className="text-4xl font-semibold text-dark mb-4">Jejda! Stránka nenalezena</h2>
        <p className="text-lg text-muted mb-8">
          Stránka, kterou hledáte, mohla být odstraněna, přejmenována nebo je dočasně nedostupná. Jestli tato stránka má být funkční, prosím kontaktujte nás.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" legacyBehavior>
            <a className="theme-btn bg-[#D66371] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#b54d5e] transition">
              Zpět na hlavní stránku
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 w-full text-center">
        <br></br>
        <p className="text-sm text-muted">© 2025 Vaši M&T</p>
      </div>
    </div>
  );
}