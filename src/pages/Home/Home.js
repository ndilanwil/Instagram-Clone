import "./Home.css"
import {Nav} from "../../components/navigation/Nav"
import {Timeline} from "../../components/Timeline/Timeline"

export const Home = () => {
    return(
        <div className="homepage">
            <div className="homepage_nav">
                <Nav />
            </div>
            <div className="homepage_timeline">
                <Timeline />
            </div>
        </div>
    )
}