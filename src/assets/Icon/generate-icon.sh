cd svgs 
npx @svgr/cli@5.5.0 --template ../tools/svgr-cli.template.js --config-file ../tools/.svgrrc *.svg --out-dir ../generated --ext tsx
cd ../tools/ 
node generate-export.js 
source assign-id-to-svg.sh 
source assign-margin-style.sh
cd ../ && prettier --write .