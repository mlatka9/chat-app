import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Socials, StyledParagraph } from './SocialsBox.styles';

const SocialsBox = () => {
  return (
    <>
      <StyledParagraph>or continue with these social profile</StyledParagraph>
      <Socials>
        <FontAwesomeIcon icon={['fab', 'google']} />
        <FontAwesomeIcon icon={['fab', 'facebook']} />
        <FontAwesomeIcon icon={['fab', 'github']} />
      </Socials>
    </>
  );
};

export default SocialsBox;
