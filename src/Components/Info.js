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
export default Info