import { Link } from "react-router-dom"

function Info(){
    return(
        <div className="side-bar">
        <section className="credits-section">
            <Link to="/" className="btn"> Go Home</Link>
            <Link to="/tierlist-tutorial" className="btn">Tutorial</Link>
            <Link to="/tierlist-changelog" className="btn">Changelog</Link>
            <Link to="/tierlist-disclaimer" className="btn">Disclaimer</Link>
        </section>
      </div>
    )
}
/*
https://i.ibb.co/ZLBP17Y/filters-mobile.jpg
https://i.ibb.co/c8VV7Cn/hidden-tab.jpg
https://i.ibb.co/9b4gYry/search-mobile.jpg
*/
export default Info