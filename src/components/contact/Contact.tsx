import useTranslation from 'next-translate/useTranslation';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import ContactForm from './contactForm/ContactForm';
import { Placeholder } from '@/@types';

function Contact() {
  // t function for translation form the 'contact' json file
  const { t } = useTranslation('contact');
  const successMessage = t('successMessage');
  const errorEmailMessage = t('errorEmailMessage');
  const errorMessage = t('errorMessage');
  const sendButton = t('sendButton');
  const placeholder: Placeholder = t(
    'placeholder',
    {},
    { returnObjects: true }
  );
  const messagePlaceholder = t('messagePlaceholder');

  return (
    <FadeInSection customClass="main-layout" id="contact">
      <h2 className="main-title">{t('title')}</h2>
      <ContactForm
        successMessage={successMessage}
        errorEmailMessage={errorEmailMessage}
        errorMessage={errorMessage}
        sendButton={sendButton}
        placeholder={placeholder}
        messagePlaceholder={messagePlaceholder}
      />
    </FadeInSection>
  );
}

export default Contact;
