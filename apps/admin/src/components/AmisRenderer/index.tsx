import { Schema, render as renderAmis } from 'amis';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';
interface AmisRendererProps {
  schema: Schema;
}

export default function AmisRenderer({ schema }: AmisRendererProps) {
  return <div>{renderAmis(schema, {}, {
    fetcher: config => {
      console.log(config);
      return fetch(config.url);
    }
  })}</div>;
}
