export type State = {
    count: number
}
const state: State = { count: 1 }

export const getState = () => state
export const inc = () => state.count++