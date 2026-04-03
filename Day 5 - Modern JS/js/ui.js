export function showLoading(statusEl) {
    statusEl.textContent = "Loading...";
    statusEl.className = "loading";
  }
  
  export function showError(statusEl, message) {
    statusEl.textContent = message;
    statusEl.className = "error";
  }
  
  export function showUsers(dataEl, users) {
    dataEl.innerHTML = "";
  
    // TODO:
    // Loop through users and render <li>
  }