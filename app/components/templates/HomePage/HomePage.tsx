import "bootstrap/dist/css/bootstrap.min.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const HomePage = () => (
  <>
    <main>
      <Row>
        <Col xs={12} >
          <div className="row py-2 border-top">
              <div className="col-3">
                  <img className="mx-3" src="https://www.pokebip.com/pokedex/images/gen6_general/1.png" />
              </div>
              <div className="col-9">
                  <div>
                      <span className="">Bulbizarre</span>
                      <span className="float-end">#1</span>
                  </div>
                  <div>
                      <span>Plante</span>
                      <span>/</span>
                      <span>Poison</span>
                  </div>
              </div>
          </div>
        </Col>
      </Row>
    </main>
  </>
);

export default HomePage;
