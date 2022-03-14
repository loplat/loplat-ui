cd svgs
npx @svgr/cli@5.5.0 --template ../tools/svgr-cli.template.js --config-file ../tools/.svgrrc *.svg --out-dir ../generated --ext tsx
node ../tools/generate-export.js
cd ../generated && prettier --write .