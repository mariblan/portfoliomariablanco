import "../projects.css";
import Datas from "../data.json";
import gamifyYourDay from "../resources/portada_abajo.png";
import cookBook from "../resources/cookbookplaceholder.jpeg";
import hackerrank from "../resources/hackerrankplaceholder.jpeg";

export default function ProjectsCard() {
  const projects = Datas.pages.page4.projects;
  const fotosProjects = [gamifyYourDay, cookBook, hackerrank];

  return (
    <div className="projectscard">
      {projects.map((project, index) => {
        return (
          <div key={index} class="card projectcard">
            <img
              className="projectsimg"
              src={fotosProjects[index]}
              alt="description"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h4>
                <b>{project.title}</b>
              </h4>
              <div className="caracteristicsproject">
                <div className="caracteristics">
                  <p className="p1">Used:</p>
                  <p className="p2">Team members:</p>
                  <p className="p3">App:</p>
                  <p className="p3">GitHub:</p>
                </div>
                <div className="details">
                  <p className="p1" id={project.foto}>
                    {project.features.Used}
                  </p>
                  <p className="p2" id={project.foto}>
                    {project.features.Team}
                  </p>
                  <a href={project.url}>
                    <p className="p3" id={project.foto}>
                      Go to app!
                    </p>
                  </a>
                  <a href={project.github} target="_blank">
                    <p className="p3">Go to GitHub!</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
