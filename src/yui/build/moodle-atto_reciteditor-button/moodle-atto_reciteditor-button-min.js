YUI.add("moodle-atto_htmlbootstrapeditor-button",function(e,t){e.namespace("M.atto_htmlbootstrapeditor").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){this.addButton({title:"htmleditor",icon:"html",iconComponent:"atto_htmlbootstrapeditor",callback:this.openHtmlEditor,buttonName:"htmleditor"})},globalVars:{popup:null},openHtmlEditor:function(e){var n;e.preventDefault(),null===this.globalVars.popup||this.globalVars.popup.closed?(n=this,e=M.cfg.wwwroot,e+="/lib/editor/atto/plugins/htmlbootstrapeditor/view.php",this.globalVars.popup=window.open(e,"HTML Bootstrap Editor","scrollbars=1"),this.globalVars.popup.IWrapper={getSettings:null,uploadFile:null,getThemeCssRules:null,getThemeUrl:null,getContent:null,saveContent:null,getTemplateList:null,saveTemplate:null},this.globalVars.popup.IWrapper.getSettings=function(){var e={};return e.wwwroot=M.cfg.wwwroot,e.showcase_url=M.recit.htmlbootstrapeditor.settings.showcase_url,e.iconclass=M.recit.htmlbootstrapeditor.settings.iconclass,e.pixabaykey=M.recit.htmlbootstrapeditor.settings.pixabaykey,e},this.globalVars.popup.IWrapper.uploadFile=function(e,t,r){var o=n.getFileTransferData();let i=new XMLHttpRequest;i.onreadystatechange=()=>r(i);let p=new FormData;p.append("repo_upload_file",t),p.append("itemid",o.itemid),p.append("env",o.env),p.append("repo_id",o.repo_id),p.append("sesskey",M.cfg.sesskey),p.append("client_id",o.client_id),p.append("savepath","/"),p.append("ctx_id",M.cfg.contextid),p.append("license",o.license),p.append("author",o.author);o=e.split(".");e=[o[0]||"",o[1]||""],p.append("title",`${e[0].substr(0,255)}.${e[1]}`),i.open("POST",M.cfg.wwwroot+"/repository/repository_ajax.php?action=upload",!0),i.send(p)},this.globalVars.popup.IWrapper.getThemeCssRules=function(e){var t,r,o=window.document.styleSheets,i={rules:[],url:[]},p=M.recit.htmlbootstrapeditor.settings.stylesheet_to_add,p=p?p.split(","):[];for(t of o)if(t.href&&t.href.includes(`/theme/styles.php/${M.cfg.theme}`)||p.includes(t.title)||p.includes(t.href)){if(null==t.href||e)for(r of t.rules)i.rules.push(r);t.href&&i.url.push(t.href)}return i},this.globalVars.popup.IWrapper.getThemeUrl=function(){return`${M.cfg.wwwroot}/theme/styles.php/${M.cfg.theme}/${M.cfg.themerev}_${M.recit.htmlbootstrapeditor.settings.currentthemesubrev}/all`},this.globalVars.popup.IWrapper.get_string=function(e,t){if("undefined"==typeof M)return e;let r=M||window.parent.M;return r.util.get_string(e,"atto_htmlbootstrapeditor")},this.getFileTransferData=function(){var e,t=n.get("host"),r=t.get("filepickeroptions").image||{},o={repo_id:0};for(e in o.client_id=r.client_id||0,o.env=r.env||"",o.license=r.defaultlicense||"",o.itemid=r.itemid||0,o.author=r.author||"",e="",r.repositories)if("upload"===r.repositories[e].type){o.repo_id=r.repositories[e].id;break}for(e in r.licenses)if("cc"===r.licenses[e].shortname){o.license=r.licenses[e].shortname;break}return o},this.globalVars.popup.IWrapper.getContent=function(){return n.editor.getHTML()},this.globalVars.popup.IWrapper.setContent=function(e){n.editor.setHTML(e),n.globalVars.popup.close()},this.globalVars.popup.IWrapper.saveTemplate=function(e){return n.queryMoodle("atto_htmlbootstrapeditor_save_template",e)},this.globalVars.popup.IWrapper.getTemplateList=function(e){return n.queryMoodle("atto_htmlbootstrapeditor_get_template_list",{type:e})},this.globalVars.popup.IWrapper.deleteTemplate=function(e){return n.queryMoodle("atto_htmlbootstrapeditor_delete_template",{id:e})},this.globalVars.popup.IWrapper.importTemplates=function(e){return n.queryMoodle("atto_htmlbootstrapeditor_import_templates",{fileContent:e})},this.post=function(t,r){return new Promise((o,i)=>{r=JSON.stringify(r);let e=new XMLHttpRequest;e.open("post",t,!0),e.setRequestHeader("Content-Type","application/json; charset=utf-8"),e.setRequestHeader("Accept","json"),e.onload=function(e){let t=null;try{t=JSON.parse(e.target.response)}catch(r){i(r,e.target.response)}o(t)},e.onerror=function(e){i(e)},e.send(r)})},this.queryMoodle=function(e,t,r){return n.post(M.cfg.wwwroot+"/lib/ajax/service.php?sesskey="+M.cfg.sesskey+"&info="+e,[{index:0,args:t,methodname:e}],r)}):this.globalVars.popup.focus()}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});