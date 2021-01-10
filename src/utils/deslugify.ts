import { capitalize } from "@material-ui/core";

const deslugify = (slug: string) => {
  switch (slug) {
    case "pixie-bob":
      return capitalize(slug);

    case "laperm":
      return capitalize(slug.replace("p", "P"));

    case "chantilly-tiffany":
      return slug
        .split("-")
        .map(value => capitalize(value))
        .join("-");

    default:
      return slug
        .split("-")
        .map(value => capitalize(value))
        .join(" ");
  }
};

export default deslugify;
