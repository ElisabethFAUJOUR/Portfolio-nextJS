import { getDictionary } from '@/utils/locales';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import ContactForm from './contactForm/ContactForm';
import { Placeholder } from '@/@types';

async function Contact({ locale }: { locale: string }) {
  // Get the 'contact.json' file translations
  const contact = await getDictionary(locale, 'contact');

  const successMessage = contact.successMessage;
  const errorEmailMessage = contact.errorEmailMessage;
  const errorMessage = contact.errorMessage;
  const sendButton = contact.sendButton;
  const placeholder: Placeholder = contact.placeholder;
  const messagePlaceholder = contact.messagePlaceholder;

  return (
    <FadeInSection customClass="main-layout" id="contact">
      <h2 className="main-title">{contact.title}</h2>
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
