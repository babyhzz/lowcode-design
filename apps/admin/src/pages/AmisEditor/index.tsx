import { SchemaObject } from 'amis';
import { Editor } from 'amis-editor';
import 'amis-editor-core/lib/style.css';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';
import { useState } from 'react';

interface AmisEditorProps {
  name?: string;
}

export default function AmisEditor({}: AmisEditorProps) {
  const [schema, setSchema] = useState<SchemaObject>({
    type: 'page',
    body: [
      'inital string',
  
      {
        type: 'button',
        label: 'Change',
      }
    ]
  });

  if (schema) {
    return null;
  }

  return (
    <div>
      <Editor value={schema} onChange={setSchema}/>
    </div>
  );
}
