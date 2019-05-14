import * as React from 'react';
import { Component } from 'react';
import { IBook } from '@server/interfaces/books';
import { Card, Button, Modal, Layout } from 'antd';
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

export default class BookItem extends Component<IProps> {

  state = {
    visible: false,
    confirmLoading: false,
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
      onOk() {
        console.log('借书');
      },
      onCancel() {
        console.log('取消');
      },
      okText: '确认',
      cancelText: '取消',
    });
  }
    render() {
        const { item } = this.props;
        const { visible, confirmLoading } = this.state;
        const cover = require('../../common/img/book_cover.png');
        console.log('render cover:', cover);
        return (
          <div style={{display: 'inline-block'}}>
            <Card
                hoverable
                style={{ width: 250, display: 'inline-block', margin: '5px' }}
                cover={<img alt={cover} src={cover || item.img} />}
                actions={[item.borrowCount ?
                <Button icon="book" onClick={this.handleBorrow}>借书</Button> : <Button icon="book" disabled>不可借</Button>,
                <Button icon="ellipsis" onClick={this.showModal}>详情</Button>]}
              >
                <Meta
                  title={item.name}
                  description={<BookDescription item={item}/>}
                />
              </Card>
              <Modal
                title={item.name}
                visible={this.state.visible}
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
        //           <Button>借书</Button> :
        //           <Button disabled >不可借</Button> }
        //     </div>
        //   </div>
        // </div>
      )
    }
}