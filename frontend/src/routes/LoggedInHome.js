import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Howl, Howler } from "howler";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
  {
    title: "Calm Piano",
    description: "Relax and concentrate with peaceful piano tunes.",
    imgUrl:
      "https://images.unsplash.com/photo-1571974599782-87624638275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    targetLink: "/songs",
  },
  {
    title: "Focus Zone",
    description: "Enhance your focus with calming instrumental music.",
    imgUrl:
      "https://images.unsplash.com/photo-1509635022432-0220ac12960b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    targetLink: "/songs",
  },
  {
    title: "Study Melodies",
    description: "Create a focused atmosphere with gentle study music.",
    imgUrl:
      "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    targetLink: "/songs",
  },
  {
    title: "Productive Beats",
    description: "Boost your productivity with instrumental hip hop rhythms.",
    imgUrl:
      "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    targetLink: "/songs",
  },
  {
    title: "Tech Grooves",
    description: "Stay in the zone with techno and tech house tracks.",
    imgUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    targetLink: "/songs",
  },
];

const meloTunesPlaylistsCardData = [
  {
    title: "Chill Vibes",
    description: "Soothing tracks for relaxation.",
    imgUrl:
      "https://images.unsplash.com/photo-1639469147446-6515f64056fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    targetLink: "/songs",
  },
  {
    title: "High Energy Workout",
    description: "Motivating beats for intense workouts.",
    imgUrl:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    targetLink: "/songs",
  },
  {
    title: "Road Trip Adventures",
    description: "Tracks for memorable road trips.",
    imgUrl:
      "https://images.unsplash.com/photo-1578158335529-27b8d78cfea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    targetLink: "/songs",
  },
  {
    title: "Romantic Serenade",
    description: "Heartwarming melodies for love.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1664297920375-938fb660bc7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    targetLink: "/songs",
  },
  {
    title: "Party Grooves",
    description: "Energetic tracks for lively parties.",
    imgUrl:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    targetLink: "/songs",
  },
];

const indiaPlaylistsCardData = [
  {
    title: "Mystical Ragas",
    description: "Experience the essence of India.",
    imgUrl:
      "https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    targetLink: "/songs",
  },
  {
    title: "Bollywood Beats",
    description: "Groove to iconic Bollywood tracks.",
    imgUrl:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1156&q=80",
    targetLink: "/songs",
  },
  {
    title: "Royal Resonance",
    description: "Regal melodies fit for Indian royalty.",
    imgUrl:
      "data:image/jpeg;base64,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 ",
    targetLink: "/songs",
  },
  {
    title: "Love Ballads: India Edition",
    description: "Heartfelt serenades of Indian romance.",
    imgUrl:
      "https://images.unsplash.com/photo-1535615615570-3b839f4359be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    targetLink: "/songs",
  },
  {
    title: "Festival Grooves",
    description: "Energetic tracks for lively celebrations.",
    imgUrl:
      "https://images.unsplash.com/photo-1547366868-f5d6fab0440f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    targetLink: "/songs",
  },
];

const Home = () => {
  return (
    <LoggedInContainer curActiveScreen="home">
      <div className="text-white flex flex-wrap justify-between">
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
        </div>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <PlaylistView
            titleText="MeloTunes Playlists"
            cardsData={meloTunesPlaylistsCardData}
          />
        </div>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <PlaylistView
            titleText="Sound of India"
            cardsData={indiaPlaylistsCardData}
          />
        </div>
      </div>
      <div className="h-40 text-white"></div>
    </LoggedInContainer>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full overflow-x-auto whitespace-nowrap playlist-container">
        <div className="flex space-x-4 custom-scrollbar">
          {cardsData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imgUrl={item.imgUrl}
              targetLink={item.targetLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl, targetLink, onClick }) => {
  return (
    <Link to={targetLink}>
      <div
        className="bg-black bg-opacity-40 w-full p-4 rounded-lg"
        style={{ height: "280px", boxSizing: "border-box" }}
      >
        <div className="pb-4 pt-2" style={{ height: "160px" }}>
          <img
            className="w-full h-full rounded-md object-cover"
            src={imgUrl}
            alt="label"
          />
        </div>
        <div className="text-white font-semibold py-3">{title}</div>
        <div className="text-gray-500 text-sm">{description}</div>
      </div>
    </Link>
  );
};

export default Home;
