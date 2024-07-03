import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Hahz Terry Components',
    brandUrl: 'https://hahz.arvrtise.link',
  },
});
