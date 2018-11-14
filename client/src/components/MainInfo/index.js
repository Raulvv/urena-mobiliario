import React, { Component } from 'react';

export default class MainContainer extends Component {
  render() {
    return (
      <section className="MainContainer-mainInfo">
        <div className="MainContainer-mainInfo-image">
          <img alt="example" src="./images/multipuesto.jpg" />
        </div>
        <div className="MainContainer-companyInfo">
          <h2>Quienes somos</h2>
          <p>Nuestra empresa comenzó sus actividades en el año 1.972 como una empresa de Transformados metálicos. En 1.989 se constituyó como S.L. y se especializó en el mobiliario de oficina. En la actualidad UREÑA MOBILIARIO, S.L. cuenta en sus instalaciones con una tecnología punta y un personal ampliamente cualificado en todos sus procesos, con punzonadora cnc, plegadoras a control numérico, soldadura por puntos neumática, desengrase por inmersión, pintura polvo epoxílico, etc...

          Nuestros fabricados cubren una amplia gama de productos como podrán comprobar en las fotografías que les presentamos a continuación.
          </p>
        </div>
      </section>
    );
  }
}
