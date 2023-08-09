import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import LoggedInContainer from "../containers/LoggedInContainer";

const SongsPage = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/all");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer curActiveScreen="allMusic">
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
        All Music
      </div>
      <div className="space-y-3 overflow-auto">
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={() => { }} />;
        })}
      </div>
      <div className="h-40 text-white"></div>
    </LoggedInContainer>
  );
};

export default SongsPage;
