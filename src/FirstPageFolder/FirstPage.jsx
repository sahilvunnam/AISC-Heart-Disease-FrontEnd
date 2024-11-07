import './FirstPage.css'
import lukeHeadshot from '../assets/IMG_1399.jpeg'
import checkImage from '../assets/heartimage.webp'
import jamieHeadshot from '../assets/IMG_1142.png'
import sahilHeadShot from '../assets/aischeadshot.jpg'
import yashHeadshot from '../assets/YashHeadshot.jpeg'
import rachieHeadshot from '../assets/rachieHeadshot.jpg'

function Card(props) {
    return (
        <div className="Card">
            <img className="headshot" src={props.headshot}></img>

            <h3 className="name"></h3>
            <p className="role">{props.role}</p>
        </div>
    )
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
                    <Card name="Sahil" role="Project Manager" headshot={sahilHeadShot}/>
                    <Card name="Jamie" role = "Technical Associate" headshot={jamieHeadshot}></Card>
                    <Card name="Luke" headshot={lukeHeadshot} role="Technical Associate"></Card>
                </div>

                <div className="SecondRow">
                    <Card name="Brian" role="Technical Associate" headshot={checkImage}></Card>
                    <Card name="Yash" role="Technical Associate" headshot={yashHeadshot}></Card>
                    <Card name="Rachie" role="Technical Associate" headshot={rachieHeadshot}></Card>
                </div>
            
            </div>
        </div>

    );
}

export default FirstPage;

