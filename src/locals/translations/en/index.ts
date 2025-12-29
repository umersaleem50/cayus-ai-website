import { aboutUs } from './about-us';
import { cta } from './cta';
import { features } from './features';
import { getStarted } from './get-started';
import { hero } from './hero';
import { problem } from './problem';

const enTranslation = { ...getStarted, ...hero, ...problem, ...features, ...cta, ...aboutUs };

export default enTranslation;
