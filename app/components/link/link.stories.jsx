import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://hahz.arvrtise.link">Primary link</Link>
    <Link secondary href="https://hahz.arvrtise.link">
      Secondary link
    </Link>
  </StoryContainer>
);
