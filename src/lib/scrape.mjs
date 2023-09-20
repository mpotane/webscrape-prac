import { KnownDevices } from "puppeteer";
import puppeteer from "puppeteer";

const iPhone = KnownDevices["iPhone 6"];

(async () => {
  const b = await puppeteer.launch({ headless: 'new' });
  const p = await b.newPage();
  await p.emulate(iPhone);
  await p.goto("https://www.mpotane.com", { waitUntil: "networkidle2" });
  await p.screenshot({ path: "public/example.png" });
  await b.close();
})();
