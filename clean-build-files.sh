rm -rf assets
rm -rf components
rm -rf core
rm -rf formControls
rm $(find *.js -not -name rollup.config.js)
rm *.js.map
rm index.d.ts
rm setupTests.d.ts
rm stats.html
