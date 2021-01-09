import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import useOtherPhotosStyles from "./useOtherPhotosStyles";

interface IOtherPhotosProps {
  breedName: string;
  photos: {
    url: string;
  }[];
}

const OtherPhotos: React.FC<IOtherPhotosProps> = ({ breedName, photos }) => {
  const classes = useOtherPhotosStyles();

  return (
    <section id="other-photos" className={classes.root}>
      <Typography component="h2" variant="h5">
        Other Photos
      </Typography>
      <div className={classes.photos}>
        {photos.map(({ url }) => (
          <Image
            key={url}
            src={url}
            alt={breedName}
            width={278}
            height={278}
            objectFit="cover"
          />
        ))}
      </div>
    </section>
  );
};

export default OtherPhotos;
