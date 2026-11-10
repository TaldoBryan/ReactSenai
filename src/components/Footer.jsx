function Footer() {
  return (
    <footer className="footer">
      <p>Desenvolvido por <strong>Bryan Carvalho</strong></p>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "30px" }}>
        <a
          href="https://www.linkedin.com/in/bryan-carvalho-de-oliveira-b22b06191/"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn
        </a>

        <a
          href="https://github.com/TaldoBryan/ReactSenai"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub
        </a>
      </div>

      <p className="footer-copy">
        © 2026 - Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;