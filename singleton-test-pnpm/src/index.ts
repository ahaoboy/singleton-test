import { getState } from 'singleton-test-core'
import { dec, keys, getCount } from 'singleton-test-use'

console.log(getState(), keys(), getCount())
dec()
console.log(getState(), keys(), getCount())