<?php
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

defined('MOODLE_INTERNAL') || die();
require_once($CFG->dirroot . '/admin/tool/htmlbootstrapeditor/lib.php');

/**
 * DEPRECATED since Moodle 4.4
 */
function atto_htmlbootstrapeditor_before_standard_top_of_body_html() {
    global $PAGE, $CFG;

    $PAGE->requires->js('/lib/editor/atto/plugins/htmlbootstrapeditor/content.js');
    tool_htmlbootstrapeditor_inject_js();
}
/**
 * Initialise the js strings required for this module.
 */
function atto_htmlbootstrapeditor_strings_for_js() {
    global $PAGE; 

    tool_htmlbootstrapeditor_strings_for_js();
    tool_htmlbootstrapeditor_init_settings();
    
    $PAGE->requires->strings_for_js(array('pluginname','htmleditor'
                                        ),
                                    'atto_htmlbootstrapeditor');
}
