import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const files = [
    'files/Agile PRBL Report.docx',
    'files/Cognitive guardian.docx',
    'files/retail pos.docx'
];

files.forEach(file => {
    try {
        const tempName = `tmp_${Date.now()}_${Math.floor(Math.random()*1000)}`;
        const zipFile = tempName + '.zip';
        fs.copyFileSync(file, zipFile);
        
        execSync(`powershell -Command "Expand-Archive -Path '${zipFile}' -DestinationPath '${tempName}' -Force"`);
        const xmlPath = path.join(tempName, 'word', 'document.xml');
        const xml = fs.readFileSync(xmlPath, 'utf8');
        
        const matches = xml.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
        const text = matches.map(m => m.replace(/<[^>]+>/g, '')).join('');
        
        console.log(`\n=== ${file} ===\n`);
        console.log(text.substring(0, 500) + '...');
        
        execSync(`powershell -Command "Remove-Item -Recurse -Force '${tempName}'"`);
        fs.unlinkSync(zipFile);
    } catch (e) {
        console.error(`Error reading ${file}:`, e.message);
    }
});
