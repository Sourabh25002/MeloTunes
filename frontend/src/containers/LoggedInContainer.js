import { Icon } from '@iconify/react';
import { useContext, useState, useLayoutEffect, useRef, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWithHover';
import songContext from '../contexts/songContext';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlaylistModal';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';



const LoggedInContainer = ({ children }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    // the following if statement will prevent the useEffect from running on the first render.
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong && currentSong.track]);

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong._id;

    const payload = { playlistId, songId };
    const response = await makeAuthenticatedPOSTRequest('/playlist/add/song', payload);
    if (response._id) {
      setAddToPlaylistModalOpen(false);
    }
  };

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  Howler.volume(1.0);

  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      {createPlaylistModalOpen && (
        <CreatePlaylistModal
          closeModal={() => {
            setCreatePlaylistModalOpen(false);
          }}
        />
      )}

      {addToPlaylistModalOpen && (
        <AddToPlaylistModal
          closeModal={() => {
            setAddToPlaylistModalOpen(false);
          }}
          addSongToPlaylist={addSongToPlaylist}
        />
      )}

      <div className={`${currentSong ? 'h-9/10' : 'h-full'} w-full md:w-1/5 lg:w-1/5 bg-black`}>

        <div>
          <div className="logoDiv p-6 bg-black">
            <img src="../logo3.jpg" width="250" height="150" alt="Logo" />
          </div>

          <div className="py-5">
            <IconText iconName={'../home.svg'} displayText={'Home'} targetLink={'/home'} />
            <IconText iconName={'../search.svg'} displayText={'Search'} targetLink={'/search'} />
            <IconText iconName={'../library.svg'} displayText={'Your Library'} targetLink={'/library'} />
            <IconText iconName={'../music.svg'} displayText={'My Music'} targetLink={'/myMusic'} />
          </div>
          <div className="pt-5">
            <IconText
              iconName={'../plus.svg'}
              displayText={'Create Playlist'}
              onClick={() => {
                setCreatePlaylistModalOpen(true);
              }}
            />
            <IconText iconName={'../like.svg'} displayText={'Liked Songs'} />
          </div>
        </div>
        {/* <div className="px-5">
            <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
               <img src="./globe.svg" alt="Icon" width="20" height="20" />
              <div className="ml-2 text-sm font-semibold">English</div>
            </div>
          </div> */}
      </div>


      <div className="h-full w-full md:w-4/5 lg:w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="w-full md:w-1/2 flex h-full">
            <div className="w-2/3 md:w-2/4 flex justify-around items-center">
              <TextWithHover displayText={'About Us'} targetLink={'/aboutUs'} />
              <TextWithHover displayText={'Contact Us'} targetLink={'/contactUs'} />
              <div className="h-1/2 md:border-r md:border-white"></div>
            </div>
            <div className="w-1/3 md:w-2/4 flex justify-around h-full items-center">
              <TextWithHover displayText={'Upload Song'} targetLink={'/uploadSong'} />
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                AC
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">{children}</div>
      </div>


      {/* song player */}
      {currentSong && (
        <div className="w-full h-1/10 bg-app-black text-white flex items-center px-4 fixed bottom-0 left-0">
          <div className="w-1/4 flex items-center">
            <img src={currentSong.thumbnail} alt="currentSongThumbnail" className="h-14 w-14 rounded" />
            <div className="pl-4">
              <div className="text-sm hover:underline cursor-pointer">{currentSong.name}</div>
              <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                {currentSong.artist.firstName + ' ' + currentSong.artist.lastName}
              </div>
            </div>
          </div>

          <div className="w-1/2 flex justify-center h-full flex-col items-center">
            <div className="flex w-1/3 justify-between items-center">
              <Icon
                icon="ci:shuffle"
                fontSize={25}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="mi:previous"
                fontSize={35}
                className="cursor-pointer text-gray-500 hover:text-white"
              />

              <Icon
                icon={isPaused ? 'carbon:play-filled' : 'zondicons:pause-solid'}
                fontSize={50}
                className="cursor-pointer text-gray-500 hover:text-white"
                onClick={togglePlayPause} // Call togglePlayPause on button click
              />

              <Icon
                icon="mi:next"
                fontSize={35}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
              <Icon
                icon="pepicons-pop:repeat"
                fontSize={25}
                className="cursor-pointer text-gray-500 hover:text-white"
              />
            </div>
            <div>{/* Progress bar */}</div>
          </div>
          <div className="w-1/4 flex justify-end pr-4 space-x-4 items-center">
            <Icon
              icon="ic:round-playlist-add"
              fontSize={35}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={() => {
                setAddToPlaylistModalOpen(true);
              }}
            />
            <Icon
              icon="ph:heart-bold"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
            />
          </div>
        </div>
      )}
      <div className="h-1/4"></div>
    </div>
  );
};




export default LoggedInContainer;
