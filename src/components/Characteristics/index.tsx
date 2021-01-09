import dynamic from "next/dynamic";
import splitObjectKey from "@/utils/splitObjectKey";
import useCharacteristicsStyles from "./useCharacteristicsStyles";
import { GetBreedQuery } from "@/apollo/types/generated/client";

const More = dynamic(() => import("./More"));

const Details: React.FC<GetBreedQuery> = ({ breed }) => {
  const classes = useCharacteristicsStyles();

  const { __typename, id, name, description, image, photos, ...rest } = breed;

  return (
    <section id="characteristics" className={classes.root}>
      {Object.entries(rest)
        .slice(0, 3)
        .map(([key, value]) => (
          <div key={key}>
            <b>{splitObjectKey(key)}</b>: <span>{value}</span>
          </div>
        ))}

      <More data={rest} />
    </section>
  );
};

export default Details;
