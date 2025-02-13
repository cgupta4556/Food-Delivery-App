import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return <>   
        <div className="flex justify-center m-5">
            <p className="text-amber-600 font-medium text-xl">Welcome to my Food Delivery Page.</p>
        </div>
        <UserClass name={"first"}/>
    </>
}
export default About;
