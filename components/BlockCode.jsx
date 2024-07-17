import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function BlockCode({ ...props }) {
  return (
    <SyntaxHighlighter
      language={props.className?.replace(/(?:lang(?:uage)?-)/, '')}
      style={dracula}
      wrapLines
      className="bg-transparent not-prose rounded-md"
    >
      {props.children}
    </SyntaxHighlighter>
  );
}
