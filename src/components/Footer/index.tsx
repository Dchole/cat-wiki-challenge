import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useFooterStyles from "./useFooterStyles";

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <Container component="footer" className={classes.footer}>
      <img src="/logo-white.svg" alt="logo" />
      <Typography component="span" variant="body2" align="center">
        &copy; Derek Oware - devchallenge.io
      </Typography>
    </Container>
  );
};

export default Footer;
