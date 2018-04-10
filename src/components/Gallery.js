import React from 'react';
import Gallery from 'react-grid-gallery';



import Navigation from "./Navigation";


import man from "../img/man_sala.png";
import cupavi from "../img/cupavi.png";
import cupavi_tn from "../img/cupavi_tn.png";
import deka from "../img/deka.png";
import deka_tn from "../img/deka_tn.png";
import sala_duga from "../img/sala_duga.png";
import sala_duga_tn from "../img/sala_duga_tn.png";
import man_sala from "../img/man_sala.png";
import man_sala_tn from "../img/man_sala_tn.png";
import quattro_tn from "../img/quattro_tn.png";
import quattro from "../img/quattro.png";




const IMAGES =
[{
        src: cupavi,
        thumbnail: cupavi_tn,
        thumbnailWidth: 211,
        thumbnailHeight: 300,
        isSelected: false,
        caption: ""
},
{
        src: sala_duga,
        thumbnail: sala_duga_tn,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        tags: [{value: "2", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: deka,
        thumbnail: deka_tn,
        thumbnailWidth: 300,
        thumbnailHeight: 300
},
{
        src: man_sala,
        thumbnail: man_sala_tn,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        tags: [{value: "2", title: "Ocean"}, {value: "People", title: "People"}],
        caption: ""
},
{
        src: quattro,
        thumbnail: quattro_tn,
        thumbnailWidth: 300,
        thumbnailHeight: 300,
        tags: [{value: "2", title: "Ocean"}, {value: "People", title: "People"}],
        caption: ""
},

]
 

class Galerija extends React.Component {

  render(){
    return(
      <div>
        <Navigation/>
        <br/>
        <br/>
        <Gallery images={IMAGES}/>
      </div>
    ); 
  }
}

export default Galerija