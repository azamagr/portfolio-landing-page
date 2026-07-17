import { footerColumns } from "../data.js";

export function Footer() {
  const columns = footerColumns
    .map(
      (col) => `
      <div class="footer-col">
        <h4>${col.title}</h4>
        <ul>${col.links.map((l) => `<li><a href="#top">${l}</a></li>`).join("")}</ul>
      </div>`
    )
    .join("");

  return `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#top" class="brand"><span class="dot"></span>Relay</a>
            <p>Real-time API monitoring for teams who'd rather ship than babysit dashboards.</p>
          </div>
          ${columns}
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Relay. All rights reserved.</p>
          <p class="made-with eyebrow" style="text-transform:none;letter-spacing:normal;">Built with HTML, CSS &amp; JavaScript</p>
        </div>
      </div>
    </footer>
  `;
}
