import React, { Component } from 'react';
import cookie from 'js-cookie';
import { Form, Icon, Input, Button, Checkbox, Tooltip } from 'antd';

const URL = 'localhost:2222';

const imgUrl = require('./../common/img/background.jpg');

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        cookie.set('userId', values.userId);
        this.checkAcount(values);
      }
    });
  };

  checkAcount = (para: {userId: string, password: string}) => {
    //   TODO: 发送请求，验证，成功后将返回的用户信息存入cookie或localStorage，有效期7天
    const res = {
        id: '11235813',
        name: '邓雪',
    }
    cookie.set('userId', res.id);
    cookie.set('userName', res.name);
    location.replace('/');
    console.log('chech:', para);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div style={{width: '100vw', height:'100vh', backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'}}>
      <Form
      className="login-form"
      style={{paddingTop: '200px'}}
      labelCol={{span: 3, offset: 12}}
      wrapperCol={{span: 8, offset: 8}}
      >
        <Form.Item>
          {getFieldDecorator('userId', {
            rules: [{ required: true, message: '请输入账号名' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="借书卡号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
          <Tooltip title="账号密码与借书卡账号密码一致，如您遗忘请联系图书馆管理员修改，本系统暂不支持喔~">
            <span style={{float: 'right'}}>忘记密码？ </span>
         </Tooltip>
          <Button size="large" type="primary" onClick={this.handleSubmit} style={{width: '100%'}}>
            登录
          </Button>
            <Tooltip title="账号密码与借书卡账号密码一致，请前往图书馆注册借书卡，本系统暂不支持喔~">
            <span style={{float: 'right'}}>注册 &nbsp;&nbsp;&nbsp;</span>
         </Tooltip>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;