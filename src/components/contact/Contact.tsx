import FadeInSection from '../animations/FadeInSection/FadeInSection';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <FadeInSection customClass={`${styles.contact} main-layout`} id="contact">
      <h2 className={`${styles.title} main-title fade-in`}>Me contacter.</h2>
      <form
        className={`${styles.form} fade-in`}
        action="https://formspree.io/f/mbjvgykq"
        method="POST"
      >
        <div className={styles.container}>
          <div className={styles.column}>
            <label className="visually-hidden" htmlFor="lastname">
              Nom
            </label>
            <input
              className={styles.input}
              type="text"
              name="lastname"
              placeholder="Nom"
              id="lastname"
              maxLength={100}
              required
            />
            <label className="visually-hidden" htmlFor="firstname">
              Prénom
            </label>
            <input
              className={styles.input}
              type="text"
              name="firstname"
              placeholder="Prénom"
              id="firstname"
              maxLength={100}
              autoComplete="off"
              required
            />
            <label className="visually-hidden" htmlFor="emailAdress">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              id="emailAdress"
              maxLength={320}
              autoComplete="off"
              required
            />
            <label className="visually-hidden" htmlFor="phone">
              Téléphone (facultatif)
            </label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Téléphone (facultatif)"
              id="phone"
              pattern="^(?:\+33|06)[0-9]{8}$"
              autoComplete="off"
            />
          </div>
          <div className={styles.column}>
            <label className="visually-hidden" htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Ecrivez votre message"
              id="message"
              autoComplete="off"
              required
            ></textarea>
          </div>
        </div>
        <div>
          <button className={styles.button} type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </FadeInSection>
  );
}

export default Contact;
