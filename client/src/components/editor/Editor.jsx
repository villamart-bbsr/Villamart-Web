import { EditorContent, useEditor } from "@tiptap/react";
import "highlight.js/styles/atom-one-dark.css";
import MenuBar from "./MenuBar";
import { extensions } from "../../constants/tiptapExtensions";
import { motion } from "framer-motion";

const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: extensions,
    editorProps: {
      attributes: {
        class:
          "!prose !dark:prose-invert prose-sm sm:prose-base max-w-none mt-7 focus:outline-none prose-pre:bg-[#282c34] prose-pre:text-[#abb2bf] prose-headings:text-green-800 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:text-orange-700 prose-a:font-medium prose-strong:text-green-700 prose-img:rounded-lg prose-img:border-2 prose-img:border-green-500",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onDataChange && onDataChange(json);
    },
    content: content,
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full relative border-2 border-green-600 rounded-lg p-4 bg-green-50"
    >
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </motion.div>
  );
};

export default Editor;