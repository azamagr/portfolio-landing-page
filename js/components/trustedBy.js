import { trustedNames } from "../data.js";

export function TrustedBy() {
  const logos = trustedNames.map((name) => `<span>${name}</span>`).join("");
  return `
    <section class="trusted">
      <div class="container">
        <p class="eyebrow">Trusted by engineering teams at</p>
        <div class="trusted-logos">${logos}</div>
      </div>
    </section>
  `;
}
