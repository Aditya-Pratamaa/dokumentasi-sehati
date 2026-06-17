const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, "proposal_dokumentasi_sehati_update_screenshot_besar.html");

  await page.goto(`file://${filePath}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "proposal-sehati.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm",
    },
  });

  await browser.close();

  console.log("PDF berhasil dibuat: proposal-sehati.pdf");
})();