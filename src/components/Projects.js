// import ProjectsCard from "./projectsCard";
import FocusPoints from "./focusPoints";
import Datas from "../data.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectsCard from "./projectsCard";

export default function Projects() {
  console.log(Datas);
  // const projectsTitle = Datas.pages.page4.content.title;
  return (
    <div className="projects">
      <Navbar />
      <div className="project-box">
        <div className="project-box-intro">
          <h4 className="title1">My focus?</h4>
          <div className="focuspoints-box">
            <FocusPoints />
          </div>
          <h4 className="title2">in every project!</h4>
        </div>

        <div className="projectscard-box">
          {/* <ProjectsCard /> */}
          <ProjectsCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
