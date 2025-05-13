import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileRemover = async (filename) => {
  const filePath = path.join(__dirname, "../uploads", filename);

  try {
    await fs.unlink(filePath);
    console.log(`Removed ${filename}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`File ${filename} doesn't exist, won't remove it.`);
    } else {
      console.error(`Error occurred while removing file ${filename}:`, err);
    }
  }
};

export { fileRemover };
