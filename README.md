# Short Javascript Snippets and Documentation

# short-js-doc  

  A collection of Javascript snippets for faster developmment in Visual Studio Code Based on JsDuck Ducumentation implenting for Sencha Ext JS 
- [Author Tag Information - jsduck](#authortaginformation-jsduck)
- [Ext Definition - jsduck](#extdefinition-jsduck)
- [Property documentation - jsduck](#propertydocumentation-jsduck)
- [Property definition - jsduck](#propertydefinition-jsduck)
- [Property](#property)
- [Same Property](#sameproperty)
- [Model Property ](#modelproperty)
- [Bind Property](#bindproperty)
- [Bind configuration](#bindconfiguration)
- [Array Property](#arrayproperty)
- [Object Property](#objectproperty)
- [Context Tag](#contexttag)
- [Console Debug - Ext JS](#consoledebug-extjs)
- [Comment code](#commentcode)
- [Update Function](#updatefunction)
- [Set & Get Property](#set&getproperty)
- [Control variables](#controlvariables)
- [Ext.Log](#ext.log)
- [Function property](#functionproperty)
- [Method property](#methodproperty)
- [Ext Widget](#extwidget)
- [Call Function](#callfunction)


### Example:  

### `at + tab` Author Tag Information - jsduck
```
/**
 * @author ${user:MYAX} <${email:mig_dj@hotmail.com}>
 * date ${month}/${day}/${year}
 * ${description}
 */
``` 

### `ed + tab` Ext Definition - jsduck
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

### `pt + tab` Property documentation - jsduck
```
@${1:mode} {${2:String}} ${3:name}  `${4:default}` ${5:description}
``` 

### `pd + tab` Property definition - jsduck
```
/*
 * @${mode:cfg} {${type:String}} ${name}  `${default}` ${description}
 */
${name}${op::} ${default:null}${1:,}
``` 

### `pp + tab` Property
```
${property}: ${default:null}${1:,}
``` 

### `sp + tab` Same Property
```
${property}: ${1}${property} ${2:,}
``` 

### `gp + tab` Model Property 
```
${property}${op::} ${model:model}.${method:get}('${dataIndex}')${1:,}
``` 

### `bp + tab` Bind Property
```
${property}: '{${value}}'${1:,}
``` 

### `bind + tab` Bind configuration
```
${name:bind}:{
	${property}:'{${value}}'${1:,}
}${2:,}
``` 

### `ap + tab` Array Property
```
${name}${op::} [${1}]${2:,}
``` 

### `op + tab` Object Property
```
${name}${op::} {
	${property}: ${value:''}${1:,}
}${2:,}
``` 

### `ct + tab` Context Tag
```
@${1:private} ${2:args}
``` 

### `cd + tab` Console Debug - Ext JS
```
//<debug>
	console.${log}('${debug}', ${arguments});
//</debug>
``` 

### `cc + tab` Comment code
```
/**
 * ${1}
 */
``` 

### `uf + tab` Update Function
```
 /**
  * @${private}
  */
update${Property}: function (new${Property}, old${Property}) {
	${2}
},${3}
``` 

### `sg + tab` Set & Get Property
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

### `cv + tab` Control variables
```
var ${me} = this,
	${view} = ${me}.getView(),
	${model} = ${me}.getViewModel(),
	${refs} = ${me}.getReferences();
``` 

### `el + tab` Ext.Log
```
${Ext}.log({
	msg: '${message:debug}',
	level: '${type:warn}',
	dump: ${arguments},
	stack: ${false}
});
``` 

### `fp + tab` Function property
```
/**
 * ${name} ${description}
 * @${scope:private}
 */
${name}${1::} function (${2}) {
	${3}
},${4}
``` 

### `mp + tab` Method property
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

### `ew + tab` Ext Widget
```
Ext.${widget}('${xtype}'${1:,{${0}}});
``` 

### `cf + tab` Call Function
```
${function}(${1});
```