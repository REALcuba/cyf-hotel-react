import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <img
        src="https://thenomadvisor.com/wp-content/uploads/2019/03/wheretostayinglasgow.jpg"
        className="card-img-top"
        alt="img"
      />
      <div className="card-body">
        <article>
          City of Glasgow, es una ciudad y un consejo de Escocia, en el Reino
          Unido. Es la mayor ciudad de Escocia y la tercera del Reino Unido. La
          gente de Glasgow es conocida como Glaswegians. Asimismo, Glaswegian es
          el nombre con que se conoce al dialecto local escocés.
        </article>
        <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.d2SaqaWVBLX8QjwcgXzBRAHaEK?pid=ImgDet&rs=1"
        className="card-img-top"
        alt="img"
      />
      <div className="card-body">
        <article>
          Mánchester es un importante centro artístico, financiero, de medios de
          comunicación y de educación superior. En una encuesta de líderes
          empresariales británicos publicada en 2006, Mánchester era considerada
          como el mejor lugar en el Reino Unido para establecer un negocio.
        </article>
        <a href="https://visitmanchester.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <img
        src="https://digitalhealth.london/wp-content/uploads/2015/12/DHL-London-01.jpg"
        className="card-img-top"
        alt="img"
      />
      <div className="card-body">
        <article>
          La City de Londres (en inglés, City of London y, más informalmente,
          the City o Square Mile debido a que su superficie es de alrededor de 1
          milla cuadrada o 2,6 kilómetros cuadrados) es una pequeña área en el
          Gran Londres. La conurbación moderna de Londres se desarrolló
          alrededor de la City y la cercana ciudad de Westminster, la cual es el
          centro del gobierno real.
        </article>
        <a href="https://visitlondon.com/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
