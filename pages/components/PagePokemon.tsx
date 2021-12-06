import React from 'react';

import {Row, Col, Container} from "react-bootstrap";
import Pokemons from '..';

class PagePokemon extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <h1>POKEMON</h1>
                            <img width="100%" src="https://www.pokebip.com/pokedex-images/300/1.png" />
                        </Col>

                        <Col xs={9}>
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Aperçu stratégique
                                </div>
                                <table className="table table-condensed text-center">
                                    <tbody>
                                        <tr>
                                            <td>Tiers stratégiques</td>
                                            <td className="text-left">
                                                <button className="btn btn-primary btn-sm disabled">Aucun</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>PV</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar stats-bar-1"><strong>45</strong></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Attaque</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar stats-bar-1"><strong>49</strong></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Défense</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar stats-bar-1"><strong>49</strong></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Attaque spé</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar stats-bar-2"><strong>65</strong></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Défense spé</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar stats-bar-2"><strong>65</strong></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Vitesse</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar stats-bar-1"><strong>45</strong></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default PagePokemon