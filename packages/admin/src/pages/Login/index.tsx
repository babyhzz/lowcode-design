import { login } from '@/services/auth';
import { setToken } from '@/utils/storage';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useNavigate } from '@umijs/max';

export default () => {
  const navigate = useNavigate();
  const { refresh } = useModel('@@initialState');

  const handleLogin = async (values: any) => {
    const res = await login(values.username, values.password);
    if (res.status === 0) {
      setToken(res.data.access_token);
      await refresh();
      navigate(res.data.initPath);
    } else {
    }
  };

  return (
    <div style={{ backgroundColor: 'white', height: '100%' }}>
      <LoginFormPage
        title="Lowcode Design"
        subTitle="低代码管理系统"
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        onFinish={handleLogin}
        initialValues={{
          username: 'admin',
          password: '123',
        }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder="用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder="密码"
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};
