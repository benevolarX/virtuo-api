import { quit } from "virtuo-binding-tauri";

export class VirtuoApi {
  constructor() {}

  async quit() {
    await quit();
  }
}
