import { getState, } from 'singleton-test-core'

export const keys = () => Object.keys(getState())
export const dec = () => getState().count--
export const getCount = () => getState().count