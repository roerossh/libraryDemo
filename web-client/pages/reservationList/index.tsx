import React, {Component} from 'react';
import { Layout, List, Skeleton, Avatar, Button, Modal, message } from 'antd';
import { observer } from 'mobx-react';
import store from './store';

const { Content } = Layout;
const { confirm } = Modal;

@observer
export default class ReservationList extends Component {

    onLoadMore = () => {};

    onCancel = (bookId: string) => {
      confirm({
        title: '确认取消预约？',
        onOk: async () => {
          this.setState({loading: true});
          const res = await store.cancelReservation(bookId);
          let msg = '取消失败';
          if ( res && res.data.code === 0) {
            msg = '取消成功';
          }
          setTimeout(()=> {this.setState({loading: false}, () => {
            message.info(msg);
          })}, 1000);
        },
        onCancel() {
        },
        okText: '确认',
        cancelText: '取消',
      });

    }

    render() {
        const { initLoading, loading, list } = store;
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
                    <List.Item actions={[<Button type="primary" onClick={() => this.onCancel(item.bookId)}>取消预约</Button>]}>
                      <Skeleton avatar title={false} loading={false} active>
                        <List.Item.Meta
                          avatar={
                            <Avatar shape="square" size="large" src="http://pic.616pic.com/ys_bnew_img/00/05/38/2gHhWBbrPH.jpg" />
                          }
                          title={item.name}
                          description={<span>借书条码号：{item.bookId}</span>}
                        />
                        <div>预约日期：{item.date.toLocaleString()}</div>
                      </Skeleton>
                    </List.Item>
                  )}
                 />
            </Content> 
        )
    }
}