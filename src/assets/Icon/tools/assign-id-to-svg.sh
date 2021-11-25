grep -rl 'uniqueId' ../generated/*.tsx | xargs sed -i '' -e 's/id="\(.*\)" /id={`\1__${uniqueId}`} /'
grep -rl 'uniqueId' ../generated/*.tsx | xargs sed -i '' -e 's/id="\(.*\)"/id={`\1__${uniqueId}`}/'
grep -rl 'uniqueId' ../generated/*.tsx | xargs sed -i '' -e 's/xlinkHref="\(.*\)"/xlinkHref={`\1__${uniqueId}`}/'
grep -rl 'uniqueId' ../generated/*.tsx | xargs sed -i '' -e 's/mask="url(#\(.*\))"/mask={`url(#\1__${uniqueId})`}/'
