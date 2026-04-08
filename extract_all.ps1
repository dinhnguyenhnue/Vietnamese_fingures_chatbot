Add-Type -AssemblyName System.IO.Compression.FileSystem

function Extract-Docx ($filter, $outfile) {
    $targetFile = Get-ChildItem -Path "C:\Users\bmngu\Downloads\" -Filter $filter | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if (-not $targetFile) { Write-Output "Not found: $filter"; return }
    Write-Output "Extracting $($targetFile.FullName) to $outfile"
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
    Out-File -FilePath "d:\4_Final_year\NCKH\Lichsu\website\$outfile" -InputObject ($textLines -join "`n") -Encoding UTF8
}

Extract-Docx "*Nguy*n Tr*i*(1).docx" "nguyen_trai.txt"
if (-not (Test-Path "d:\4_Final_year\NCKH\Lichsu\website\nguyen_trai.txt")) { Extract-Docx "*Nguy*n Tr*i*.docx" "nguyen_trai.txt" }
Extract-Docx "*L* Quy D*n.docx" "le_quy_don.txt"
if (-not (Test-Path "d:\4_Final_year\NCKH\Lichsu\website\le_quy_don.txt")) { Extract-Docx "*L* Qu* *n.docx" "le_quy_don.txt" }
