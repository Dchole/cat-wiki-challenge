import Image from "next/image";
import Box from "@material-ui/core/Box";
import Link from "@/components/Link";
import Typography from "@material-ui/core/Typography";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import useBriefStyles from "./useBriefStyles";

const imageDimensions = [
  { width: "274", height: "167" },
  { width: "195", height: "293" },
  { width: "238", height: "386" }
];

const Brief = () => {
  const classes = useBriefStyles();

  return (
    <Box
      component="section"
      display="flex"
      gridGap={45}
      justifyContent="space-between"
      alignItems="center"
      p={[2, 5, 10]}
      className={classes.root}
    >
      <section className={classes.brief}>
        <Typography component="h2" variant="h3">
          Why should you have a cat?
        </Typography>
        <Typography>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </Typography>
        <Link href="/more">
          <span>Read more</span> <ArrowRightAltIcon />
        </Link>
      </section>
      <section className={classes.images}>
        {imageDimensions.map((dimension, index) => (
          <div key={index}>
            <Image
              src={`/image ${index + 1}.png`}
              alt="cat"
              width={dimension.width}
              height={dimension.height}
            />
          </div>
        ))}
      </section>
    </Box>
  );
};

export default Brief;
