const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://zero.webappsecurity.com",
    supportFile: false, // 🔹 ปิดการใช้ support file
  },
  projectId: "y9bj3k"
});
