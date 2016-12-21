/**
 * @author MYAX <mig_dj@hotmail.com>
 * date 12/16/2016
 * document snippet writed
 */
window.onload = function () {
  var rawSnippets = {
    /*
    * @author MYAX <mig_dj@hotmail.com>
    * @date 7/8/16
    * @description javascript documentations - jsduck sintaxis  
    */
    "Author Tag Information - jsduck": {
      "prefix": "at",
      "body": [
        "/**",
        " * @author ${user:MYAX} <${email:mig_dj@hotmail.com}>",
        " * date ${month}/${day}/${year}",
        " * ${description}",
        " */"
      ],
      "description": "Author Information"
    },
    "Ext Definition - jsduck": {
      "prefix": "ed",
      "body": [
        "/**",
        " * @class ${name}",
        " * @extends ${extend}",
        " * @alternateClassName ${alternateName} ",
        " * @xtype ${xtype}",
        " * ${description}",
        " */",
        "Ext.define('${name}', {",
        "	extend: '${extend}',",
        "	alternateClassName: '${alternateName}',",
        "	xtype: '${xtype}',",
        "	//requires: [${1}],",
        "	initComponent: function (){",
        "		var ${me} = this,",
        "			${Ex} = Ext;",
        "",
        "		${Ex}.apply(${me}, {",
        " 		 	items: [${args:}]",
        "		});",
        "		${me}.callParent(${arguments});",
        "	}",
        "});"
      ],
      "description": "Ext JS - Class Definition"
    },
    "Property documentation - jsduck": {
      "prefix": "pt",
      "body": [
        "@${1:mode} {${2:String}} ${3:name}  `${4:default}` ${5:description}"
      ],
      "description": "Property Tag"
    },
    "Property definition - jsduck": {
      "prefix": "pd",
      "body": [
        "/*",
        " * @${mode:cfg} {${type:String}} ${name}  `${default}` ${description}",
        " */",
        "${name}${op::} ${default:null}${1:,}"
      ],
      "description": "Property definition"
    },
    "Property": {
      "prefix": "pp",
      "body": [
        "${property}: ${default:null}${1:,}"
      ],
      "description": "Object property"
    },
    "Same Property": {
      "prefix": "sp",
      "body": [
        "${property}: ${1}${property} ${2:,}"
      ],
      "description": "Same property and value"
    },
    "Model Property ": {
      "prefix": "gp",
      "body": [
        "${property}${op::} ${model:model}.${method:get}('${dataIndex}')${1:,}"
      ],
      "description": "Object property"
    },
    "Bind Property": {
      "prefix": "bp",
      "body": [
        "${property}: '{${value}}'${1:,}"
      ],
      "description": "Bind property"
    },
    "Bind configuration": {
      "prefix": "bind",
      "body": [
        "${name:bind}:{",
        "	${property}:'{${value}}'${1:,}",
        "}${2:,}"
      ],
      "description": "Bind configuration"
    },
    "Array Property": {
      "prefix": "ap",
      "body": [
        "${name}${op::} [${1}]${2:,}"
      ],
      "description": "Array property"
    },
    "Object Property": {
      "prefix": "op",
      "body": [
        "${name}${op::} {",
        "	${property}: ${value:''}${1:,}",
        "}${2:,}"
      ],
      "description": "Array property"
    },
    "Context Tag": {
      "prefix": "ct",
      "body": [
        "@${1:private} ${2:args}"
      ],
      "description": "Context Tag"
    },
    "Console Debug - Ext JS": {
      "prefix": "cd",
      "body": [
        "//<debug>",
        "	console.${log}('${debug}', ${arguments});",
        "//</debug>"
      ],
      "description": "Debug Block Extjs"
    },
    "Comment code": {
      "prefix": "cc",
      "body": [
        "/**",
        " * ${1}",
        " */"
      ],
      "description": "comment code"
    },
    "Update Function": {
      "prefix": "uf",
      "body": [
        " /**",
        "  * @${private}",
        "  */",
        "update${Property}: function (new${Property}, old${Property}) {",
        "	${2}",
        "},${3}"
      ],
      "description": "update function property"
    },
    "Set & Get Property": {
      "prefix": "sg",
      "body": [
        "/**",
        " * @param {${type}} ${name}  `${default}` ${description} ",
        " * @${public}",
        " */",
        "set${prop:Property}${op::} function (${name}) {",
        "	var old${name} = this.${name};",
        "	if (${name} !== old${name}) {",
        "		this.${name} = ${name};",
        "		//this.update${prop}(${name}, old${name});",
        "   }",
        "},",
        "/**",
        " * @return {${type}} ${name} `${default}` ${description} ",
        " * @${public}",
        " */",
        "get${prop:Property}${op::} function () {",
        "	var ${name} = this.${name} || ${default};",
        "	${1}",
        "	return ${name};",
        "},${2}"
      ],
      "description": "set and get property"
    },
    "Control variables": {
      "prefix": "cv",
      "body": [
        "var ${me} = this,",
        "	${view} = ${me}.getView(),",
        "	${model} = ${me}.getViewModel(),",
        "	${refs} = ${me}.getReferences();"
      ],
      "description": "Control variables"
    },
    "Ext.Log": {
      "prefix": "el",
      "body": [
        "${Ext}.log({",
        "	msg: '${message:debug}',",
        "	level: '${type:warn}',",
        "	dump: ${arguments},",
        "	stack: ${false}",
        "});"
      ],
      "description": "Ext.log"
    },
    "Function property": {
      "prefix": "fp",
      "body": [
        "/**",
        " * ${name} ${description}",
        " * @${scope:private}",
        " */",
        "${name}${1::} function (${2}) {",
        "	${3}",
        "},${4}"
      ],
      "description": "Function Property"
    },
    "Method property": {
      "prefix": "mp",
      "body": [
        "/**",
        " * @method ${name} ${desc:description}",
        " * @return {${type}} ${variable} `${default}` ${description}",
        " * @${scope:private}",
        " */",
        "${name}${op::} function (${1}) {",
        "	var ${variable} = ${default:null};",
        "	${2}",
        "	return ${variable};",
        "},${3}"
      ],
      "description": "Method Property"
    },
    "Ext Widget": {
      "prefix": "ew",
      "body": [
        "Ext.${widget}('${xtype}'${1:,{${0}}});"
      ],
      "description": "Ext Widget"
    },
    "Call Function": {
      "prefix": "cf",
      "body": [
        "${function}(${1});"
      ],
      "description": "Ext Widget"
    }
  };


  var contentList = [];
  var documentList = [];

  var keyList = Object.keys(rawSnippets);

  for (var index = 0; index < keyList.length; index++) {
    var name = keyList[index];
    var snippet = rawSnippets[name];
    var lowerName = name.toLowerCase().replace(/\s/g, '-');
    // var lowerName = name;
    contentList.push('- [' + name + '](#' + lowerName + ')\n');
    documentList.push('### ' + name + '\n');
    documentList.push('#### `' + snippet.prefix + '+tab` \n');
    documentList.push('```\n' + snippet.body.join('\n') + '\n``` \n\n');

    var docContent = '# Short Javascript Snippets and Documentation  \n # short-js-doc  \n\n  A collection of Javascript snippets for faster developmment in Visual Studio Code Based on JsDuck Ducumentation implenting for Sencha Ext JS \n';
    docContent += contentList.join('') + '\n\n';
    docContent += '### Example:  \n\n';
    docContent += documentList.join('');
    var body = document.getElementsByTagName('div');
    if (body) {
      body.innerHTML = docContent;
    }
    console.log(docContent);
  }
};