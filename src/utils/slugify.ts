const slugify = (name: string) => name.toLowerCase().split(" ").join("-");
export default slugify;
