import { motion } from "framer-motion";

const projects = [
  {
    title: "GYM MANAGEMENT (My first Project)",
    image: "src/pictures/favpng_dumbbell-icon.png",
    link: "https://github.com/Amiur26/Muscle-Freak-Gym-management-system",
  },
  {
    title: "EPL MATCH PREDICTION & ECOMMERCE",
    image: "src/pictures/pngegg.png",
    link: "https://github.com/Amiur26/EPL_MATCH_PREDICTION_WEBSITE-FULL_STACK-/tree/main",
  },
  {
    title: "7 SEGMENT LED DISPLAY",
    image: "src/pictures/output-onlinepngtools.png",
    link: "#",
  },
  {
    title: "VOICE,FACE & HAND GESTURE CONTROL",
    image: "src/pictures/imgbin_human-voice-computer-icons-free-content-png (1).png",
    link: "https://github.com/Amiur26/Voice-Hand-Face-Gesture-Controls",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-black text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
    >
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-black rounded-lg overflow-hidden shadow-lg transition duration-300 hover:bg-white-500 relative"
            >
              <div className="relative w-full h-full flex items-center justify-center border-white/10 border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-50 h-40 object-contain"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-center transition-opacity duration-300 opacity-70 md:opacity-0 md:hover:opacity-100">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
