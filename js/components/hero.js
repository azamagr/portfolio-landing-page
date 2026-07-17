import { logStream } from "../data.js";

export function Hero() {
  return `
    <section id="top" class="hero">
      <div class="hero-glow"></div>
      <div class="container hero-grid">
        <div>
          <span class="eyebrow hero-eyebrow"><span class="pip"></span>API monitoring for small teams</span>
          <h1>Know the instant<br />something breaks.</h1>
          <p>Relay watches every endpoint your product depends on and tells your team the moment something fails — before a customer emails you about it.</p>
          <div class="hero-ctas">
            <a href="#pricing" class="btn-primary">Start monitoring free</a>
            <a href="#how-it-works" class="btn-secondary">See how it works</a>
          </div>
          <p class="hero-note">No credit card. 5 monitors free forever.</p>
        </div>
        <div>
          <div class="log-demo" id="logDemo">
            <div class="log-demo-header">
              <span class="circle red"></span><span class="circle gray"></span><span class="circle gray"></span>
              <span class="path">watch — checkout-api.prod</span>
            </div>
            <div class="log-demo-body" id="logBody"></div>
            <div class="log-demo-footer">
              <span class="eyebrow">Live simulation</span>
              <span class="live-indicator"><span class="pulse"></span>2 incidents this hour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initLogStream() {
  const body = document.getElementById("logBody");
  let index = 0;
  const visible = [];

  function render() {
    body.innerHTML = visible
      .map(
        (entry) => `
        <div class="log-line">
          <span class="time">${new Date().toLocaleTimeString("en-GB")}</span>
          <span class="method ${entry.method.toLowerCase()}">${entry.method}</span>
          <span class="path-name">${entry.path}</span>
          <span class="status ${entry.alert ? "alert" : ""}">${entry.status}</span>
          <span class="ms">${entry.ms}ms</span>
        </div>`
      )
      .join("");
  }

  setInterval(() => {
    const next = logStream[index % logStream.length];
    index += 1;
    visible.push(next);
    if (visible.length > 6) visible.shift();
    render();
  }, 1400);
}
