import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  clearAll() {
    localStorage.clear();
  }
  get(key) {
    return localStorage.getItem(key);
  }

  set(key, value) {
    return localStorage.setItem(key, value);
  }

  delete(key) {
    localStorage.removeItem(key);
  }
}
