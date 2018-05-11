import { sagas } from "./index"

it('Should hold some of saga listener', () => {
    let sagax = sagas().next()
    expect(sagax).toMatchSnapshot()
})