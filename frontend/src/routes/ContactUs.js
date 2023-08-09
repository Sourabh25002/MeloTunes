import LoggedInContainer from "../containers/LoggedInContainer";

const ContactUs = () => {


    return (
        <LoggedInContainer curActiveScreen={"library"}>
            <div class="border h-full p-4 rounded-lg shadow-md bg-black text-white">
                <h2 class="text-xl font-semibold mb-2">Contact Information</h2>
                <br />
                <p class="mb-2">
                    Phone: +91 8840331207
                </p>
                <p class="mb-2">
                    Email:  sk25002kumar@gmail.com
                </p>
                <p>
                    LinkedIn: <a href="https://www.linkedin.com/in/sourabh-kumar-1a41ab205/" target="_blank" class="text-blue-500 hover:underline">LinkedIn Profile</a>
                </p>
                <p><br /><br /><br /><br /><br /><br /><br /></p>
            </div>



        </LoggedInContainer>
    );
};


export default ContactUs;