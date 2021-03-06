/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
    '@mui/material',
    '@mui/system',
    '@mui/icons-material', // If @mui/icons-material is being used
  ]);
  
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  ...withTM({
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
      };
      return config;
    }
  })
}

