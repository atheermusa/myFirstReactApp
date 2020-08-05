import React, { Component } from 'react';

class AlbumsContainer extends React.Component {
    state = {
      albums: [
          {likeStatus: "Click to like!", albumTitle:'Pain In My Heart', albumYear:'1964',albumCover:'https://img.discogs.com/fSKUF8M9f1Y67Z6dryv-RQRNihE=/fit-in/600x609/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1039451-1440145365-5195.jpeg.jpg'},
          {likeStatus: "Click to like!", albumTitle:'Otis Blue / Otis Redding Sings Soul', albumYear:'1965',albumCover:'https://img.discogs.com/jghTn8tI_bG9gSm__k_UToRGEC0=/fit-in/600x613/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2606974-1515015488-1993.jpeg.jpg'},
          {likeStatus: "Click to like!", albumTitle:'The Great Otis Redding Sings Soul Ballads', albumYear:'1965',albumCover:'https://img.discogs.com/A1zCSrUy29LN2HrCfMFu6RXXZUc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1039653-1408406065-1887.jpeg.jpg'},
          {likeStatus: "Click to like!", albumTitle:'The Soul Album', albumYear:'1966',albumCover:'https://img.discogs.com/7TdCNBwpVE9msjzsmR0mx5Gz8Ho=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2795239-1301360207.jpeg.jpg'},
          {likeStatus: "Click to like!", albumTitle:'The Otis Redding Dictionary Of Soul - Complete & Unbelievable', albumYear:'1996',albumCover:'https://img.discogs.com/ipDJ3n7CccOk7ZHP0hEkCDg7p5g=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2537596-1562417983-2046.jpeg.jpg'},
          {likeStatus: "Click to like!", albumTitle:'King & Queen', albumYear:'1967',albumCover:'https://img.discogs.com/qmGi4Rcb6KxpW-J78cANdfsyoms=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2563985-1350328191-3837.jpeg.jpg'},
      ]
    }

    render() {
        return (
            <div className='dicographyContainer'>
            {this.state.albums.map((item, index) => {
                   return <div key = {item.id} className='albumContainer'><h3 className='albumTitle'>{item.albumTitle}</h3>
                   <h3 className='albumYear'>{item.albumYear}</h3>
                   <div className='albumCover'><img src={item.albumCover}></img></div>
                   </div>
               })}
           </div>
        );
    };

};

export default AlbumsContainer;
