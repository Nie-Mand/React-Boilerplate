export default {
    env: {},
    mount: {
      public: '/',
      src: '/dist',
    },
    packageOptions: {
      types: true,
    },
    devOptions: {
      port: 666,
      tailwindConfig: './tailwind.config.js',
    },
    routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
    plugins: [
      '@snowpack/plugin-postcss',
      '@snowpack/plugin-sass',
      '@snowpack/plugin-dotenv',
      [
        '@snowpack/plugin-babel',
        {
          input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
  