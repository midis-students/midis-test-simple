import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';

export function createEditor(container: HTMLElement, defaultValue: string) {
  const editor = new EditorView({
    parent: container,
    extensions: [
      basicSetup,
      javascript({
        typescript: true,
      }),
    ],
  });

  editor.dispatch({
    changes: {
      from: 0,
      to: editor.state.doc.length,
      insert: defaultValue,
    },
  });

  return () => {
    return editor.state.doc.toString();
  };
}
