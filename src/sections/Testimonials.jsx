import { projects, achievements } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const ProjectsAndAchievements = () => {
  return (
    <section id="projects-achievements" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Projects & Achievements"
          sub="✨ Showcasing My Work and Accomplishments"
        />

        <div className="lg:columns-2 md:columns-2 columns-1 mt-16">
          {/* Map through Projects */}
          {projects.map((project, index) => (
            <GlowCard card={project} key={`project-${index}`} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={project.imgPath}
                    alt={project.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{project.name}</p>
                  <p className="text-white-50">{project.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}

          {/* Map through Achievements */}
          {achievements.map((achievement, index) => (
            <GlowCard
              card={achievement}
              key={`achievement-${index}`}
              index={index}
            >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={achievement.imgPath}
                    alt={achievement.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{achievement.name}</p>
                  <p className="text-white-50">{achievement.description}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndAchievements;
