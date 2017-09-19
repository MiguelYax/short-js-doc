# Short JS Doc  
short-js-doc  

  # Short Javascript Snippets and Documentation based on JSDuck.  
 A collection of Javascript snippets for faster developmment in Visual Studio Code Based on JsDuck Ducumentation implenting for Sencha Ext JS. 
### Content:  

- [Access object property](#accessobjectproperty)
- [Array property](#arrayproperty)
- [Author Information](#authorinformation)
- [Bind configuration](#bindconfiguration)
- [Bind property](#bindproperty)
- [Comment code](#commentcode)
- [console debug block](#consoledebugblock)
- [call function](#callfunction)
- [Copyright Tag](#copyrighttag)
- [Context Tag](#contexttag)
- [Control variables](#controlvariables)
- [Deprecated Tag](#deprecatedtag)
- [Ext JS Class Definition](#extjsclassdefinition)
- [Equal name property and value](#equalnamepropertyandvalue)
- [Ext Widget](#extwidget)
- [Function Property](#functionproperty)
- [Get Property](#getproperty)
- [Generic Tag](#generictag)
- [Method Property](#methodproperty)
- [Object property](#objectproperty)
- [Property definition](#propertydefinition)
- [Property](#property)
- [Property Tag](#propertytag)
- [set and get property](#setandgetproperty)
- [String property](#stringproperty)
- [Todo Tag](#todotag)
- [update function property](#updatefunctionproperty)
- [Version Tag](#versiontag)
- [Ext log](#extlog)


### Example:  

### accessObjectProperty
#### `aop + tab` 
```
${1:object}[${2:'${3:property}'}];
``` 

### arrayProperty
#### `ap + tab` 
```
${1:name}${2::} [${3}]${4:,}
``` 

### authorInformation
#### `at + tab` 
```
/*!
 * @author ${1:user} <${2:email}>
 * date ${3:month}/${4:day}/${5:year}
 * ${6:description}
 */
``` 

### bindConfiguration
#### `bc + tab` 
```
${1:bind}:{
  ${2:property}:'{${3:value}}'${4:,}
}${5:,}
``` 

### bindProperty
#### `bp + tab` 
```
${1:property}: '{${2:value}}'${3:,}
``` 

### commentCode
#### `cc + tab` 
```
/**
 * ${1}
 */
``` 

### consoleDebugBlock
#### `cd + tab` 
```
//<debug>
${1}
console.${2:log}('${3:debug}', ${4:arguments});
//</debug>
``` 

### callFunction
#### `cf + tab` 
```
${1:function}(${2});
``` 

### copyrightTag
#### `crt + tab` 
```
/**
 * @copyright  ${1:name} ${2:year} 
 * ${3} 
 */
``` 

### contextTag
#### `ct + tab` 
```
@${1:private} ${2:args}
``` 

### controlVariables
#### `cv + tab` 
```
var ${1:me} = this,
  ${2:view} = ${1:me}.getView(),
  ${3:model} = ${1:me}.getViewModel(),
  ${4:refs} = ${1:me}.getReferences()${5:;}
``` 

### deprecatedTag
#### `dt + tab` 
```
/**
 * @deprecated   ${1} 
 */
``` 

### extJSClassDefinition
#### `ed + tab` 
```
/**
 * @class ${1:name}
 * @extends ${2:extend}
 * @alternateClassName ${3:alternateName} 
 * @xtype ${4:xtype}
 * ${5:description}
 */
Ext.define('${1:name}', {
  extend: '${2:extend}',
  alternateClassName: '${3:alternateName}',
  xtype: '${4:xtype}',
  ${6://}requires: [${7}],
  initComponent: function (){
    var ${8:me} = this,
      ${9:Ex} = Ext;

    ${9:Ex}.apply(${8:me}, {
      items: [${10:args:}]
    });
    ${8:me}.callParent(${11:arguments});
  }
});
``` 

### equalNamePropertyAndValue
#### `ep + tab` 
```
${1:property}${2::} ${3}${4:property} ${5:,}
``` 

### extWidget
#### `ew + tab` 
```
Ext.${widget}('${xtype}'${1:,{${0}}});
``` 

### functionProperty
#### `fp + tab` 
```
/**
 * ${1:name} ${2:description}
 * @${3:private}
 */
${1:name}${4::} function (${5}) {
  ${6}
}${7:,}
``` 

### getProperty
#### `gp + tab` 
```
${1:property}${2::} ${3:model}.${4:get}('${5:dataIndex}')${6:,}
``` 

### genericTag
#### `gt + tab` 
```
/**
 * @${1:tag} ${2} 
 */
``` 

### methodProperty
#### `mp + tab` 
```
/**
 * @method ${1:name} ${2:description}
 * @returns {${3:type}} ${4:property} `${5:default}` ${6:description}
 * @${7:private}
 */
 ${1:name}${9::} function (${10}) {
  var ${4:property} = ${5:null};
  ${13}
  return ${4:property};
}${15:,}
``` 

### objectProperty
#### `op + tab` 
```
${1:name}${2::} {
  ${3:${4:property}: ${5:''}${6:,}}
}${7:,}
``` 

### propertyDefinition
#### `pd + tab` 
```
/*
 * @${1:cfg} {${2:type}} ${3:name}  `${4:default}` ${5:description}
 */
${3:name}${6::} ${4:null}${7:,}
``` 

### property
#### `pp + tab` 
```
${1:property}${2::} ${3:null}${4:,}
``` 

### propertyTag
#### `pt + tab` 
```
@${1:mode} {${2:type}} ${3:name}  `${4:default}` ${5:description}
``` 

### setAndGetProperty
#### `sg + tab` 
```
/**
 * @param {${1:type}} ${2:name}  `${3:default}` ${4:description} 
 * @${5:public}
 */
set${6:Property}${7::} function (${2:name}) {
  var old${2:name} = this.${2:name};
  if (${2:name} !== old${2:name}) {
    ${8}
    this.${2:name} = ${2:name};
    //this.update${6:Property}(${2:name}, old${2:name});
  }
}${10:,}
/**
 * @returns {${1:type}} ${2:name} `${3:default}` ${4:description} 
 * @${5:public}
 */
get${6:Property}${7::} function () {
  var ${2:name} = this.${2:name} || ${3:default};
  ${9}
  return ${2:name};
}${10:,}
``` 

### stringProperty
#### `sp + tab` 
```
${1:property}${2::} '${3:value}'${4:,}
``` 

### todoTag
#### `td + tab` 
```
/**
 * @todo ${1:description}
 */
``` 

### updateFunctionProperty
#### `uf + tab` 
```
 /**
  * @${1:private}
  */
update${2:Property} ${3::} function (new${2:Property}, old${2:Property}) {
  ${4}
}${3:,}
``` 

### versionTag
#### `vt + tab` 
```
/**
 * @version ${1:major}${2:minor}${2:patch} 
 */
``` 

### extLog
#### `xl + tab` 
```
${Ext}.log({
  msg: '${message:debug}',
  level: '${type:warn}',
  dump: ${arguments},
  stack: ${false}
});
``` 

