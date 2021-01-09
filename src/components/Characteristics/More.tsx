import clsx from "clsx";
import splitObjectKey from "@/utils/splitObjectKey";

interface IMoreProps {
  data: any;
}

const More: React.FC<IMoreProps> = ({ data }) => {
  return (
    <>
      {Object.entries(data)
        .slice(3)
        .map(([key, value]) => (
          <div className="with-bars" key={key}>
            <b>{splitObjectKey(key)}:</b>
            <div className="bars">
              {[1, 2, 3, 4, 5].map(v => (
                <div
                  className={v <= value ? clsx("bar", "fill") : "bar"}
                  key={v}
                />
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default More;
