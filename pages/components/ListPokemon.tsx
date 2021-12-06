import React from 'react';
import { PokemonClient } from 'pokenode-ts';
import {Col, Row} from "react-bootstrap";
import Link from 'next/link';

(async () => {
  const api = new PokemonClient(); // create an PokemonClient

  await api;
})();

class ListPokemon extends React.Component {
    url = "https://www.pokebip.com/pokedex-images/300/"
    extension = ".png"
    render() {
        return (
            this.props.data.results.map(
                (pokemon, index) => (
                  <Link 
                      href={{
                        pathname: '/[name]',
                        query: { name: this.props.data.name }, 
                    }} >
                  <Row key={index} className="border-top py-3">
                    <Col xs={2}>
                      <img width="50%" className="mx-3" src={this.url+(index+1)+this.extension}></img>
                    </Col>
                    <Col xs={10}>
                      <div>
                        <span>{pokemon.name}</span>
                        <span className="float-end">#{index+1}</span>
                      </div>
                    </Col>
                  </Row>
                  </Link>
                )
            )
        )
    }
}

export default ListPokemon