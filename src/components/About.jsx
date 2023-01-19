import { useEffect } from "react";

const About = ({ setImageDisplay }) => {
  useEffect(() => {
    setImageDisplay(false);
  }, []);
  return <div>About</div>;
};

export default About;
