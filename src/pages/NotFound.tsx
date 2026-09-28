const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-5">
    <div className="text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-semibold">This page doesn't exist.</h1>
      <a href="/" className="btn-ghost mt-8">
        Back to home
      </a>
    </div>
  </main>
);

export default NotFound;
