// This is home page for non-login user
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";



const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];



const Home = () => {
    return (
        <div className="h-full w-full flex flex-col md:flex-row">
            {/* This first div will be the left panel */}
            {/* style={{ backgroundColor: '#151717' }} */}
            <div className="w-full md:w-1/5 flex flex-col md:justify-between pb-10 bg-black" >
                <div>
                    <div className="logoDiv p-6 bg-black">
                        <img src="./logo3.jpg" width="250" height="150" alt="Logo" />
                    </div>

                    <div className="py-5 " >
                        <IconText
                            iconName={"./home.svg"}
                            displayText={"Home"}
                        />

                        <IconText
                            iconName={"./search.svg"}
                            displayText={"Search"}
                        />

                        <IconText
                            iconName={"./library.svg"}
                            displayText={"Your Library"}
                        />
                        <IconText iconName={'../music.svg'} displayText={'My Music'} targetLink={'/myMusic'} />
                    </div>
                    <div className="pt-5" >
                        <IconText
                            iconName={"./plus.svg"}
                            displayText={"Create Playlist"}
                        />

                        <IconText
                            iconName={"./like.svg"}
                            displayText={"Liked Songs"}
                        />
                    </div>
                </div>
                <div className="px-5">
                    <div className=" text-white w-full flex px-2 py-1  items-center justify-center ">
                    "Unlock a World of Melodic Delights – Sign Up or Log In to Experience All that MeloTunes Has to Offer."
                    </div>
                </div>

            </div>



            {/* This is the right region */}
            <div className="w-full md:w-4/5 bg-app-black overflow-auto">
            <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
    <div className="w-full md:w-1/2 flex h-full">
        <div className="w-full md:w-3/5 flex justify-around items-center">
            <TextWithHover displayText={"About Us"} />
            <TextWithHover displayText={"Contact Us"} />
            {/* <TextWithHover displayText={"Download"} /> */}
            <div className="md:hidden h-1/2 border-r border-white"></div>
        </div>
        <div className="w-full md:w-2/5 flex justify-around h-full items-center">
            <TextWithHover displayText={"Sign up"} targetLink={'/signup'} />
            <div className="bg-white h-1/2 px-4 md:px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                <a href="/login">Log in</a>
            </div>
        </div>
    </div>
</div>

                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView
                        titleText="Focus"
                        cardsData={focusCardsData}
                    />
                    <PlaylistView
                        titleText="MeloTunes Playlists"
                        cardsData={spotifyPlaylistsCardData}
                    />
                    <PlaylistView
                        titleText="Sound of India"
                        cardsData={focusCardsData}
                    />
                </div>
            </div>

        </div>
    );
};



const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;
