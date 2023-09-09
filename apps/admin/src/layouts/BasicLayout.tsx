import { ProLayout, ProLayoutProps } from "@ant-design/pro-components";

export type BasicLayoutProps = ProLayoutProps;

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
  } = props;


  return (
    <ProLayout
      {...props}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;