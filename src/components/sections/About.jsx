import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const Skills = [
    "Programming Languages:Python, Java, C",
    "Web Development/App Development: React, Vue, TailwindCSS, Django, REST Framework",
    "Systems & Hardware: ARMv7 (Embedded Systems) ",
    "Specializations:Machine Learning, AI Development, Full Stack Development "
    
  ];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
            An enthusiastic learner with a passion for technology and innovation, always eager to explore new challenges. Actively seeking opportunities to apply my skills, grow, and contribute meaningfully. 🚀
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {Skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Bachelor of Science in Computer Science and Engineering (BSCSE) </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Final Year Student of North South University, Computer Science Department </strong> 
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Programming Language-I (C), Object Oriented Programming (Java), Data Structures and Algorithms (C++), Discrete Mathematics, Junior Design, Introduction to Linear Algebra, Calculus and Analytic Geometry
                 
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
             
              <div className="space-y-4 text-gray-300">
                <div>
                <h3 className="text-xl font-bold mb-4"> 📚 GCE Advanced Level  Scholastica 2019-2021</h3>
                  <h4 className="font-semibold">
                    {" "}
             
                    <p>Grade: A A A A</p>
                    Subjects:Physics, Chemistry, Mathematics (Pure Maths 1 and 3, Statistics 1 and Mechanics 1)
                  </h4>
                  <br></br>
                  <h3 className="text-xl font-bold mb-4"> 📚 GCSE Ordinary Levels
                    Scholastica</h3>
                  <h4 className="font-semibold">
                    {" "}
                    Scholastica 2019-2021

                    <p>Grade: A* A* A* A* A  A  B</p>
                    Subjects:Physics, Chemistry, General Mathematics, Ad Math, Accounting, Bangla , English 
                  </h4>
                  
                </div>

             
              </div>

              
              
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};