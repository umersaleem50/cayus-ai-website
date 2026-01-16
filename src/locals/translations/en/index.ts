import { aboutUs } from './about-us';
import { cta } from './cta';
import { features } from './features';
import { getStarted } from './get-started';
import { hero } from './hero';
import { navbar } from './navbar';
import { problem } from './problem';

const enTranslation = {
  ...navbar,
  ...hero,
  ...getStarted,
  ...problem,
  ...features,
  ...aboutUs,
  ...cta,
};

export default enTranslation;
