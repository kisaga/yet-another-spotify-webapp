$serverFolder= "C:\Apache24\htdocs"
Copy-Item -Path ".\*" -Exclude ".git","*.md","*.ps1",".gitignore" -Destination  $serverFolder -Recurse -force 