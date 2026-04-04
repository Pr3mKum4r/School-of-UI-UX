import { /* TODO: import User type */ } from "./types";

export function showLoading(statusEl: HTMLElement): void {
  statusEl.textContent = "Loading...";
  statusEl.className = "loading";
}

export function showError(statusEl: HTMLElement, message: string): void {
  statusEl.textContent = message;
  statusEl.className = "error";
}

export function showUsers(dataEl: HTMLElement, users: /* TODO: type */) {
  dataEl.innerHTML = "";

  // TODO:
  // 1. Type users properly
  // 2. Render list items safely
}