import { pricing } from "../data.js";

export function Pricing() {
  const cards = pricing
    .map((plan) => {
      const featureItems = plan.features.map((f) => `<li>${f}</li>`).join("");
      return `
        <div class="plan ${plan.highlighted ? "highlighted" : ""}">
          ${plan.highlighted ? '<span class="badge eyebrow">Most popular</span>' : ""}
          <h3>${plan.name}</h3>
          <p class="tagline">${plan.tagline}</p>
          <div class="price-row">
            <span class="price">${plan.price}</span>
            <span class="period">${plan.period}</span>
          </div>
          <ul>${featureItems}</ul>
          <a href="#top" class="cta">${plan.cta}</a>
        </div>`;
    })
    .join("");

  return `
    <section id="pricing" class="block pricing">
      <div class="container">
        <div class="block-intro">
          <span class="eyebrow">Pricing</span>
          <h2>Free while you're small. Fair once you're not.</h2>
        </div>
        <div class="pricing-grid">${cards}</div>
      </div>
    </section>
  `;
}
