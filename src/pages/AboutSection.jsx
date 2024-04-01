import React from "react";
import "./About.css";
import {
  AxiosPlainWordmark,
  BootstrapOriginal,
  CsharpOriginal,
  Css3OriginalWordmark,
  DockerOriginal,
  DotNetOriginalWordmark,
  ElectronOriginal,
  ExpressOriginalWordmark,
  FirebaseOriginalWordmark,
  GitOriginal,
  GoOriginalWordmark,
  GraphqlPlainWordmark,
  Html5OriginalWordmark,
  JavascriptOriginal,
  MongodbOriginalWordmark,
  NextjsOriginalWordmark,
  NodejsOriginalWordmark,
  PostmanOriginalWordmark,
  PrismaOriginalWordmark,
  ReactOriginal,
  UnityOriginal,
} from "devicons-react";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="about-container">
        <div className="header-title">
          <div className="dash"></div>
          <h3>About Me</h3>
        </div>
        <p>
          I'm a passionate Full Stack Developer with a knack for creating fluid
          digital experiences. With a solid grasp of front-end and back-end
          technologies, I bring ideas to life in the digital space. When I'm not
          coding, you'll find me exploring the latest in technology or
          contributing to open source.
        </p>
        <p>
          Driven by curiosity and the thrill of problem-solving, I'm continually
          learning and expanding my skill set to stay at the forefront of
          industry trends. Let's connect and make something amazing together!
        </p>
        <p>
          I'm in my Final Semster studying Computer Science at Valley View
          University <br />
          It's been a very smoooth journey here. <br />
          I'm really interested I building more Augmented Reality Applications
          beacuse I believe aside AI ,Augmented reality is the future of
          software engineering{" "}
        </p>
      </div>
      <div className="stack-container">
        <div className="header-title">
          <div className="dash"></div>
          <h3>My Stack</h3>
        </div>
        <h1 className="lang">Languages & Tools</h1>
        <p className="languages-tools-text">
          While my journey began in the structured realms of C# and .NET, where
          I delved into the exciting world of AR applications, my heart truly
          lies with JavaScript. It’s the versatility and dynamic ecosystem of
          JavaScript that have captivated me, allowing me to craft interactive
          and responsive web, mobile and desktop experiences with finesse and
          creativity.
        </p>
        <div className="language-icons-div">
          <BootstrapOriginal size={50} />
          <CsharpOriginal size={50} />
          <Css3OriginalWordmark size={50} />
          <DockerOriginal size={50} />
          <DotNetOriginalWordmark size={50} />
          <ElectronOriginal size={50} />
          <ExpressOriginalWordmark size={50} />
          <FirebaseOriginalWordmark size={50} />
          <GitOriginal size={50} />
          <GoOriginalWordmark size={50} />
          <GraphqlPlainWordmark size={50} />
          <Html5OriginalWordmark size={50} />
          <JavascriptOriginal size={50} />
          <MongodbOriginalWordmark size={50} />
          <NextjsOriginalWordmark size={50} />
          <NodejsOriginalWordmark size={50} />
          <PostmanOriginalWordmark size={50} />
          <PrismaOriginalWordmark size={50} />
          <ReactOriginal size={50} />
          <UnityOriginal size={50} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
