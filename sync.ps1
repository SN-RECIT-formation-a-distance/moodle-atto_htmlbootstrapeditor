$from = "moodle-atto_htmlbootstrapeditor/src/*"
$to = "shared/recitfad3/lib/editor/atto/plugins/htmlbootstrapeditor"
$source = "./src";

try {
    . ("..\sync\watcher.ps1")
}
catch {
    Write-Host "Error while loading sync.ps1 script." 
}