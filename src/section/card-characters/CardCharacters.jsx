import { useState } from "react";
import style from "./CardCharacters.module.css";

export const CardCharacters = ({
  created,
  episode,
  gender,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
  url,
}) => {
  let fecha = new Date(created).toLocaleDateString();
  let hora = new Date(created).toLocaleTimeString();
  const [active, setactive] = useState(false);
  return (
    <>
      {active && (
        <div className={style.mask} onClick={() => setactive(!active)} />
      )}
      {active ? (
        <div className={style.div_card_character}>
          <img className={style.img_card} src={image} alt={name} />
          <div className={style.div_propiedades}>
            {name && <h1 className={style.Car_name}>{name}</h1>}
            {species && (
              <p className={style.Car_Propiedades}>
                <b>Species:</b> <br /> {species}
              </p>
            )}
            {gender && (
              <p className={style.Car_Propiedades}>
                <b>Gender:</b> <br /> {gender}
              </p>
            )}
            {status && (
              <p className={style.Car_Propiedades}>
                <span className={status == "Alive" ? style.alive : style.dead}>
                  ....
                </span>{" "}
                <b className={style.Car_Propiedades_status}>Status:</b> <br />
                {status}
              </p>
            )}
            {type && (
              <p className={style.Car_Propiedades}>
                <b>Type:</b> <br />
                {type}
              </p>
            )}
            {location.name && (
              <p className={style.Car_Propiedades}>
                <b> Location:</b> <br />
                {location?.name}
              </p>
            )}
            {created && (
              <p className={style.Car_Propiedades}>
                <b> Create:</b> <br />
                {fecha + " " + hora}
              </p>
            )}
            <p className={style.Car_Propiedades}>
              <b> Origin:</b> <br />
              {origin.name}
            </p>
            {url && (
              <p className={style.Car_Propiedades}>
                <b>Url:</b> <br />
                <a href={url}>{url}</a>
              </p>
            )}
            {/*
        {episode &&
          episode?.map((item, i) => {
            if (i > 3) {
              return "";
            }
            return (
              <a key={i} href={item}>
                Episode #{i + 1}
              </a>
            );
          })} */}
          </div>
        </div>
      ) : (
        <img src={image} alt={name} onClick={() => setactive(true)} />
      )}
    </>
  );
};
const d = {
  created: "2017-11-04T22:34:53.659Z",
  episode: ["https://rickandmortyapi.com/api/episode/8"],
  gender: "Male",
  id: 20,
  image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
  location: {
    name: "Interdimensional Cable",
    url: "https://rickandmortyapi.com/api/location/6",
  },
  name: "Ants in my Eyes Johnson",
  origin: { name: "unknown", url: "" },
  species: "Human",
  status: "unknown",
  type: "Human with ants in his eyes",
  url: "https://rickandmortyapi.com/api/character/20",
};
