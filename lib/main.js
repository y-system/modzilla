var data = require("self").data; 
var pageMod = require("page-mod"); 
pageMod.PageMod({
  include: "*", 
  contentScriptWhen: 'end', 
  contentScriptFile: data.url("modmozilla.js")
});
