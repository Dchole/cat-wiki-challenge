import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Characteristics from "@/components/Characteristics";
import deslugify from "@/utils/deslugify";
import slugify from "@/utils/slugify";
import OtherPhotos from "@/components/OtherPhotos";
import { initializeApollo } from "@/apollo/client";
// @ts-ignore
import GET_BREED from "@/apollo/queries/get-breed.gql";
import { useGetBreedQuery } from "@/apollo/types/generated/client";
import type { Breed as TBreed } from "@/apollo/types/generated/server";

const Breed = () => {
  const { query } = useRouter();
  const breedName = deslugify(query.slug as string);
  const { data } = useGetBreedQuery({ variables: { name: breedName } });

  return (
    <>
      <Head>
        <title>{breedName}</title>
      </Head>
      <Container component="main">
        <Grid component="section" container>
          <Grid xs={12} sm={6} item>
            <Image
              src={data?.breed.image}
              alt={breedName}
              width={370}
              height={370}
              objectFit="cover"
              priority
            />
          </Grid>
          <Grid component="section" xs={12} sm={6} item>
            <Typography component="h1" variant="h4">
              {breedName}
            </Typography>
            <br />
            <Typography variant="body2">{data?.breed.description}</Typography>
            <br />
            <Characteristics breed={data?.breed} />
          </Grid>
          <OtherPhotos breedName={breedName} photos={data?.breed.photos} />
        </Grid>
      </Container>
    </>
  );
};

export default Breed;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch("https://api.thecatapi.com/v1/breeds").then(res =>
    res.json()
  );

  return {
    paths: data.map((breed: TBreed) => ({
      params: { slug: slugify(breed.name) }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BREED,
    variables: {
      name: deslugify(params.slug as string)
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};
