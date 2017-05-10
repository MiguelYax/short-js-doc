/**
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 3/31/2017
 * generate readme.md based snippet's definition
 */

let fs = require('fs');
const package = require('./package.json');
const rawSnippets = require('./snippets/short-js-doc.json');

let contentList = [];
let documentList = [];


String.prototype.toCamelCase = function () {
    return this.replace(/[^a-z ]/ig, '')  // Replace everything but letters and spaces.
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, // Find non-words, uppercase letters, leading-word letters, and multiple spaces.
        function (match, index) {
            return +match === 0 ? "" : match[index === 0 ? 'toLowerCase' : 'toUpperCase']();
        });
};


let keyList = Object.keys(rawSnippets);
keyList.sort();
for (let index = 0; index < keyList.length; index++) {
    let name = keyList[index];
    let snippet = rawSnippets[name];
    let lowerName = snippet.description.toCamelCase();
    contentList.push('- [' + snippet.description + '](#' + lowerName.toLowerCase() + ')\n');
    documentList.push('### ' + lowerName + '\n');
    documentList.push('#### `' + snippet.prefix + ' + tab` \n');
    documentList.push('```\n' + snippet.body.join('\n') + '\n``` \n\n');

}
let docContent = '# ' + package.displayName + '  \n' + package.name + '  \n\n  # ' + package.description + ' \n';
// docContent += "### Basic documetation example: \n\n";
// docContent += '![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/basic.gif) \n';
// docContent += "### Custom documentation example: \n\n";
// docContent += '![Image of Snippets](https://raw.githubusercontent.com/Krazeus/ApiDocSnippets/master/images/custom.gif) \n';

docContent += '### Content:  \n\n';
docContent += contentList.join('') + '\n\n';
docContent += '### Example:  \n\n';
docContent += documentList.join('');

fs.writeFile('README.md', docContent, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Writed');
});
