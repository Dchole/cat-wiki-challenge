import { GetStaticProps } from "next";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PopularBreeds from "@/components/PopularBreeds";
import { initializeApollo } from "@/apollo/client";
// @ts-ignore
import GET_POPULAR_BREEDS from "../apollo/queries/get-popular-breeds.gql";

const Popular = () => {
  return (
    <>
      <Head>
        <title>Most Searched Breeds</title>
      </Head>
      <Container component="main" maxWidth="md">
        <Typography component="h1" variant="h3">
          Top 10 most searched breeds
        </Typography>
        <PopularBreeds />
      </Container>
    </>
  );
};

export default Popular;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POPULAR_BREEDS,
    variables: {
      limit: 10,
      sortBy: "POPULAR"
    }
  });

  return {
    revalidate: 60,
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};
