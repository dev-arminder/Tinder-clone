import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { SwipeableDrawer } from "@mui/material";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve Rodgers",
      url:
        "https://cdnb.artstation.com/p/assets/images/images/013/124/897/large/vladimir-minguillo-test21c.jpg?1538157754"
    },
    {
      name: "Dr Strange",
      url:
        "https://m.media-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_FMjpg_UX1100_.jpg"
    }
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing..." + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = name => {
    console.log(name + "Left the Screen");
  };

  return (
    <section className="tindercards">
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={dir => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              {" "}
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </section>
  );
}

export default TinderCards;
