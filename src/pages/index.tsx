import Head from "next/head";
import Container from "@material-ui/core/Container";
import Hero from "@components/Hero";
import Discover from "@components/Discover";
import Brief from "@components/Brief";

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
