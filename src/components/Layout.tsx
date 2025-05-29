// Layout.tsx
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="d-flex flex-column min-vh-100">
    <header className="text-white py-3 sticky-top">
      <div className="container">
        <h1 className="h1 m-0">Community Solar Dashboard</h1>
      </div>
    </header>
    <main className="flex-grow-1">
      <div className="container py-4">{children}</div>
    </main>
  </div>
);

export default Layout;
