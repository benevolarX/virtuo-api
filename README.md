# virtuo-api

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.6. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

### input

```ts
let keys = api.input.mapping()
keys.register("jump", [keyboard.space, gamepad.south])
let keyboardMove = pad(axe(keyboard.z, keyboard.s), axe(keyboard.q, keyboard.d))
let gamepadMove = gamepad.pad
keys.register("move, [keyboardMove, gamepadMove])
let actions = keys.build()
actions.jump.onpress((t) => {})
actions.move.on("change", (dir) => {})
```