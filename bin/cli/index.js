/**
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 3/31/2017
*/

/* eslint-disable import/no-extraneous-dependencies */
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { writeFile, readFile } = require('fs').promises;
const pkg = require('../../package.json');
const rawSnippets = require('../../snippets/short-js-doc.json');

const changelog = async () => {
  const content = await readFile('./CHANGELOG.md', { encoding: 'utf8' });
  const { npm_new_version } = process.env;
  if (npm_new_version && !content.includes(npm_new_version)) {
    const result = content.replace('## NEXT', `## NEXT \n\n## ${npm_new_version}`);
    await writeFile('./CHANGELOG.md', result, 'utf-8');
  }
};

const docs = async () => {
  const contentList = ['## Content:'];
  const exampleList = ['## Example:'];

  Object
    .keys(rawSnippets)
    .sort()
    .forEach((name) => {
      try {
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
      } catch (error) {
        console.error(`Error parsing: ${name} snippet. \n`, error);
      }
    });

  const docContent = [
    `# ${pkg.displayName}`,
    `# ${pkg.description}`,
    ...contentList,
    ...exampleList,
  ];

  await writeFile('README.md', docContent.join('\n'), 'utf-8');
};

yargs(hideBin(process.argv))
  .command('docs', 'Generate documentation', {}, docs)
  .command('changelog', 'Update Changelog.md', {}, changelog)
  .demandCommand(1)
  .parse();
