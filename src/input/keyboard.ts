
interface Time {}

enum KeyName {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  H = "H",
  I = "I",
  J = "J",
  K = "K",
  L = "L",
  M = "M",
  N = "N",
  O = "O",
  P = "P",
  Q = "Q",
  R = "R",
  S = "S",
  T = "T",
  U = "U",
  V = "V",
  W = "W",
  X = "X",
  Y = "Y",
  Z = "Z",

  // Chiffres (ligne du haut)
  Squared = "Squared",
  Digit0 = "Digit0",
  Digit1 = "Digit1",
  Digit2 = "Digit2",
  Digit3 = "Digit3",
  Digit4 = "Digit4",
  Digit5 = "Digit5",
  Digit6 = "Digit6",
  Digit7 = "Digit7",
  Digit8 = "Digit8",
  Digit9 = "Digit9",

  Slash = "Slash",
  Star = "Star",
  Dash = "Dash",
  Plus = "Plus",
  Dot = "Dot",

  // Directions
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",

  // Contrôles
  Space = "Space",
  Enter = "Enter",
  Escape = "Escape",
  Tab = "Tab",
  Backspace = "Backspace",
  CapsLock = "CapsLock",
  ContextMenu = "ContextMenu",
  NumLock = "NumLock",
  Delete = "Delete",
  Insert = "Insert",
  Home = "Home",
  End = "End",
  PageUp = "PageUp",
  PageDown = "PageDown",

  // Modifiers
  Shift = "Shift",
  Control = "Control",
  Alt= "AltLeft",
  AltGr = "AltGr",
  Meta = "Meta",

  F1 = "F1",
  F2 = "F2",
  F3 = "F3",
  F4 = "F4",
  F5 = "F5",
  F6 = "F6",
  F7 = "F7",
  F8 = "F8",
  F9 = "F9",
  F10 = "F10",
  F11 = "F11",
  F12 = "F12",
  ScrollLock = "ScrollLock",
  Pause = "Pause",
}

type Key = {
  [key in KeyName]: (k: string) => boolean
}

export const Keys: Key = {
  [KeyName.A]: k => k == "a" || k == "A",
  [KeyName.B]: k => k == "b" || k == "B",
  [KeyName.C]: k => k == "c" || k == "C",
  [KeyName.D]: k => k == "d" || k == "D",
  [KeyName.E]: k => k == "e" || k == "E",
  [KeyName.F]: k => k == "f" || k == "F",
  [KeyName.G]: k => k == "g" || k == "G",
  [KeyName.H]: k => k == "h" || k == "H",
  [KeyName.I]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.J]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.K]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.L]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.M]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.N]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.O]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.P]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Q]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.R]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.S]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.T]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.U]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.V]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.W]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.X]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Y]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Z]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Squared]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit0]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit1]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit2]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit3]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit4]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit5]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit6]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit7]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit8]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Digit9]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Slash]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Star]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Dash]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Plus]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Dot]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.ArrowUp]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.ArrowDown]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.ArrowLeft]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.ArrowRight]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Space]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Enter]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Escape]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Tab]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Backspace]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.CapsLock]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.ContextMenu]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.NumLock]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Delete]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Insert]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Home]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.End]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.PageUp]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.PageDown]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Shift]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Control]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Alt]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.AltGr]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Meta]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F1]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F2]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F3]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F4]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F5]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F6]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F7]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F8]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F9]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F10]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F11]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.F12]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.ScrollLock]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  },
  [KeyName.Pause]: function (k: string): boolean {
    throw new Error("Function not implemented.")
  }
}

//type TestKey = (k: KeysName | string) => boolean
/*
type Key = {
  is: (k: string) => boolean,
  lastPressed: Time | null,
  lastReleased: Time | null
}*/

interface IKeyboard {
  // keys: Key
}



export class KeyBoard {

}
