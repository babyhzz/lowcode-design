import { Schema, render as renderAmis } from 'amis';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';
import React from 'react';
interface AmisRendererProps {
  schema: Schema;
}

export default function AmisRenderer({ schema }: AmisRendererProps) {
  return <>{renderAmis(schema)}</>;
}
