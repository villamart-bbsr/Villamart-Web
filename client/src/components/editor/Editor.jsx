import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import "highlight.js/styles/atom-one-dark.css";
import MenuBar from "./MenuBar";
import { motion } from "framer-motion";

const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TextStyle,
      Color,
      Image.configure({
        HTMLAttributes: {
          class: 'editor-image',
        },
      }),
    ],
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
    <>
      {/* Add the necessary CSS styles */}
      <style jsx global>{`
        .editor-btn {
          @apply px-3 py-2 m-0.5 border border-gray-300 rounded-md bg-white cursor-pointer text-sm flex items-center justify-center min-w-[36px] h-9 transition-all duration-200 hover:bg-gray-50;
        }
        
        .active-editor-btn {
          @apply bg-green-600 text-white border-green-600;
        }
        
        .editor-btn:disabled {
          @apply opacity-50 cursor-not-allowed;
        }
        
        .ProseMirror {
          outline: none;
          padding: 1rem;
          min-height: 300px;
        }
        
        .ProseMirror h1 {
          font-size: 2.25rem !important;
          font-weight: normal !important;
          line-height: 2.5rem !important;
          margin: 1.5rem 0 1rem 0 !important;
          color: #166534 !important;
        }
        
        .ProseMirror h2 {
          font-size: 1.875rem !important;
          font-weight: normal !important;
          line-height: 2.25rem !important;
          margin: 1.25rem 0 0.75rem 0 !important;
          color: #166534 !important;
        }
        
        .ProseMirror h3 {
          font-size: 1.5rem !important;
          font-weight: normal !important;
          line-height: 2rem !important;
          margin: 1rem 0 0.5rem 0 !important;
          color: #166534 !important;
        }
        
        .ProseMirror h4 {
          font-size: 1.25rem !important;
          font-weight: normal !important;
          line-height: 1.75rem !important;
          margin: 0.875rem 0 0.5rem 0 !important;
          color: #166534 !important;
        }
        
        .ProseMirror h5 {
          font-size: 1.125rem !important;
          font-weight: normal !important;
          line-height: 1.75rem !important;
          margin: 0.75rem 0 0.5rem 0 !important;
          color: #166534 !important;
        }
        
        .ProseMirror h6 {
          font-size: 1rem !important;
          font-weight: normal !important;
          line-height: 1.5rem !important;
          margin: 0.75rem 0 0.5rem 0 !important;
          color: #166534 !important;
        }
        
        .ProseMirror ul {
          list-style-type: disc !important;
          padding-left: 1.625rem !important;
          margin: 0.75rem 0 !important;
        }
        
        .ProseMirror ol {
          list-style-type: decimal !important;
          padding-left: 1.625rem !important;
          margin: 0.75rem 0 !important;
        }
        
        .ProseMirror li {
          margin: 0.25rem 0 !important;
          line-height: 1.625 !important;
        }
        
        .ProseMirror blockquote {
          border-left: 4px solid #16a34a !important;
          padding-left: 1rem !important;
          margin: 1rem 0 !important;
          color: #374151 !important;
          font-style: italic !important;
        }
        
        .ProseMirror code {
          background-color: #f3f4f6 !important;
          color: #1f2937 !important;
          padding: 0.125rem 0.25rem !important;
          border-radius: 0.25rem !important;
          font-size: 0.875em !important;
          font-family: 'Courier New', Courier, monospace !important;
        }
        
        .ProseMirror pre {
          background-color: #282c34 !important;
          color: #abb2bf !important;
          padding: 1rem !important;
          border-radius: 0.5rem !important;
          overflow-x: auto !important;
          margin: 1rem 0 !important;
        }
        
        .ProseMirror pre code {
          background: none !important;
          color: inherit !important;
          padding: 0 !important;
          font-size: 0.875rem !important;
        }
        
        .ProseMirror hr {
          border: none !important;
          border-top: 2px solid #16a34a !important;
          margin: 2rem 0 !important;
        }
        
        .editor-image {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 8px !important;
          border: 2px solid #16a34a !important;
          margin: 1rem 0 !important;
        }
      `}</style>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full relative border-2 border-green-600 rounded-lg p-4 bg-green-50"
      >
        {editable && <MenuBar editor={editor} />}
        <EditorContent editor={editor} />
      </motion.div>
    </>
  );
};

export default Editor;