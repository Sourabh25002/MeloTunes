import LoggedInContainer from "../containers/LoggedInContainer";

const AboutUs = () => {
    return (
        <LoggedInContainer curActiveScreen={"library"}>
            <div class="container  mx-auto py-8 px-4">
                <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold mb-4">About Me:</h2>
                    <p class="mb-6">
                        I'm Sourabh Kumar, a B.Tech student in Computer Science and
                        Engineering, and a passionate web development enthusiast. Proficient
                        in the MERN stack, I thrive on creating dynamic and engaging web
                        applications. With a keen interest in technology and a drive to
                        explore new possibilities, I channel my creativity into crafting
                        seamless user experiences.
                    </p>

                    <h2 class="text-2xl font-semibold mb-4">
                        MeloTunes Music Player Project:
                    </h2>

                    <h3 class="text-xl font-semibold mb-2">Frontend:</h3>
                    <ul class="list-disc ml-6 mb-6">
                        <li>
                            Interactive Interface: MeloTunes offers an engaging and
                            user-friendly interface built with React. The frontend allows
                            seamless navigation and interaction with the music library.
                        </li>
                        <li>
                            User Authentication: Secure user registration and login processes
                            are implemented using bcrypt, passport, and passport-jwt. User
                            data is safeguarded through encryption and JWT-based
                            authentication.
                        </li>
                        <li>
                            Home Page: The home page features a variety of playlists curated
                            based on different themes. Users from around the world can access
                            and listen to songs uploaded by creators.
                        </li>
                        <li>
                            Library Page: Users have their own Library where they can create
                            and manage personal playlists. Each playlist is customizable with
                            a name and user-provided thumbnail.
                        </li>
                        <li>
                            My Music Section: A dedicated section displays songs uploaded by
                            the user. Cloudinary integration facilitates easy song uploading
                            with track details and poster images.
                        </li>
                        <li>
                            Search Functionality: Users can search for songs by artist,
                            enabling them to quickly find and enjoy their favorite tracks.
                        </li>
                        <li>
                            Song Player: MeloTunes utilizes Howler for a robust song player.
                            Users can play, pause, and add songs to their personal playlists
                            while enjoying high-quality audio.
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold mb-2">Backend:</h3>
                    <ul class="list-disc ml-6 mb-6">
                        <li>
                            MERN Stack: The project is powered by the MERN (MongoDB,
                            Express.js, React, Node.js) stack, offering a robust and efficient
                            foundation.
                        </li>
                        <li>
                            Database Management: MongoDB Atlas is used to store user, song,
                            and playlist data. Mongoose schemas ensure organized and efficient
                            data management.
                        </li>
                        <li>
                            User Authentication: bcrypt and Passport provide robust user
                            authentication, ensuring secure login and access to various
                            features.
                        </li>
                        <li>
                            RESTful APIs: Multiple APIs are created to perform CRUD operations
                            on playlists and songs. This includes fetching, creating, and
                            adding songs to playlists.
                        </li>
                        <li>
                            Cloudinary Integration: Cloudinary facilitates smooth song uploads
                            with features like song name, poster thumbnail, and track upload.
                            This enables users to share their music creations.
                        </li>
                        <li>
                            Backend Routing: Express.js handles backend routing, ensuring
                            effective communication between the frontend and the database.
                        </li>
                        <li>
                            JWT Tokenization: JSON Web Tokens (JWT) are used for
                            authentication, enhancing security and providing users access to
                            their personalized content.
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold mb-2">Dependencies (Frontend):</h3>
                    <ul class="list-disc ml-6 mb-6">
                        <li>
                            Cloudinary: Integration of Cloudinary's React library for
                            efficient song and thumbnail uploads.
                        </li>
                        <li>
                            Howler: Utilization of the Howler library to provide a seamless
                            song playing experience.
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold mb-2">Dependencies (Backend):</h3>
                    <ul class="list-disc ml-6 mb-6">
                        <li>
                            bcrypt, passport, passport-jwt: Implementation of bcrypt for
                            password hashing and passport for user authentication, with
                            passport-jwt for JWT-based authentication.
                        </li>
                        <li>express: Backend routing and API creation with Express.js.</li>
                        <li>
                            mongoose: Schema creation and management using the Mongoose
                            library.
                        </li>
                        <li>
                            mongodb: MongoDB Atlas integration for efficient data storage.
                        </li>
                        <li>
                            cors: Cross-Origin Resource Sharing (CORS) configuration to enable
                            secure frontend-backend communication.
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold mb-2">Conclusion:</h3>
                    <p>
                        MeloTunes is a feature-rich music player built on the MERN stack,
                        offering a personalized and immersive musical experience. With
                        seamless user authentication, intuitive interfaces,
                        Cloudinary-powered song uploads, and an extensive library of tracks,
                        MeloTunes invites music enthusiasts to explore, create, and enjoy
                        their favorite melodies.
                    </p>
                </div>
            </div>

            <div className="h-40 text-white"></div>
        </LoggedInContainer>
    );
};

export default AboutUs;
