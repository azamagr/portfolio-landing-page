export const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export const logStream = [
  { method: "GET", path: "/v1/checkout", status: 200, ms: 84 },
  { method: "POST", path: "/v1/webhooks/stripe", status: 200, ms: 121 },
  { method: "GET", path: "/v1/inventory", status: 200, ms: 96 },
  { method: "POST", path: "/v1/auth/refresh", status: 504, ms: 8000, alert: true },
  { method: "GET", path: "/v1/orders/9231", status: 200, ms: 77 },
  { method: "POST", path: "/v1/notifications", status: 500, ms: 340, alert: true },
  { method: "GET", path: "/v1/users/me", status: 200, ms: 61 },
  { method: "GET", path: "/v1/search", status: 200, ms: 143 },
];

export const trustedNames = ["Northwind", "Hexa", "Fieldnote", "Ledgerly", "Kiln", "Portage"];

export const features = [
  {
    num: "01",
    title: "Endpoint watch",
    body: "Point Relay at any URL or import your OpenAPI spec. It checks uptime, latency, and response shape on a schedule you set — down to every 30 seconds.",
  },
  {
    num: "02",
    title: "Alerts that reach a human",
    body: "Slack, PagerDuty, SMS, or a phone call at 3am if it's bad enough. Alerts include the failing request, the response body, and the last known-good check.",
  },
  {
    num: "03",
    title: "Status pages in one click",
    body: "Turn any watch group into a public status page on your own subdomain. Incidents post automatically, no copy-pasting into a dashboard.",
  },
  {
    num: "04",
    title: "Regression diffs",
    body: "Relay remembers every response schema it's seen. When a field disappears or a type changes, you get a diff — not just a green-to-red flip.",
  },
];

export const steps = [
  {
    num: "01",
    title: "Point Relay at your API",
    body: "Paste a URL or import an OpenAPI spec. Relay maps every endpoint and its expected response shape in seconds.",
  },
  {
    num: "02",
    title: "Set your check interval",
    body: "From every 30 seconds to once an hour. Relay calls each endpoint, compares the response against its baseline, and times it.",
  },
  {
    num: "03",
    title: "Get told before customers do",
    body: "The moment a check fails or drifts from baseline, Relay pages whoever's on call — with the failing request attached.",
  },
];

export const pricing = [
  {
    name: "Solo",
    price: "$0",
    period: "forever",
    tagline: "For side projects and one endpoint that matters.",
    features: ["5 monitors", "5 min check interval", "Email alerts", "7-day history"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Team",
    price: "$29",
    period: "/mo",
    tagline: "For teams shipping on a real on-call rotation.",
    features: ["50 monitors", "30 sec check interval", "Slack, PagerDuty, SMS", "90-day history", "1 public status page"],
    cta: "Start 14-day trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    tagline: "For platforms with an SLA to keep.",
    features: ["Unlimited monitors", "10 sec check interval", "Regression diffing", "Unlimited status pages", "Dedicated Slack channel"],
    cta: "Talk to us",
    highlighted: false,
  },
];

export const footerColumns = [
  { title: "Product", links: ["Monitors", "Status pages", "Regression diffs", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers"] },
  { title: "Resources", links: ["Docs", "API reference", "Status"] },
];
