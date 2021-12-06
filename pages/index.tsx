import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import {Row} from "react-bootstrap";

import RestClient from '@api/RestClient';
import Default from '@layout/Default/Default';

import ListPokemon from './components/ListPokemon';

import ErrorPage from 'next/error';

const Pokemons: NextPage<{ data }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Default>
        <Row>
          <ListPokemon data={props.data} />
        </Row>
      </Default>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res, }) => {
  try {
    const data = await RestClient.get("pokemon-species/?limit=150").then((response) => response.data);

    return {
      props: {
        data: data,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default Pokemons