import Head from "next/head";
import Container from "@material-ui/core/Container";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import Brief from "@/components/Brief";
import { GET_BREED } from "apollo/queries";
import { useQuery } from "@apollo/client";

const Index = () => {
  const { data } = useQuery(GET_BREED, { variables: { name: "Abyssinian" } });
  console.log(data);

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
