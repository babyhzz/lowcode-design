import { getPermissionSchema } from '@/services/permission';
import { useSearchParams } from '@umijs/max';
import { SchemaObject, Spinner } from 'amis';
import { Editor } from 'amis-editor';
import 'amis-editor-core/lib/style.css';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';
import { useEffect, useState } from 'react';

interface AmisEditorProps {
  name?: string;
}

export default function AmisEditor({}: AmisEditorProps) {
  const [schema, setSchema] = useState<SchemaObject>();

  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');

  useEffect(() => {
    getPermissionSchema(id).then((res) => {
      setSchema(res.data);
    });
  }, [id]);

  if (!schema) {
    return <Spinner show={true} />;
  }

  return (
    <div>
      <div className=""></div>
      <Editor value={schema} onChange={setSchema} />
    </div>
  );
}
