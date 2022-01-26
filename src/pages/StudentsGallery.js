import { Section, VideoGallery, Heading } from "../components/Styles/Styles";
import play from "../components/img/students/playhover.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Students = ({ Api }) => {
  const { pathname } = useLocation();
  return (
    (pathname === "/student-gallery" && <Gallery Api={Api} />) ||
    (pathname === "/student-feedback" && <Gallery Api={Api} />) ||
    (pathname === "/job-placement" && <Gallery Api={Api} />)
  );
};

export default Students;

const Gallery = ({ Api }) => {
  const { pathname } = useLocation();
  const [currentApi, setCurrentApi] = useState(Api);
  const clickHandler = (e) => {
    let Id = e.target.id;
    setCurrentApi(Api.filter((current) => current.id === Id));
    window.scrollTo({ top: 350, behavior: "smooth" });
  };
  const videos = currentApi;
  return (
    <>
      <Heading>
        {(pathname === "/student-gallery" && "STUDENT GALLERY") ||
          (pathname === "/student-feedback" && "STUDENT FEEDBACK") ||
          (pathname === "/job-placement" && "JOB PLACEMENT")}
      </Heading>
      <Section>
        <VideoGallery>
          {videos.slice(0, 1).map((e) => (
            <div className="video">{e.link}</div>
          ))}
          {Api.map((e) => (
            <div onClick={clickHandler}>
              <div
                id={e.id}
                className="bg"
                style={{ backgroundImage: `url(${e.img})` }}
              >
                <img src={play} alt="play" />
              </div>
              <p>{e.title}</p>
            </div>
          ))}
        </VideoGallery>
      </Section>
    </>
  );
};
