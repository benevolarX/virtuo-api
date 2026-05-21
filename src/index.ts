import { quit } from "virtuo-binding-tauri";

export class VirtuoApi {
  constructor() {}

  quit() {
    (async () => await quit())();
  }
}
