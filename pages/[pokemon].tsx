import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import RestClient from '@api/RestClient';

import Default from '@layout/Default/Default';
import PagePokemon from './components/PagePokemon';

import ErrorPage from 'next/error';

interface Data {
  quote: string;
  uid: string;
}

const Quote: NextPage<{ data: Data }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Default>
        <PagePokemon data={props.data} />
      </Default>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { pokemon } = params;
    const data = await RestClient.get(`pokemon/${pokemon}`).then((response) => response.data);

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

export default Quote;