import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.png";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Abhisekh Nayek</h3>

        <p>
          Hey, Everyone I am Abhisekh Nayek, the founder of MCA Momo Wala.
          <br />
          Our aim is to create the most tasty momos on planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
