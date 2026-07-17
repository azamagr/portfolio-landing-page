import { steps } from "../data.js";

export function HowItWorks() {
  const items = steps
    .map(
      (s) => `
      <div class="step">
        <span class="num">${s.num}</span>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
      </div>`
    )
    .join("");

  return `
    <section id="how-it-works" class="block how-it-works">
      <div class="container">
        <div class="block-intro">
          <span class="eyebrow">How it works</span>
          <h2>Set up in one sitting, not one sprint.</h2>
        </div>
        <div class="steps-grid">${items}</div>
      </div>
    </section>
  `;
}
