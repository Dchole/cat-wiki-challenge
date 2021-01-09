const slugify = (name: string) =>
  encodeURIComponent(name.toLowerCase().split(" ").join("-"));
export default slugify;
