import sharp from 'sharp';

import fs from 'fs/promises';
const privateFolder = "private/artgallery/" 

fs.readdir( privateFolder ).then( files => {
    // fs.writeFile( 'images.json', JSON.stringify( files, null, 2 ) );
    files.forEach( file => {
        
        const neu = `${privateFolder}${ file }`;
        console.log(neu)
        sharp(neu)
        .resize(800)
        .composite([{ input: './wasserzeichen.png', gravity: 'center' }])
        .webp({lossless:false, quality: 60})
        .toFile( `./public/img/artgallery/${ file.replace(".png",".webp") } `)
//Bilder kleiner machen  
        sharp(neu)
        .resize(256)
        .webp({lossless:false, quality: 60})
        .toFile( `./public/img/artgallery/thumbnails/${ file.replace(".png",".webp") } `)
        
    })
})