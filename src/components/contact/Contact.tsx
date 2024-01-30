'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import DOMPurify from 'dompurify';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import styles from './Contact.module.scss';

function Contact() {
  // Declaration State Variables
  const [values, setValues] = useState({
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Update formData when the user enters values into fields and Sanitize data
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setValues({
      ...values,
      [event.target.name]: sanitizedValue,
    });
  };

  // Handle form submission and Fetch API
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FadeInSection customClass={`${styles.contact} main-layout`} id="contact">
      <h2 className={`${styles.title} main-title fade-in`}>Me contacter.</h2>
      <form className={`${styles.form} fade-in`} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.column}>
            {/* Lastname */}
            <label className="visually-hidden" htmlFor="lastname">
              Nom
            </label>
            <input
              className={styles.input}
              value={values.lastname}
              onChange={handleChange}
              type="text"
              name="lastname"
              placeholder="Nom"
              id="lastname"
              maxLength={100}
              required
            />
            {/* Firstname */}
            <label className="visually-hidden" htmlFor="firstname">
              Prénom
            </label>
            <input
              className={styles.input}
              value={values.firstname}
              onChange={handleChange}
              type="text"
              name="firstname"
              placeholder="Prénom"
              id="firstname"
              maxLength={100}
              autoComplete="off"
              required
            />
            {/* Email */}
            <label className="visually-hidden" htmlFor="emailAdress">
              Email
            </label>
            <input
              className={styles.input}
              value={values.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              id="emailAdress"
              maxLength={320}
              autoComplete="off"
              required
            />
            {/* Phone */}
            <label className="visually-hidden" htmlFor="phone">
              Téléphone (facultatif)
            </label>
            <input
              className={styles.input}
              value={values.phone}
              onChange={handleChange}
              type="tel"
              name="phone"
              placeholder="Téléphone (facultatif)"
              id="phone"
              pattern="^(?:\+33|06)[0-9]{8}$"
              maxLength={12}
              autoComplete="off"
            />
          </div>
          {/* Message */}
          <div className={styles.column}>
            <label className="visually-hidden" htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              value={values.message}
              onChange={handleChange}
              name="message"
              placeholder="Ecrivez votre message"
              id="message"
              autoComplete="off"
              maxLength={500}
              required
            />
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
