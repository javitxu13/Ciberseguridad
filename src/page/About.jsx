import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/About.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="column-container">
        <div className="columna">
          <h2 className="about-us-title">Desafiamos el Status Quo</h2>
          <p className="about-us-paragraph">
            En JGR, no somos una empresa de ciberseguridad común. Nos atrevemos a desafiar el status quo y abrazar la innovación en todo lo que hacemos. Nuestro objetivo es ir más allá de las convenciones para ofrecer soluciones de seguridad revolucionarias que protejan a nuestros clientes contra las amenazas cibernéticas más sofisticadas.
          </p>
          <p className="about-us-paragraph">
            Con una mentalidad disruptiva y un equipo de expertos creativos, exploramos nuevos horizontes tecnológicos para asegurar el presente y el futuro digital de nuestros clientes. No nos conformamos con lo habitual; preferimos romper barreras y anticiparnos a los desafíos emergentes en el mundo de la ciberseguridad.
          </p>
        </div>

        <div className="column">
          <h3 className="about-us-subtitle"><FontAwesomeIcon icon={faCheckCircle} /> Innovación en el ADN</h3>
          <p className="about-us-paragraph">
            La innovación es parte de nuestro ADN. Desde nuestra fundación, hemos sido pioneros en la creación de tecnologías revolucionarias y enfoques disruptivos para mantener un paso adelante en la lucha contra las ciberamenazas. Nuestro equipo de investigación de vanguardia, apoyado por tecnología de punta, explora constantemente nuevas estrategias para garantizar la protección más avanzada.
          </p>
        </div>

        <div className="column">
          <h3 className="about-us-subtitle"><FontAwesomeIcon icon={faCheckCircle} /> Más que una empresa, una comunidad</h3>
          <p className="about-us-paragraph">
            En JGR, creemos en la fuerza de una comunidad sólida y colaborativa. No solo protegemos a nuestros clientes, sino que también los empoderamos para que se conviertan en defensores de su propia seguridad digital. Organizamos eventos, seminarios y grupos de discusión para compartir conocimientos y fomentar una mentalidad de ciberseguridad colectiva en la era digital.
          </p>
        </div>

        <div className="column">
          <h3 className="about-us-subtitle"><FontAwesomeIcon icon={faCheckCircle} /> Un futuro audaz y seguro</h3>
          <p className="about-us-paragraph">
            Nuestro compromiso con la innovación y la excelencia nos impulsa a buscar constantemente nuevos caminos hacia un futuro audaz y seguro. Desde el aprendizaje automático hasta la inteligencia artificial y más allá, estamos forjando el camino hacia una ciberseguridad más inteligente y resistente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
