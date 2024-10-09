<?php
namespace atto_htmlbootstrapeditor\hook\output;

/**
 * Allows the plugin to add any elements to the head of a HTML document.
 *
 * @package    atto_htmlbootstrapeditor
 * @copyright  2024 RECITFAD
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

class before_standard_top_of_body_html_generation {
    public static function execute(\moodle_page $page, \core\output\standard_top_of_body_html $body) {
        global $CFG;

        try {
            $script = "<script src='%s'></script>";
            $html = sprintf($script, "{$CFG->wwwroot}/lib/editor/atto/plugins/htmlbootstrapeditor/content.js");
            $hook->add_html($html);

            tool_htmlbootstrapeditor_inject_js();

        } catch (\dml_read_exception $e) {
            return;
        }
    }
}