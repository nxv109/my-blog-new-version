import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";

const Editor = dynamic(() => import('@/components/atoms/InitializedMDXEditor'), {
  // Make sure we turn SSR off
  ssr: false,
});

export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Editor {...props} editorRef={ref} />,
);
