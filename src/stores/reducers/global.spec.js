import { global } from './global'

it('it should return return initial state if no value of args passed', () => {
    const initialState = {
        configuration: {}
    }
    expect(global(undefined, {})).toEqual(initialState)
})

it('it should return global state at initial', () => {
    const initialState = {
        configuration: {}
    }
    expect(global(undefined, { type: 'global/init' })).toEqual(initialState)
})
