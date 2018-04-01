import Index from './index'

it('it should render root component without crashing', () => {
  expect(JSON.stringify(Index)).toMatchSnapshot();
});