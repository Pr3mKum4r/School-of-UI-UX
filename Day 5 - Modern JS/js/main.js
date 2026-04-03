import { fetchUsers } from "./api.js";
import { showLoading, showError, showUsers } from "./ui.js";

const statusEl = document.getElementById("status");
const dataEl = document.getElementById("data");
const loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", loadData);

async function loadData() {
  // TODO:
  // 1. Show loading
  // 2. Call fetchUsers()
  // 3. Show users
  // 4. Handle errors with try/catch
}