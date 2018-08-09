import React, { Component } from 'react';
import Header from './header';
import { Button } from './button';
import { FormButton } from './formFields';

export default class Home extends Component {
  
  render() {
    return (
      <div className="home">
        <Header className="home__header" small={false} />
        <input className="home__search" type="text" name="search" placeholder='&#xf002; Search'></input>
        <Button className="home__cart" icon="fas fa-shopping-basket" />
        <div className="home__pullout">
          <div className="home__pullout__item">
            <div className="home__pullout__item__title">Star Wars: Thrawn</div>
            <div className="home__pullout__item__sub">This is my description</div>
          </div>
          <div className="home__pullout__item">
            <div className="home__pullout__item__title">Star Wars: Annihilation</div>
            <div className="home__pullout__item__sub">This is my description</div>
          </div>
          <div className="home__pullout__item">
            <div className="home__pullout__item__title">Cinder (Lunar Chronicles)</div>
            <div className="home__pullout__item__sub">This is my description</div>
          </div>
          <FormButton className="home__pullout__button" title="Checkout" />
        </div>
        <div className="home__books">
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/1/14/SoCalledThrawnNovel.png/revision/latest?cb=20160805194404" />
            <div className="home__books__book__title">Star Wars: Thrawn</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/c/c8/Thrawn_Alliances_cover.png/revision/latest?cb=20180727202824" />
            <div className="home__books__book__title">Star Wars: Thrawn: Alliances</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/a/a3/AnnihilationCover.jpg/revision/latest?cb=20120601025557" />
            <div className="home__books__book__title">Star Wars: Annihilation</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://images-na.ssl-images-amazon.com/images/I/51mGpEb1EBL._SX329_BO1,204,203,200_.jpg" />
            <div className="home__books__book__title">Star Wars: Ahsoka</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/4/49/Last_Shot_Han_cover.jpg/revision/latest?cb=20180416204915" />
            <div className="home__books__book__title">Star Wars: Last Shot</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/6/62/ANewDawn.png/revision/latest?cb=20141001002939" />
            <div className="home__books__book__title">Star Wars: A New Dawn</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Cinder_%28Official_Book_Cover%29_by_Marissa_Meyer.png/220px-Cinder_%28Official_Book_Cover%29_by_Marissa_Meyer.png" />
            <div className="home__books__book__title">Cinder (Lunar Chronicles)</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Scarlet_%28Official_Book_Cover%29_by_Marissa_Meyer.png/220px-Scarlet_%28Official_Book_Cover%29_by_Marissa_Meyer.png" />
            <div className="home__books__book__title">Scarlet (Lunar Chronicles)</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Cress_%28Official_Book_Cover%29_by_Marissa_Meyer.png/220px-Cress_%28Official_Book_Cover%29_by_Marissa_Meyer.png" />
            <div className="home__books__book__title">Cress (Lunar Chronicles)</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://images-na.ssl-images-amazon.com/images/I/41SSIYbE2LL._SX331_BO1,204,203,200_.jpg" />
            <div className="home__books__book__title">Winter (Lunar Chronicles)</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://images-na.ssl-images-amazon.com/images/I/51F3cgsk%2BCL._SX331_BO1,204,203,200_.jpg" />
            <div className="home__books__book__title">Stars Above (Lunar Chronicles)</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://prodimage.images-bn.com/pimages/9781250073556_p0_v3_s1200x630.jpg" />
            <div className="home__books__book__title">Fairest (Lunar Chronicles)</div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book title goes here</div>
          </div>
        </div>
      </div>
    )
  }
}