import { capitalize } from "@material-ui/core";

const splitObjectKey = (key: string) =>
  capitalize(
    key
      .split("")
      .map(ch => {
        if (ch === ch.toUpperCase()) {
          return " " + ch;
        }

        return ch;
      })
      .join("")
  );

export default splitObjectKey;
