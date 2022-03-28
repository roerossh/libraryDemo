import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { List, Card, Layout } from 'antd';
import BookStore from './store';
import { IBook } from '@server/interfaces/books';
import BookItem from 'components/BookItem';
import './index.scss';

const { Header, Content } = Layout;
const { Meta } = Card;
console.log();
@observer
export default class BookList extends Component {
  onSearch = (val: string) => {
    BookStore.queryBookList(val);
  };
  render() {
    const { keyword, bookList } = BookStore;
    return (
      <Layout className="container">
        <Content>
          <List
            dataSource={bookList}
            renderItem={(item: IBook) => <BookItem key={item.id} item={item} />}
          ></List>
        </Content>
      </Layout>
    );
  }
}
