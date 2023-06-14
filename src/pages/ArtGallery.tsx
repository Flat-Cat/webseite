import "./ArtGallery.scss";

function ArtGallery() {
  return (
    <div className="gallery mt-6">
      <h1 className="title has-text-black">Art Gallery</h1>
      {[
        { src: 'bild01.webp', caption: 'Nyam', description: 'Aquarelle, Fineliner' },
        { src: 'bild02.webp', caption: 'Astra-ur, mein Freund', description: 'Prost. Gouache' },
        { src: 'bild03.webp', caption: 'Van-gogh-mood', description: 'Gouache' },
        { src: 'bild10.webp', caption: 'Far away', description: 'Gouache, Buntstifte, Fineliner' },
        { src: 'bild06.webp', caption: 'Dreamy.Mode=on', description: 'Aquarelle, acryl' },
        { src: 'bild07.webp', caption: 'UglyUs', description: 'Buntstifte' },
        { src: 'bild08.webp', caption: 'Uga Buga', description: 'Gouache, Stifte' },
        { src: 'bild09.webp', caption: 'Melty Miau', description: 'Alkohol Ink' },
        { src: 'bild04.webp', caption: 'Meeres-Miau', description: 'Gouache' },
        { src: 'bild11.webp', caption: 'Philodentron', description: 'Gouache, Aquarelle' },
        { src: 'bild12.webp', caption: 'Kinky King', description: 'Gouache' },
        { src: 'bild13.webp', caption: 'Us', description: 'Aquarelle, Fineliner' },
        { src: 'bild14.webp', caption: 'Planty Handy', description: 'Aquarelle' },
        { src: 'bild05.webp', caption: 'it tikles!', description: 'Gouache' },
      ].map((item, index) => (
        <div className="gallery-item" key={index}>
          <figure>
            <a href={`img/artgallery/${item.src}`} target="_blank" rel="noopener noreferrer">
              <img src={`img/artgallery/thumbnails/${item.src}`} alt={item.caption} />
            </a>
          </figure>
          <div className="card">
            <div className="card-image"></div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="subtitle is-6">{item.caption}</p>
                </div>
              </div>
              <div className="content">{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtGallery;
