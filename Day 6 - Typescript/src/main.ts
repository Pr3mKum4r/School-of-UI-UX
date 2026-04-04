import { fetchUsers } from "./api.js";
import { showLoading, showError, showUsers } from "./ui.js";

const statusEl = document.getElementById("status");
const dataEl = document.getElementById("data");
const loadBtn = document.getElementById("loadBtn");

// TODO:
// Fix possible null issues (strict mode)

loadBtn?.addEventListener("click", loadData);

async function loadData() {
  // TODO:
  // 1. Add proper types
  // 2. Use try/catch
  // 3. Call API and render users
}