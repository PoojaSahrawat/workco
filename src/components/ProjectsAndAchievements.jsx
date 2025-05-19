import { projects, achievements } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const ProjectsAndAchievements = () => {
  return (
    <section id="projects-achievements" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Projects & Achievements"
          sub="✨ Showcasing My Work and Milestones"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {projects.map((project, index) => (
            <GlowCard
              card={{
                title: project.name,
                description: project.description,
                imgPath: project.imgPath,
              }}
              key={`project-${index}`}
              index={index}
            />
          ))}

          {achievements.map((achievement, index) => (
            <GlowCard
              card={{
                title: achievement.name,
                description: achievement.description,
                imgPath: achievement.imgPath,
              }}
              key={`achievement-${index}`}
              index={index + projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndAchievements;
