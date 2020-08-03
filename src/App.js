import React from 'react'
import './Stylesheet.css'

class App extends React.Component {
    render() {

        class Artist{
            constructor(name, genre, description){
                this.name = name;
                this.genre = genre;
                this.description = description;
                this.discography = [];
            };
            populateDiscography(albumTitle, albumYear, albumCover){
                let album = {albumTitle: albumTitle, albumYear: albumYear,albumCover: albumCover};
                this.discography.push(album);
            };
        } 

        let otisRedding = new Artist ('Otis Redding', 'Soul', 'Otis Ray Redding Jr. (September 9, 1941 – December 10, 1967) was an American singer, songwriter, record producer, arranger, and talent scout. He is considered one of the greatest singers in the history of American popular music and a seminal artist in soul music and rhythm and blues. Reddings style of singing gained inspiration from the gospel music that preceded the genre. His singing style influenced many other soul artists of the 1960s.');
        otisRedding.populateDiscography('Pain In My Heart', '1964', 'https://img.discogs.com/fSKUF8M9f1Y67Z6dryv-RQRNihE=/fit-in/600x609/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1039451-1440145365-5195.jpeg.jpg');
        otisRedding.populateDiscography('Otis Blue / Otis Redding Sings Soul','1965','https://img.discogs.com/jghTn8tI_bG9gSm__k_UToRGEC0=/fit-in/600x613/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2606974-1515015488-1993.jpeg.jpg');
        otisRedding.populateDiscography('The Great Otis Redding Sings Soul Ballads', '1965', 'https://img.discogs.com/A1zCSrUy29LN2HrCfMFu6RXXZUc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1039653-1408406065-1887.jpeg.jpg');
        otisRedding.populateDiscography('The Soul Album','1966','https://img.discogs.com/7TdCNBwpVE9msjzsmR0mx5Gz8Ho=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2795239-1301360207.jpeg.jpg');
        otisRedding.populateDiscography('The Otis Redding Dictionary Of Soul - Complete & Unbelievable', '1996', 'https://img.discogs.com/ipDJ3n7CccOk7ZHP0hEkCDg7p5g=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2537596-1562417983-2046.jpeg.jpg');
        otisRedding.populateDiscography('King & Queen','1967','https://img.discogs.com/qmGi4Rcb6KxpW-J78cANdfsyoms=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2563985-1350328191-3837.jpeg.jpg');


        return (
            <div>
            <h1>{otisRedding.name}</h1>

             <h2>Genre: {otisRedding.genre}</h2>
             <p>{otisRedding.description}</p>

             <div className='dicographyContainer'>
             {otisRedding.discography.map(item => { 
                    return <div className='albumContainer'><h3 className='albumTitle'>{item.albumTitle}</h3>
                    <h3 className='albumYear'>{item.albumYear}</h3>
                    <div className='albumCover'><img src={item.albumCover}></img></div>
                    </div>
                })}
            </div>
            </div>
        )
    }
    
}

export default App