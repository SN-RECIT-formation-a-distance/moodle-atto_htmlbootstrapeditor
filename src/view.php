<?php 

require('../../../../../config.php');
require_login();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css"  href="<?php echo $CFG->wwwroot; ?>/admin/tool/htmlbootstrapeditor/react/build/index.css">
    </head>
    <body>
        <div id="root"></div>
        <script type="text/javascript" src="<?php echo $CFG->wwwroot; ?>/admin/tool/htmlbootstrapeditor/react/build/index.js"></script>
    </body>
</html>