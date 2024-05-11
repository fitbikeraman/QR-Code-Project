
import qr from "qr-image";
import fs from "fs";

fs.readFile("URL.txt", "utf8", (err, url) => {
  if (err) {
    console.error("Error reading URL.txt:", err);
    return;
  }

  const qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("qr_img.png"));

  console.log("QR-Code Generated");
});
