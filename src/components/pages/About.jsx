export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="content-container">
        <div className="text-container">
          <p>
            I'm Chris Young, a driven and aspiring Full-Stack Web Developer
            currently navigating the immersive journey of the University of
            Pennsylvania's coding bootcamp. Armed with a Bachelor of Arts degree
            from Penn State University, my professional narrative has traversed
            the realms of Sports Marketing and Brewery Operations Direction
            within the vibrant landscape of Pennsylvania's craft breweries.
          </p>{" "}
          <p>
            {" "}
            My innate passion for technology and development led me to embrace
            the dynamic world of coding, where I've been honing my skills in an
            array of cutting-edge technologies. Proficient in the MERN Stack
            (MongoDB, Express.js, React, Node.js), I've delved into the
            intricacies of HTML, Git, CSS, Javascript,
            Web/Third-party/Server-side APIs, Node.js, OOP, Express.js, SQL,
            ORM, MVC, NoSQL, PWAs, REACT, and GraphQL, among others.
          </p>{" "}
          <p>
            My background in Sports Marketing has cultivated a strategic
            mindset, while my tenure as a Brewery Operations Director has
            equipped me with valuable leadership and management skills. These
            experiences have molded me into a well-rounded individual, capable
            of blending creativity and technical prowess.{" "}
          </p>{" "}
          <p>
            My portfolio showcases some of the technologies I've learned during
            the bootcamp. Outside the coding realm, my interests span music,
            sports, and economics. I'm excited about the intersection of
            technology and creativity, and I look forward to contributing my
            skills and experiences to the ever-evolving landscape of web
            development.
          </p>
        </div>
        <div className="image-container">
          <img
            src="src/components/Images/Bear-Trap.png"
            alt="Chris Young Picture"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
