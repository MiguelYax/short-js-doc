/**
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 3/31/2017
 * generate readme.md based snippet's definition
 */

const { writeFile } = require('fs');
const pkg = require('./package.json');
const rawSnippets = require('./snippets/short-js-doc.json');

const contentList = ['## Content:'];
const exampleList = ['## Example:'];

Object
  .keys(rawSnippets)
  .sort()
  .forEach((name) => {
    const { description, prefix, body } = rawSnippets[name];
    const lowerName = description.replace(/\s+/g, '-').toLowerCase();
    contentList.push(`- [${description}](#${lowerName})`);
    exampleList.push(
      `## ${description}`,
      `### \`${prefix} + tab\``,
      '```',
      ...body,
      '```',
    );
  });

const docContent = [
  `# ${pkg.displayName}`,
  `# ${pkg.description}`,
  ...contentList,
  ...exampleList,
];

writeFile('README.md', docContent.join('\n'), (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Writed');
});
