rm -rf esm
rm -rf assets
rm -rf components
rm -rf core
rm -rf formControls
rm -rf functions
rm -rf utils
rm $(find *.js -not -name rollup.config.js)
rm *.js.map
rm index.d.ts
rm stats.html
