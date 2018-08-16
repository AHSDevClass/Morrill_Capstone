import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import { Button } from './button';
import { FormButton } from './formFields';

class Home extends Component {
  handleCheckout = () => {
    this.props.history.push('/checkout');
  }
  
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
          <FormButton callback={() => this.handleCheckout()} className="home__pullout__button" title="Checkout" />
        </div>
        <div className="home__books">
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/1/14/SoCalledThrawnNovel.png/revision/latest?cb=20160805194404" />
            <div className="home__books__book__title">Star Wars: Thrawn</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/c/c8/Thrawn_Alliances_cover.png/revision/latest?cb=20180727202824" />
            <div className="home__books__book__title">Star Wars: Thrawn: Alliances</div>
            <div className="home__books__book__desc">
              {/* <p>Grand Admiral Thrawn and Darth Vader ally against a threat to the Empire in this new novel from bestselling author Timothy Zahn.</p>
              <p>"I have sensed a disturbance in the Force."</p>
              <p>Ominous words under any circumstances, but all the more so when uttered by Emperor Palpatine. On Batuu, at the edges of the Unknown Regions, 
              a threat to the Empire is taking root—its existence little more than a glimmer, its consequences as yet unknowable. But it is troubling enough 
              to the Imperial leader to warrant investigation by his most powerful agents: ruthless enforcer Lord Darth Vader and brilliant strategist Grand 
              Admiral Thrawn. Fierce rivals for the emperor's favor, and outspoken adversaries on Imperial affairs—including the Death Star project—the 
              formidable pair seem unlikely partners for such a crucial mission. But the Emperor knows it's not the first time Vader and Thrawn have joined 
              forces. And there's more behind his royal command than either man suspects.</p>
              <p>In what seems like a lifetime ago, General Anakin Skywalker of the Galactic Republic, and Commander Mitth'raw'nuruodo, officer of the Chiss 
              Ascendancy, crossed paths for the first time. One on a desperate personal quest, the other with motives unknown…and undisclosed. But facing a 
              gauntlet of dangers on a far-flung world, they forged an uneasy alliance—neither remotely aware of what their futures held in store.</p>
              <p>Now, thrust together once more, they find themselves bound again for the planet where they once fought side by side. There they will be 
              doubly challenged—by a test of their allegiance to the Empire…and an enemy that threatens even their combined might.</p> */}
            </div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/a/a3/AnnihilationCover.jpg/revision/latest?cb=20120601025557" />
            <div className="home__books__book__title">Star Wars: Annihilation</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://images-na.ssl-images-amazon.com/images/I/51mGpEb1EBL._SX329_BO1,204,203,200_.jpg" />
            <div className="home__books__book__title">Star Wars: Ahsoka</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/4/49/Last_Shot_Han_cover.jpg/revision/latest?cb=20180416204915" />
            <div className="home__books__book__title">Star Wars: Last Shot</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://vignette.wikia.nocookie.net/starwars/images/6/62/ANewDawn.png/revision/latest?cb=20141001002939" />
            <div className="home__books__book__title">Star Wars: A New Dawn</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Cinder_%28Official_Book_Cover%29_by_Marissa_Meyer.png/220px-Cinder_%28Official_Book_Cover%29_by_Marissa_Meyer.png" />
            <div className="home__books__book__title">Cinder (Lunar Chronicles)</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Scarlet_%28Official_Book_Cover%29_by_Marissa_Meyer.png/220px-Scarlet_%28Official_Book_Cover%29_by_Marissa_Meyer.png" />
            <div className="home__books__book__title">Scarlet (Lunar Chronicles)</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Cress_%28Official_Book_Cover%29_by_Marissa_Meyer.png/220px-Cress_%28Official_Book_Cover%29_by_Marissa_Meyer.png" />
            <div className="home__books__book__title">Cress (Lunar Chronicles)</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://images-na.ssl-images-amazon.com/images/I/41SSIYbE2LL._SX331_BO1,204,203,200_.jpg" />
            <div className="home__books__book__title">Winter (Lunar Chronicles)</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="https://images-na.ssl-images-amazon.com/images/I/51F3cgsk%2BCL._SX331_BO1,204,203,200_.jpg" />
            <div className="home__books__book__title">Stars Above (Lunar Chronicles)</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://prodimage.images-bn.com/pimages/9781250073556_p0_v3_s1200x630.jpg" />
            <div className="home__books__book__title">Fairest (Lunar Chronicles)</div>
            <div className="home__books__book__desc"></div>
          </div>
          <div className="home__books__book">
            <img className="home__books__book__img" src="http://via.placeholder.com/150x200" />
            <div className="home__books__book__title">Book title goes here</div>
            <div className="home__books__book__desc"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null)(Home);