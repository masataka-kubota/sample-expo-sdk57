import { render } from '@testing-library/react-native';

import Index from '@/app/index';

describe('<Index />', () => {
  test('Text renders correctly on HomeScreen', async () => {
    const { getByText } = await render(<Index />);

    getByText('Edit src/app/index.tsx to edit this screen.');
  });
});
