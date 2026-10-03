const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Berikan path ke aplikasi Next.js kamu untuk memuat next.config.js dan file .env
  dir: "./",
});

// Konfigurasi kustom Jest
const customJestConfig = {
  testEnvironment: "node",
};

module.exports = createJestConfig(customJestConfig);
