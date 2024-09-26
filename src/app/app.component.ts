import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

interface Album {
  cover: string;
  title: string;
  year: number;
  rating: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiApp';
  albums: Album[] = [
    { cover: 'MBDTF_ALT.jpg', title: 'MBDTF', year: 2010, rating: '4/5', description:'My Beautiful Dark Twisted Fantasy (Kanye West, 2010): Un álbum ambicioso que mezcla rap, rock y pop con producción magistral. Explora la fama, poder y vulnerabilidad, con colaboraciones icónicas. Canciones como “Runaway” y “Power” lo consolidan como un hito del hip hop moderno. Es considerado una obra maestra de Kanye West.'},
    { cover: 'dsotm.jpg', title: 'The Dark side of the moon', year: 1973, rating: '3/5', description:'The Dark Side of the Moon (Pink Floyd, 1973): Una obra conceptual que aborda temas como la muerte, el tiempo y la alienación. Con un sonido innovador y producción impecable, se ha convertido en un clásico del rock progresivo. “Money” y “Time” destacan como temas icónicos. Es uno de los álbumes más vendidos y reconocidos de la historia.' },
    { cover: 'pepper.jpg', title: 'Sgt Pepper Lonely Hearts Club Band', year: 1967, rating: '5/5', description:"Sgt. Pepper's Lonely Hearts Club Band (The Beatles, 1967): Un álbum revolucionario que rompió las barreras de la música pop con su experimentación y narrativa conceptual. Psicodélico y lleno de orquestaciones, destaca por temas como “A Day in the Life”. Considerado uno de los discos más influyentes de la historia." },
  ];
  albums2: Album[] = [
    { cover: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-001-Marvin-Gaye-WHATS-GOING-ON.jpg?w=1000', title: 'What’s Going On', year: 1971, rating: '5/5' , description:'What’s Going On (Marvin Gaye, 1971): Un álbum que aborda la guerra, el racismo y la injusticia social con una mezcla de soul, jazz y funk. Canciones como “What’s Going On” y “Mercy Mercy Me” resuenan por su mensaje social y emocional. Es una obra maestra del soul consciente.'},
    { cover: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-002-Beach-Boys-PET-SOUNDS-update.jpg?w=1000', title: 'Pet Sounds', year: 1966, rating: '5/5', description:'Pet Sounds (The Beach Boys, 1966): Innovador en producción y armonías, este álbum aborda temas de amor y confusión emocional. Con canciones como “God Only Knows”, Brian Wilson creó una obra maestra del pop orquestal. Es un disco fundamental en la historia de la música moderna.' },
    { cover: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000', title: 'Abbey Road', year: 1969, rating: '5/5', description:'Abbey Road (The Beatles, 1969): Un álbum ecléctico y una despedida brillante de The Beatles. “Come Together” y “Here Comes the Sun” destacan por su composición magistral. Con su icónica portada, es considerado uno de los mejores discos de la banda y del rock.' },
  ];
  albums3: Album[] = [
    { cover: 'https://upload.wikimedia.org/wikipedia/en/d/d3/The_Cars_-_The_Cars.png', title: 'The Cars', year: 1978, rating: '4/5' , description:'The Cars (The Cars, 1978): Un debut que fusiona rock, new wave y pop, lleno de riffs pegajosos y producción minimalista. Canciones como “Just What I Needed” definieron su estilo y dejaron una huella en el new wave. Es un álbum clave en la transición al sonido de los 80.'},
    { cover: 'https://ishopmx.vtexassets.com/arquivos/ids/195786-800-auto?v=637944231731670000&width=800&height=auto&aspect=true', title: 'The Black Parade', year: 2006, rating: '5/5' , description:'The Black Parade (My Chemical Romance, 2006): Un álbum conceptual sobre la muerte, lleno de dramatismo y teatralidad. Con éxitos como “Welcome to the Black Parade”, define el sonido emo de los 2000. Es considerado el punto más alto de la banda y un clásico del rock alternativo.'},
    { cover: 'https://i.ebayimg.com/images/g/sG4AAOSwc-NkmUry/s-l1600.webp', title: 'London Calling', year: 1979, rating: '5/5' , description:'London Calling (The Clash, 1979): Un álbum doble que mezcla punk, reggae y rockabilly, con letras sobre política y desigualdad. Canciones como “London Calling” y “Train in Vain” son himnos del rock. Es una obra maestra del post-punk y uno de los discos más influyentes de su era.'},
  ];
  

  isModalOpen = false;
  selectedAlbum: Album | null = null;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.selectedAlbum = null;
  }

  openModal(album: Album) {
    this.selectedAlbum = album;
    this.isModalOpen = true;
  }

  isStatsModalVisible = false;

  showStatsModal(): void {
    this.isStatsModalVisible = true;
  }

  hideStatsModal(): void {
    this.isStatsModalVisible = false;
  }
}
