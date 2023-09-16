import { getPermissionSchema, updatePermissionSchema } from '@/services/permission';
import { Helmet, useSearchParams } from '@umijs/max';
import { SchemaObject, Spinner } from 'amis';
import { Editor } from 'amis-editor';
import 'amis-editor-core/lib/style.css';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';
import { useEffect, useState } from 'react';
import styles from './index.less';
import { Button, Space } from 'antd';
import { useInterval } from 'ahooks';

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

  const saveSchema = async () => {
    await updatePermissionSchema(id, JSON.stringify(schema));
  };

  useInterval(saveSchema, 10 * 1000);

  if (!schema) {
    return <Spinner show={true} />;
  }

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>编辑器</title>
      </Helmet>
      <div className={styles.header}>
        <Space>
          <Button type="primary" onClick={saveSchema}>
            保存
          </Button>
        </Space>
      </div>
      <Editor value={schema} onChange={setSchema} className={styles.editor} />
    </div>
  );
}
