import './FirstPage.css'
import checkImage from '../assets/heartimage.webp'
import jamieHeadshot from '../assets/IMG_1142.png'

function Card(props) {
    return (
        <div className="Card">
            <img className="headshot" src={props.headshot}></img>
            <h3 className="name">{props.name}</h3>
            <p className="role">{props.role}</p>
        </div>
    );
}

const FirstPage = () => {
    return (
        <div className="FirstPage">
            <div className="title-div">
                <h1 className="title">Heart Disease Predictor</h1>
                <h3 className="subtitle">Team Heart Attack</h3>
            </div>

            <div>
                <div className="FirstRow">
                    <Card name="Jamie" role = "Technical Associate" headshot={checkImage}></Card>
                </div>
                
                <div className="SecondRow">

                </div>
            </div>
        </div>

    );
}

export default FirstPage;
