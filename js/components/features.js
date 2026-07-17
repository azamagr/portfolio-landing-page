import { features } from "../data.js";

export function Features() {
  const cards = features
    .map(
      (f) => `
      <div class="feature-card">
        <span class="num">${f.num}</span>
        <h3>${f.title}</h3>
        <p>${f.body}</p>
      </div>`
    )
    .join("");

  return `
    <section id="product" class="block">
      <div class="container">
        <div class="block-intro">
          <span class="eyebrow">Product</span>
          <h2>Everything between "it's down" and "it's fixed."</h2>
          <p>Relay isn't a ping checker. It understands what your API is supposed to return, and tells you exactly what changed.</p>
        </div>
        <div class="features-grid">${cards}</div>
      </div>
    </section>
  `;
}
