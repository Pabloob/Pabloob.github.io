import { iconMap } from "../utils/iconMap";
import "../styles/Contact.css";

const Contact = () => {
  const contactLinks = [
    {
      id: "email",
      label: "Email",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=pabloorbeab@gmail.com",
    },
    {
      id: "cv",
      label: "CV",
      url: "https://drive.google.com/file/d/1dmdcsUVM-OlFjRu_V6aLTyNHA_0CCNpW/view?usp=sharing",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pabloob5/",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Pabloob",
    },
  ];

  return (
    <section className="contact-section">
      {contactLinks.map(({ id, label, url, target }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel={target === "_blank" ? "noreferrer" : undefined}
          className="contact-link"
        >
          <img src={iconMap[id]} className="contact-icon" alt={label} />
          <span className="contact-label">{label}</span>
        </a>
      ))}
    </section>
  );
};

export default Contact;
