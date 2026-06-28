import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Koushik. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
