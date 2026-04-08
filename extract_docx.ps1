Add-Type -AssemblyName System.IO.Compression.FileSystem
$targetFile = Get-ChildItem -Path "C:\Users\bmngu\Downloads\" -Filter "*Xu*n H*ng.docx" | Select-Object -First 1
Write-Output "Extracting from: $($targetFile.FullName)"
$zip = [System.IO.Compression.ZipFile]::OpenRead($targetFile.FullName)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()
$xmlDoc = New-Object System.Xml.XmlDocument
$xmlDoc.LoadXml($xml)
$nodes = $xmlDoc.GetElementsByTagName('w:t')
$textLines = foreach ($node in $nodes) { $node.InnerText }
Write-Output ($textLines -join "`n")
