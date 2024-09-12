import { useEffect, useState } from "react";
import { Loading } from "../../components/loading/Loading";
import { useFetch } from "../../utilis/GetFetch/getFetch";
import { CardCharacters } from "../card-characters/CardCharacters";
import style from "./ShowCharacters.module.css";
export const ShowCharacters = () => {
  const [data, setData] = useState();
  const {
    data: resp,
    loading,
    error,
  } = useFetch("https://rckandmortyapi.com/api/character");

  //   console.log(data);
  useEffect(() => {
    if (resp) setData(resp.results);
  }, [resp]);

  if (loading || error) return <Loading />;

  if (error)
    return (
      <h1
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: " translate(-50%, -50%)",
        }}
      >
        Error
      </h1>
    );
  return (
    <div className={style.div_Cards_characteres}>
      {data?.map((person) => (
        <div key={person.id}>
          <CardCharacters {...person} />
        </div>
      ))}
    </div>
  );
};
