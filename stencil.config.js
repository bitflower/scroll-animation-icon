exports.config = {
  namespace: 'scroll-down-icon',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  globalStyle: 'src/global/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
