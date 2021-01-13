const shorten = (description: string) => {
  const descArray = description.split(""); // Split characters into array
  descArray.length = 80; // Cut description into 80 characters

  return descArray.join("") + "..."; // Join array back into string and append "..." to it
};

export default shorten;
