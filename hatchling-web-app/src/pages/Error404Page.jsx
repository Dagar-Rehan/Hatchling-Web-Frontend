import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

export default function Error404Page() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1.2 }}
        className="text-center"
      >
        <h1 className="md:text-7xl lg:text-8xl">404</h1>
        <h2>Page Not Found</h2>
        <p>
          Return{" "}
          <Link className="text-white" to="/">
            home
          </Link>
        </p>
      </motion.div>
    </>
  );
}
