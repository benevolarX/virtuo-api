import type { IVirtuoApi, IVirtuoApiBuilderConfig } from "./types"

export class VirtuoApi implements IVirtuoApi {

  constructor(private canvas_id: string) {

  }

  get_canvas_id() {
    return this.canvas_id
  }

  try_quit_game() {
    
  }

  toString(): string {
      return "ici virtuo api"
  }
}

export const apiBuilder = (config: IVirtuoApiBuilderConfig = {}): IVirtuoApi => {

  return {
    toString: () => ""
  }
}