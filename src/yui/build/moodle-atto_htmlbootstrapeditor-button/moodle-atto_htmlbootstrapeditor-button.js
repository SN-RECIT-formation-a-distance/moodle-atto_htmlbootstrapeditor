YUI.add('moodle-atto_htmlbootstrapeditor-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto HTML editor
 *
 * @package    atto_htmlbootstrapeditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
/**
     * @module moodle-atto_htmlbootstrapeditor-button
     */
    
    /**
     * Atto text editor vvvebjs plugin.
     *
     * @namespace M.atto_htmlbootstrapeditor
     * @class button
     * @extends M.editor_atto.EditorPlugin
     */

Y.namespace('M.atto_htmlbootstrapeditor').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    /**
     * Add the buttons to the toolbar
     *
     * @method initializer
     */
    initializer: function() {
        this.addButton({
            title: 'htmleditor',
            icon: 'html',
            iconComponent: 'atto_htmlbootstrapeditor',
            callback: this.openHtmlEditor,
            buttonName: 'htmleditor'
        });
    },

    globalVars: {popup: null},

    openHtmlEditor: function(e) {
        e.preventDefault();
       
        // if the reference exists and the window is not closed so we can bring it to the front with the method focus() method without having to recreate the window
        if(this.globalVars.popup !== null && !this.globalVars.popup.closed){
            this.globalVars.popup.focus();
            return;
        }

        var that = this;
       
        var url = M.cfg.wwwroot;
        url += "/lib/editor/atto/plugins/htmlbootstrapeditor/view.php";
        
        this.globalVars.popup = window.open(url,'HTML Bootstrap Editor','scrollbars=1');

        /*if (this.globalVars.popup.outerWidth < screen.availWidth || this.globalVars.popup.outerHeight < screen.availHeight){
            this.globalVars.popup.moveTo(0,0);
            this.globalVars.popup.resizeTo(screen.availWidth, screen.availHeight);
        }*/

        this.globalVars.popup.IWrapper = M.recit.htmlbootstrapeditor.IWrapper;
        

        this.globalVars.popup.IWrapper.uploadFile = function(filename, binFile, cb){
            

            let fileTransferData = that.getFileTransferData();
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => cb(xhr);

            let formData = new FormData();
            formData.append('repo_upload_file', binFile);
            formData.append('itemid', fileTransferData.itemid);
            formData.append('env', fileTransferData.env);
            formData.append('repo_id', fileTransferData.repo_id); 
            formData.append('sesskey', M.cfg.sesskey);
            formData.append('client_id', fileTransferData.client_id);
            formData.append('savepath', "/");
            formData.append('ctx_id', M.cfg.contextid);
            formData.append('license', fileTransferData.license);
            formData.append('author', fileTransferData.author);

            let tmp = filename.split(".");
            filename = [(tmp[0] || ""), (tmp[1] || "")];
            formData.append('title', `${filename[0].substr(0,255)}.${filename[1]}`);
        
            xhr.open("POST", M.cfg.wwwroot + '/repository/repository_ajax.php?action=upload', true);
            xhr.send(formData);
        };

        M.recit.htmlbootstrapeditor.IWrapper.getContent = function(){
            return that.editor.getHTML();
        };
        
        M.recit.htmlbootstrapeditor.IWrapper.setContent = function(htmlStr){
            that.editor.setHTML(htmlStr);
            that.globalVars.popup.close();
        };

        M.recit.htmlbootstrapeditor.IWrapper.get_string = function(str, resource){
            if (typeof M == 'undefined') return str;
            let moodle = M || window.parent.M;
            return moodle.util.get_string(str, 'tool_htmlbootstrapeditor');
        }

        this.getFileTransferData = function(){
            var host = that.get('host');
            var options = host.get('filepickeroptions').image || {};
            
            var result = {};
            result.repo_id = 0 || 0;
            result.client_id = options.client_id || 0;
            result.env = options.env || '';
            result.license = options.defaultlicense || '';
            result.itemid = options.itemid || 0;
            result.author = options.author || '';

            var attr = '';
            for(attr in options.repositories){
                if (options.repositories[attr].type === 'upload') {
                    result.repo_id = options.repositories[attr].id;
                    break;
                }
            }

            for(attr in options.licenses){
                if (options.licenses[attr].shortname === 'cc') { // creative commons
                    result.license = options.licenses[attr].shortname;
                    break;
                }
            }

            return result;
        }

    },
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
