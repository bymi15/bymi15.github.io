import { Animated } from "react-animated-css";
import { Container } from "reactstrap";
import FlowLogo from "../assets/img/flow-logo.png";
import CheckList from "../components/shared/CheckList";
import SkillRow from "../components/SkillRow";
import SkillSingle from "../components/SkillSingle";

const Skills = () => (
  <Animated animationIn="fadeIn" animationInDelay={50}>
    <Container className="pad-top">
      <div className="section-title">
        <h2>Skills</h2>
        <p>A range of skills and technologies that I have worked with</p>
      </div>
      <div>
        <h3 className="heading">Programming Languages</h3>
        <div className="underLine"></div>
        <SkillRow className="mb-4">
          <SkillSingle
            icon={<span className="iconify" data-icon="grommet-icons:golang" />}
            text="Go"
          />
          <SkillSingle icon={<span className="iconify" data-icon="logos:java" />} text="Java" />
          <SkillSingle icon={<span className="iconify" data-icon="logos:c" />} text="C" />

          <SkillSingle
            icon={<span className="iconify" data-icon="logos:c-plusplus" />}
            text="C++"
          />
          <SkillSingle icon={<span className="iconify" data-icon="logos:c-sharp" />} text="C#" />
          <SkillSingle icon={<span className="iconify" data-icon="logos:python" />} text="Python" />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:javascript" />}
            text="Javascript"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:typescript-icon" />}
            text="Typescript"
          />
          <SkillSingle
            icon={
              <span className="iconify">
                <img src={FlowLogo} alt="Flow Logo" width={20} />
              </span>
            }
            text="Cadence"
          />
        </SkillRow>

        <h3 className="heading">Front-end</h3>
        <div className="underLine"></div>
        <SkillRow className="mb-4">
          <SkillSingle icon={<span className="iconify" data-icon="logos:react" />} text="React" />
          <SkillSingle icon={<span className="iconify" data-icon="logos:redux" />} text="Redux" />
          <SkillSingle icon={<span className="iconify" data-icon="logos:html-5" />} text="HTML" />
          <SkillSingle icon={<span className="iconify" data-icon="logos:css-3" />} text="CSS" />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:material-ui" />}
            text="Material UI"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:bootstrap" />}
            text="Bootstrap"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:tailwindcss-icon" />}
            text="TailwindCSS"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:ionic-icon" />}
            text="Ionic"
          />
          <SkillSingle icon={<span className="iconify" data-icon="logos:unity" />} text="Unity" />
        </SkillRow>

        <h3 className="heading">Back-end</h3>
        <div className="underLine"></div>
        <SkillRow className="mb-4">
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:django-icon" />}
            text="Django"
          />
          <SkillSingle icon={<span className="iconify" data-icon="logos:php" />} text="PHP" />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:laravel" />}
            text="Laravel"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:nodejs-icon" />}
            text="NodeJS"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="vscode-icons:file-type-mongo" />}
            text="MongoDB"
          />
          <SkillSingle icon={<span className="iconify" data-icon="logos:mysql" />} text="MySQL" />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:postgresql" />}
            text="PostgreSQL"
          />
        </SkillRow>

        <h3 className="heading">Others</h3>
        <div className="underLine"></div>
        <SkillRow className="mb-4">
          <SkillSingle icon={<span className="iconify" data-icon="logos:git-icon" />} text="Git" />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:docker-icon" />}
            text="Docker"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:kubernetes" />}
            text="Kubernetes"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:gitlab" />}
            text="Gitlab CI/CD"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:jenkins" />}
            text="Jenkins"
          />
          <SkillSingle icon={<span className="iconify" data-icon="logos:aws" />} text="AWS EC2" />
          <SkillSingle
            icon={<span className="iconify" data-icon="logos:azure-icon" />}
            text="Azure"
          />
          <SkillSingle
            icon={<span className="iconify" data-icon="flat-color-icons:linux" />}
            text="Linux"
          />
        </SkillRow>

        <h3 className="heading">Workflow</h3>
        <div className="underLine"></div>
        <CheckList
          className="mb-5"
          items={[
            "Agile Development & Scrum",
            "Version control with Git",
            "Project management with Jira, Trello",
            "Focus on responsive web design",
            "Consideration of scalability and distributed systems",
            "Behaviour-driven development and automated testing",
            "Continuous integration and continuous deployment with Jenkins, Gitlab CI/CD",
          ]}
        />
      </div>
    </Container>
  </Animated>
);

export default Skills;
