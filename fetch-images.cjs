const fs = require('fs');
const https = require('https');

const urls = [
    { name: 'capaescoladealtaperformance.png', url: 'https://pay.hotmart.com/E104288974O' },
    { name: 'capaexaustaomental.png', url: 'https://pay.hotmart.com/K103974973W' },
    { name: 'manualparamentesinabalaveis.png', url: 'https://pay.hotmart.com/H103540485G' },
    { name: 'opoderdaautoconfianca.png', url: 'https://pay.hotmart.com/N103541541Y' },
    { name: 'capadozeroaosonho.png', url: 'https://pay.hotmart.com/O104093531T' },
    { name: 'assinaturadivinanacriacao.png', url: 'https://pay.hotmart.com/A103540760S' },
    { name: 'capaojeitinhoresiliente.png', url: 'https://pay.hotmart.com/M103975108E' },
    { name: 'capaopoderdaverdade.png', url: 'https://pay.hotmart.com/V103975180N' },
    { name: 'capaostresdsdariqueza.png', url: 'https://pay.hotmart.com/M103975294N' },
    { name: 'omaiorliderdahistoria.png', url: 'https://pay.hotmart.com/M103540635M' },
    { name: 'otempodecadasentimento.png', url: 'https://pay.hotmart.com/R103540682X' }
];

async function download() {
    for (const item of urls) {
        console.log('Fetching', item.name, 'from', item.url);
        try {
            const htmlRes = await fetch(item.url);
            const html = await htmlRes.text();
            const match = html.match(/https:\/\/[^"]+\.(?:jpg|jpeg|png|webp)/i);
            if (match) {
                let imgUrl = match[0];
                console.log('  Found image:', imgUrl);
                const imgRes = await fetch(imgUrl);
                const imgBuf = await imgRes.arrayBuffer();
                fs.writeFileSync('public/' + item.name, Buffer.from(imgBuf));
                console.log('  Saved', item.name);
            } else {
                console.log('  No image found for', item.name);
            }
        } catch (e) {
            console.error('Error on', item.name, e);
        }
    }
}

download();
