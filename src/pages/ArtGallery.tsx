import "./ArtGallery.scss"

function ArtGallery() {
  return (
<div className="gallery mt-6">

  <h1 className="title has-text-black">Art Gallery</h1>
  {[
    { src: 'bild01.webp', caption: 'Nyam' },
    { src: 'bild02.webp', caption: 'Astra-ur, mein Freund' },
    { src: 'bild03.webp', caption: 'Van-gogh-mood' },
    { src: 'bild10.webp', caption: 'Far away' },

    { src: 'bild06.webp', caption: 'Dreamy.Mode=on' },
    { src: 'bild07.webp', caption: 'UglyUs' },
    { src: 'bild08.webp', caption: 'Uga Buga' },
    { src: 'bild09.webp', caption: 'Melty Miau' },
    { src: 'bild04.webp', caption: 'Meeres-Miau' },

    { src: 'bild11.webp', caption: 'Philodentron' },
    { src: 'bild12.webp', caption: 'Kinky King' },
    { src: 'bild13.webp', caption: 'Us' },
    { src: 'bild14.webp', caption: 'Planty Handy' },
    { src: 'bild05.webp', caption: 'it tikles!' },
    ].map((item, index) => (
    
    <div className="gallery-item" key={index}>

      <figure>
        <img src={`img/artgallery/thumbnails/${item.src}`}/>
        <figcaption>{item.caption}</figcaption>
      </figure>

    </div>
  ))}
</div>

  );
}
export default ArtGallery;

