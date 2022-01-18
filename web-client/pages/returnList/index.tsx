import React, {Component, Ref} from 'react';
import { Form, Input, Select, Layout, List, Skeleton, Avatar, Button, Modal, message } from 'antd';
import { observer } from 'mobx-react';
import store, { CompanyMap } from './store';
import { IProps } from 'components/BookItem';
import { WrappedFormUtils } from 'antd/lib/form/Form';

export interface IProps{
  visible: boolean;
  onCancel: ()=> void;
  onCreate: () => void;
  form: JSX.Element;
}
const { Content } = Layout;
const { confirm } = Modal;
const Option = Select.Option;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component<IProps> {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const {companyList, loading} = store;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="填写物流"
          okText="提交"
          cancelText="取消"
          onCancel={onCancel}
          onOk={onCreate}
          confirmLoading={loading}
        >
          <Form layout="vertical">
            <Form.Item label="物流公司">
              {getFieldDecorator('company', {
                rules: [{ required: true, message: '请选择物流公司' }],
              })(<Select
                showSearch
                style={{ width: '100%' }}
                placeholder="请选择物流公司"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {companyList.map(item => (<Option key={item.id} value={item.id}>{item.name}</Option>))}
              </Select>)}
            </Form.Item>
            <Form.Item label="物流单号">
              {getFieldDecorator('expressNo')(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

@observer
export default class ReturnList extends Component {

    formRef = undefined;

    onLoadMore = () => {};

    onReturn = (bookId: string) => {
      store.returnInfo.bookId = bookId;
      store.visible = true;
    }

    handleCancel = () => {
      store.visible = false;
    }

    handleCreate = () => {
      store.loading = true;
      const form = this.formRef.props.form;
      form.validateFields((err: any, values: any) => {
        console.log('values:', values);
        if (err) {
          return;
        }
        store.list = store.list.map( item => item.bookId === store.returnInfo.bookId ? {
          ...item,
          returnExpress: values.expressNo,
          rCompany: CompanyMap[values.company],
        } : item);
        form.resetFields();
        setTimeout(() =>{
          store.visible = false;
          store.loading = false;
          message.success('提交成功');
        }, 1000)
        
      });
    }

    saveFormRef = (form: WrappedFormUtils) => {
      this.formRef = form;
    }

    render() {
        const { initLoading, loading, list, visible } = store;
        const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>加载更多</Button>
        </div>
      ) : null;
        return(
            <Content>
                <List
                 className="demo-loadmore-list"
                 loading={initLoading}
                 itemLayout="horizontal"
                 loadMore={loadMore}
                 dataSource={list}
                 renderItem={item => (
                    <List.Item actions={[<Button type="primary" onClick={() => this.onReturn(item.bookId)}>{item.returnExpress ? '修改物流' : '我要还书'}</Button>]}>
                      <Skeleton avatar title={false} loading={false} active>
                        <List.Item.Meta
                          avatar={
                            <Avatar shape="square" size="large" src="http://pic.616pic.com/ys_bnew_img/00/05/38/2gHhWBbrPH.jpg" />
                          }
                          title={item.name}
                          description={<p>
                              <span>还书条码号：{item.bookId}</span>
                              <span>{`  借书物流：${item.bCompany}  ${item.borrowExpress}`}</span>
                              {item.returnExpress && <span>{`  还书物流：${item.rCompany}  ${item.returnExpress}`}</span>}
                          </p>}
                        />
                        <div>应还日期：{item.date.toLocaleString()}</div>
                      </Skeleton>
                    </List.Item>
                  )}
                 />
                  <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                  />
            </Content> 
        )
    }
}