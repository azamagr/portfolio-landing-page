import { Navbar, initNavbar } from "./components/navbar.js";
import { Hero, initLogStream } from "./components/hero.js";
import { TrustedBy } from "./components/trustedBy.js";
import { Features } from "./components/features.js";
import { HowItWorks } from "./components/howItWorks.js";
import { Pricing } from "./components/pricing.js";
import { CTA } from "./components/cta.js";
import { Footer } from "./components/footer.js";

const app = document.getElementById("app");

app.innerHTML = `
  ${Navbar()}
  <main>
    ${Hero()}
    ${TrustedBy()}
    ${Features()}
    ${HowItWorks()}
    ${Pricing()}
    ${CTA()}
  </main>
  ${Footer()}
`;

initNavbar();
initLogStream();
