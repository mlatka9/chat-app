import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from 'hooks/useAuth';
import { Socials, StyledParagraph } from './SocialsBox.styles';

const SocialsBox = () => {
  const { signUpWithGoogle } = useAuth();

  return (
    <>
      <StyledParagraph>or continue with these social profile</StyledParagraph>
      <Socials>
        <button onClick={signUpWithGoogle}>
          <FontAwesomeIcon icon={['fab', 'google']} />
        </button>
      </Socials>
    </>
  );
};

export default SocialsBox;
