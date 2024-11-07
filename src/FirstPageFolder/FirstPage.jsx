import './FirstPage.css'
import checkImage from '../assests/heartimage.webp'
import lukeHeadshot from '../assests/IMG_1399.jpeg'

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
    return(
        
        <div className='FirstPage'>
            
        <div className="title-div">
            <h1 className="title">Heart Disease Predictor</h1>
            <h2 className="subtitle">Team Heart Attack</h2>
        </div>

            <div className="FirstRow">
                <Card name="Luke" headshot={lukeHeadshot} role="Technical Associate"></Card>
            
            </div>

            <div className="SecondRow">

            </div>
        </div>

    )
}

export default FirstPage