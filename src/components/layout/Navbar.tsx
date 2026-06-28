import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-lg font-bold">VK</h1>

          <nav>Navigation</nav>
        </div>
      </Container>
    </header>
  );
}
