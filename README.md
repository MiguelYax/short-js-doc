# Short Javascript Snippets and Documentation  
 # short-js-doc  

  A collection of Javascript snippets for faster developmment in Visual Studio Code Based on JsDuck Ducumentation implenting for Sencha Ext JS 
- [Author Tag Information - jsduck](#author-tag-information---jsduck)
- [Ext Definition - jsduck](#ext-definition---jsduck)
- [Property documentation - jsduck](#property-documentation---jsduck)
- [Property definition - jsduck](#property-definition---jsduck)
- [Property](#property)
- [Same Property](#same-property)
- [Model Property ](#model-property-)
- [Bind Property](#bind-property)
- [Bind configuration](#bind-configuration)
- [Array Property](#array-property)
- [Object Property](#object-property)
- [Context Tag](#context-tag)
- [Console Debug - Ext JS](#console-debug---ext-js)
- [Comment code](#comment-code)
- [Update Function](#update-function)
- [Set & Get Property](#set-&-get-property)
- [Control variables](#control-variables)
- [Ext.Log](#ext.log)
- [Function property](#function-property)
- [Method property](#method-property)
- [Ext Widget](#ext-widget)
- [Call Function](#call-function)


### Example:  

### Author Tag Information - jsduck
#### `at+tab` 
```
/**
 * @author ${user:MYAX} <${email:mig_dj@hotmail.com}>
 * date ${month}/${day}/${year}
 * ${description}
 */
``` 

### Ext Definition - jsduck
#### `ed+tab` 
```
/**
 * @class ${name}
 * @extends ${extend}
 * @alternateClassName ${alternateName} 
 * @xtype ${xtype}
 * ${description}
 */
Ext.define('${name}', {
	extend: '${extend}',
	alternateClassName: '${alternateName}',
	xtype: '${xtype}',
	//requires: [${1}],
	initComponent: function (){
		var ${me} = this,
			${Ex} = Ext;

		${Ex}.apply(${me}, {
 		 	items: [${args:}]
		});
		${me}.callParent(${arguments});
	}
});
``` 

### Property documentation - jsduck
#### `pt+tab` 
```
@${1:mode} {${2:String}} ${3:name}  `${4:default}` ${5:description}
``` 

### Property definition - jsduck
#### `pd+tab` 
```
/*
 * @${mode:cfg} {${type:String}} ${name}  `${default}` ${description}
 */
${name}${op::} ${default:null}${1:,}
``` 

### Property
#### `pp+tab` 
```
${property}: ${default:null}${1:,}
``` 

### Same Property
#### `sp+tab` 
```
${property}: ${1}${property} ${2:,}
``` 

### Model Property 
#### `gp+tab` 
```
${property}${op::} ${model:model}.${method:get}('${dataIndex}')${1:,}
``` 

### Bind Property
#### `bp+tab` 
```
${property}: '{${value}}'${1:,}
``` 

### Bind configuration
#### `bind+tab` 
```
${name:bind}:{
	${property}:'{${value}}'${1:,}
}${2:,}
``` 

### Array Property
#### `ap+tab` 
```
${name}${op::} [${1}]${2:,}
``` 

### Object Property
#### `op+tab` 
```
${name}${op::} {
	${property}: ${value:''}${1:,}
}${2:,}
``` 

### Context Tag
#### `ct+tab` 
```
@${1:private} ${2:args}
``` 

### Console Debug - Ext JS
#### `cd+tab` 
```
//<debug>
	console.${log}('${debug}', ${arguments});
//</debug>
``` 

### Comment code
#### `cc+tab` 
```
/**
 * ${1}
 */
``` 

### Update Function
#### `uf+tab` 
```
 /**
  * @${private}
  */
update${Property}: function (new${Property}, old${Property}) {
	${2}
},${3}
``` 

### Set & Get Property
#### `sg+tab` 
```
/**
 * @param {${type}} ${name}  `${default}` ${description} 
 * @${public}
 */
set${prop:Property}${op::} function (${name}) {
	var old${name} = this.${name};
	if (${name} !== old${name}) {
		this.${name} = ${name};
		//this.update${prop}(${name}, old${name});
   }
},
/**
 * @return {${type}} ${name} `${default}` ${description} 
 * @${public}
 */
get${prop:Property}${op::} function () {
	var ${name} = this.${name} || ${default};
	${1}
	return ${name};
},${2}
``` 

### Control variables
#### `cv+tab` 
```
var ${me} = this,
	${view} = ${me}.getView(),
	${model} = ${me}.getViewModel(),
	${refs} = ${me}.getReferences();
``` 

### Ext.Log
#### `el+tab` 
```
${Ext}.log({
	msg: '${message:debug}',
	level: '${type:warn}',
	dump: ${arguments},
	stack: ${false}
});
``` 

### Function property
#### `fp+tab` 
```
/**
 * ${name} ${description}
 * @${scope:private}
 */
${name}${1::} function (${2}) {
	${3}
},${4}
``` 

### Method property
#### `mp+tab` 
```
/**
 * @method ${name} ${desc:description}
 * @return {${type}} ${variable} `${default}` ${description}
 * @${scope:private}
 */
${name}${op::} function (${1}) {
	var ${variable} = ${default:null};
	${2}
	return ${variable};
},${3}
``` 

### Ext Widget
#### `ew+tab` 
```
Ext.${widget}('${xtype}'${1:,{${0}}});
``` 

### Call Function
#### `cf+tab` 
```
${function}(${1});
``` 