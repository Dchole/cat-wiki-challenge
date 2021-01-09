import { capitalize } from "@material-ui/core";

const deslugify = (slug?: string) =>
  slug === "pixie-bob"
    ? capitalize(slug)
    : slug === "chantilly-tiffany"
    ? slug
        .split("-")
        .map(value => capitalize(value))
        .join("-")
    : slug
        ?.split("-")
        .map(value => capitalize(value))
        .join(" ");

export default deslugify;
