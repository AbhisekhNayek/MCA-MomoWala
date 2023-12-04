import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>MCA Momo Wala</h4>
          <p>
            We are MCA Momo Wala. The place for most tasty momo's on the
            enitre earth.
          </p>

          <p>
            Explore the various type of Momoms and Fast Foods. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Abhisekh Nayek</h3>
            </div>

            <p>
              I am Abhisekh Nayek, the founder of MCA Momo Wala. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
