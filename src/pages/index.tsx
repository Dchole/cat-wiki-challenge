import type { GetStaticProps } from "next";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import Brief from "@/components/Brief";
import { initializeApollo } from "@/apollo/client";
// @ts-ignore
import GET_BREEDS from "../apollo/queries/get-breeds.gql";

const Index = () => {
  return (
    <>
      <Head>
        <title>CatWiki</title>
      </Head>
      <Container component="main">
        <Hero />
        <Discover />
        <Brief />
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BREEDS,
    variables: {
      limit: 4,
      sortBy: "POPULAR"
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 60
  };
};
