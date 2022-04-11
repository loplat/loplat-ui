grep -rl 'svg' ../generated/*.tsx | xargs sed -i '' -e 's/<svg/<Svg {...marginSpacingProps(props)}/'
grep -rl 'svg' ../generated/*.tsx | xargs sed -i '' -e 's/svg>/Svg>/'