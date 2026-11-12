import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <p>Desenvolvido por <strong>Bryan Carvalho</strong></p>

      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/bryan-carvalho-de-oliveira-b22b06191/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
          className="linkedin-logo"
          src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/brands/linkedin.svg" alt="" />
          LinkedIn
        </a>

        <a
          href="https://github.com/TaldoBryan/ReactSenai"
          target="_blank"
          rel="noopener noreferrer"
        > <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="" />
          GitHub
        </a>
      </div>

      <p className="footer-copy">
        © 2026 - Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;