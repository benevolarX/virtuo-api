export type Ok<T> = { ok: true, val: T }
export type Err<E> = { ok: false, err: E }
export type Res<T, E> = Ok<T> | Err<E>
