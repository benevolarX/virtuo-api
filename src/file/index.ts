import { invoke } from "@tauri-apps/api/core";
import type { Res } from "../utils/rust";

interface IFile {
  read(url: string, then: (r: Res<string, any>) => void): void,
  write(url: string, content: string): void
}

export class File implements IFile  {

  read(url: string, then: (r: Res<string, any>) => void): void {
    invoke("read_file", { url}).then(r => then(r as Res<string, any>))
  }

  write(url: string, content: string): void {
    invoke("write_file", { url, content })
  }

}