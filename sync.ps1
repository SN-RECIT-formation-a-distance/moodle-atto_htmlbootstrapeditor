$from = "moodle-atto_htmlbootstrapeditor/src/*"
$to = "shared/recitfad/lib/editor/atto/plugins/htmlbootstrapeditor"

try {
    . ("..\sync\watcher.ps1")
}
catch {
    Write-Host "Error while loading sync.ps1 script." 
}