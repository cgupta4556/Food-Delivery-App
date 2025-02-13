import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            userDetails: {
                name: "chandan",
                age: "22"
            }
        };
        // console.log(this.props.name + " constructor called");
    };

    async componentDidMount(){   // used to make an API calls
        // console.log(this.props.name + " Component mounted");
        const data = await fetch("https://api.github.com/users/cgupta4556");
        const json = await data.json();

        this.setState({
            userDetails : json
        });
    };


    render(){   // method of class which return some piece of jsx
        const {name, avatar_url} = this.state.userDetails;

        // console.log(name + " Render called")

        return(<div className="flex justify-center">
            <div className="border-1 w-100 bg-blue-100 rounded-2xl shadow-lg">
                <div className="flex justify-center p-3">
                <img className="rounded-2xl" src={avatar_url}/>
                </div>
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}
                >Count {this.state.count}
                </button> */}
                <div className="p-3">
                    <div className="flex justify-center mb-1 font-semibold ">Hi, i'm{" "}
                        <UserContext.Consumer>
                            {(userdata) => userdata.LoggedinUser}
                        </UserContext.Consumer>
                    </div>
                    <div className="flex justify-center mb-2 font-semibold ">Front-End Developer</div>
                    <div className="flex justify-center">Location: Gorakhpur</div>
                    <div className="flex justify-center">Contact: +91 8737915298</div>
                </div>        
            </div>
            </div>
        )
    }
};

export default UserClass;
