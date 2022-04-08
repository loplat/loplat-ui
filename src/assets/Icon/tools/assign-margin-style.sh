grep -rl 'svg' ../generated/*.tsx | xargs sed -i '' -e 's/<svg/<Wrapper {...marginSpacingProps(props)}/'
grep -rl 'svg' ../generated/*.tsx | xargs sed -i '' -e 's/svg>/Wrapper>/'