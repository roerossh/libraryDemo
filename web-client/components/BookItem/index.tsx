import * as React from 'react';
import { Component } from 'react';
import {observer} from 'mobx-react';
import { IBook } from '@server/interfaces/books';
import { Card, Button, Modal, message } from 'antd';
import BookItemStore from './store';

const {Meta} = Card;
const {confirm} = Modal;
export interface IProps {
    item: IBook
}

const BookDescription = (props: IProps) => {
  const { item } = props;
  return (
    <div>
      <span style={{fontSize: '24px', fontWeight: 'bold', color: 'pink'}}>{item.borrowCount}</span><span>本可借，馆藏</span>
      <span style={{fontWeight: 'bold'}}>{item.totalCount}</span><span>本</span>
      </div>
  )
}

@observer
export default class BookItem extends Component<IProps> {

  state = {
    visible: false,
    loading: false,
  }
  

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  };

  showModal = () => {
      this.setState({
        visible: true,
      })
  };

  handleBorrow = () => {
    // BookItemStore.visible = true;
    confirm({
      title: '朋友，你确定借了会看？',
      content: '不看还是别借了...',
      onOk: async () => {
        this.setState({loading: true});
        const res = await BookItemStore.borrowBook(this.props.item.id);
        let msg = '预约失败';
        if ( res && res.data.code === 0) {
          msg = '预约成功';
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
        const { item } = this.props;
        const { loading, visible } = this.state;
        const cover = require('../../common/img/book_cover.png');
        return (
          <div style={{display: 'inline-block'}}>
            <Card
                hoverable
                style={{ width: 250, display: 'inline-block', margin: '5px' }}
                cover={<img src={ item.img || cover} />}
                actions={[item.borrowCount ?
                <Button loading={loading} icon="book" onClick={this.handleBorrow}>预约</Button> : <Button icon="book" disabled>不可借</Button>,
                <Button icon="ellipsis" onClick={this.showModal}>详情</Button>]}
              >
                <Meta
                  title={item.name}
                  description={<BookDescription item={item}/>}
                />
              </Card>
              <Modal
                title={item.name}
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[<Button type="primary" onClick={this.handleOk}>我知道了
                  </Button>,
                ]}
              >
                <p>{item.description}</p>
              </Modal>
              </div>
        
          
        //     <div key={item.id} style={{ padding: '0 15px', marginBottom: '10px' }}>
        //   <div
        //     style={{
        //       lineHeight: '50px',
        //       color: '#888',
        //       fontSize: 18,
        //       borderBottom: '1px solid #F6F6F6',
        //     }}
        //   >{item.name}</div>
        //   <div style={{ display: 'flex', padding: '15px 0' }}>
        //     <img style={{ height: '125px', minWidth: '100px', marginRight: '15px' }} src={cover} alt="" />
        //     <div style={{ lineHeight: 1.3, fontSize: '14px', color: '#696968'}}>
        //       {/* <div style={{ marginBottom: '8px', fontSize: '14px'}}>{item.description}</div> */}
        //       <div>豆瓣评分：<span style={{ fontSize: '25px', color: '#ffc160', paddingLeft: '5px' }}></span></div>
        //       <div>作者：{item.author}</div>
        //       <div>出版社：{item.publisher}</div>
        //       <div>ISBN: {9787544253994}</div>
        //       <div><span style={{ fontSize: '30px', color: '#FF6E27', paddingLeft: '5px' }}>{item.borrowCount}</span>本可借(馆藏共{item.totalCount}本)</div>
        //           {item.borrowCount < item.totalCount ?
        //           <Button>预约</Button> :
        //           <Button disabled >不可借</Button> }
        //     </div>
        //   </div>
        // </div>
      )
    }
}