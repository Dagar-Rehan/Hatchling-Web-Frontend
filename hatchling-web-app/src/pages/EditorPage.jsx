import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import TextEditor from "../components/TextEditor";

export default function EditorPage() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1.2 }}
      >
        <h1 className="text-center">Editor Page</h1>
        <TextEditor />
      </motion.div>
    </>
  );
}
