module.exports = {
  images: {
    domains: ["cdn2.thecatapi.com"]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  }
};
