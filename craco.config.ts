const cracoAlias = require('craco-alias')

export default {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
}
