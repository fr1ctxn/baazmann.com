import imgMain from "../images/gta6.jpg";
import "../styles/Featured.css";
import "../styles/BlogNavbar.css";
function ListedPages() {
  const Pageprev = ({ Img, Title, prevDesc, authorname }) => {
    return (
      <div className="pageprev">
        <img
          src={Img}
          style={{ width: "450px", height: "auto" }}
          alt="articleimg"
        />
        <h1>{Title}</h1>
        <h3>{prevDesc}</h3>
        <p>by {authorname}</p>
      </div>
    );
  };

  return (
    <div className="ListedPages">
      <div className="firstlookpages">
        <div className="mainpage">
          <Pageprev
            Img={imgMain}
            Title="GTA 6 trailer just dropped on Youtube"
            prevDesc="Fans have been long anticipating the new addition to the Rockstar...."
            authorname="Shahbaz Singh Mann"
          />
        </div>
        <div className="sidethreepages">
          <div className="sidepage1"></div>
          <div className="sidepage2"></div>
          <div className="sidepage3"></div>
        </div>
      </div>
      <div className="morepages">
        <div className="morepage1"></div>
        <div className="morepage2"></div>
        <div className="morepage3"></div>
        <div className="morepage4"></div>
      </div>
    </div>
  );
}

export default ListedPages;
