import {
  cleanup,
  render,
  screen,
  waitFor
} from '@testing-library/react-native';

import { mockedMovies } from '__mocks__/movies';
import Config from '__mocks__/react-native-config';
import nock from 'nock';
import { AppProviders } from 'providers';
import { Home } from 'screens';

afterEach(cleanup);

// jest.useFakeTimers({
//   legacyFakeTimers: true
// });

nock(Config.API_URL)
  // .persist()
  // .defaultReplyHeaders({
  //   'access-control-allow-origin': '*'
  // })
  .get('/movies')
  .reply(200, mockedMovies);

test('should render loading at first', () => {
  const { getByAccessibilityHint } = render(
    <AppProviders>
      <Home />
    </AppProviders>
  );

  getByAccessibilityHint('loading');
});

test('should render movies successfully', async () => {
  const { toJSON } = render(
    <AppProviders>
      <Home />
    </AppProviders>
  );
  const { findAllByText, getByText } = screen;

  const firstGenre = mockedMovies[0].genres[0];

  expect(toJSON()).toMatchSnapshot();
  // await findAllByText(firstGenre);
  // await waitFor(() => {
  //   expect(getByText(/Action/i)).toBeTruthy();
  // });
});
