import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="py-16 bg-black flex justify-center items-center">
      <div className="flex gap-10">
        
        <a
          href="https://www.linkedin.com/in/your-profile" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-300 text-5xl"
        >
          <FaLinkedin />
        </a>

     
        <a
          href="https://github.com/Amiur26" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 transition duration-300 text-5xl"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
