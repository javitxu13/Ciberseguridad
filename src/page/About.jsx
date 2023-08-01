import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faDna } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import "../css/About.css";

const About = () => {
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
        <h3 className="about-us-subtitle"><FontAwesomeIcon icon={faDna} /> Innovación en el ADN</h3>
          <p className="about-us-paragraph">
            La innovación es parte de nuestro ADN. Desde nuestra fundación, hemos sido pioneros en la creación de tecnologías revolucionarias y enfoques disruptivos para mantener un paso adelante en la lucha contra las ciberamenazas. Nuestro equipo de investigación de vanguardia, apoyado por tecnología de punta, explora constantemente nuevas estrategias para garantizar la protección más avanzada.
          </p>
        </div>

        <div className="column">
        <h3 className="about-us-subtitle"><FontAwesomeIcon icon={faLock} /> Seguridad Digital</h3>
          <p className="about-us-paragraph">
          Proporcionamos la máxima seguridad digital para nuestros clientes. Nuestro enfoque está en la innovación constante para enfrentar las amenazas emergentes. Ofrecemos servicios confiables y asesoramiento experto. Buscamos empoderar a nuestros clientes con recursos informativos y soluciones proactivas. Somos aliados confiables en la lucha contra las ciberamenazas.
          </p>
        </div>

        <div className="column">
          <h3 className="about-us-subtitle"><FontAwesomeIcon icon={faCheckCircle} /> Seguridad Impulsada por IA</h3>
          <p className="about-us-paragraph">
           Aprovechando el poder de la inteligencia artificial y el aprendizaje automático, estamos forjando el camino hacia una ciberseguridad más inteligente y resistente. Nuestra capacidad para analizar y anticipar patrones de comportamiento malicioso, combinada con algoritmos avanzados de detección, nos permite ofrecer soluciones de protección líderes en el mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
