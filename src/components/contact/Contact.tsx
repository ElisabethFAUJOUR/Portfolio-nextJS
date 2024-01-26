import styles from './Contact.module.scss';

function Contact() {
  return (
    <section className={`${styles.contact} main-layout`} id="contact">
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
              type="text"
              name="lastname"
              placeholder="Nom"
              id="lastname"
              required
            />
            <label className="visually-hidden" htmlFor="firstname">
              Prénom
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Prénom"
              id="firstname"
              required
            />
            <label className="visually-hidden" htmlFor="emailAdress">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="emailAdress"
              required
            />
            <label className="visually-hidden" htmlFor="phone">
              Téléphone (facultatif)
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone (facultatif)"
              id="phone"
              pattern="^(?:\+33|06)[0-9]{8}$"
            />
          </div>
          <div className={styles.column}>
            <label className="visually-hidden" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Ecrivez votre message"
              id="message"
              required
            ></textarea>
          </div>
        </div>
        <div className={styles.button}>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
