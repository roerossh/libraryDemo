import * as React from "react";
import { HashRouter, Link} from "react-router-dom";
import { Route } from "react-router";
import BookList from "./bookList";
import Me from './me';
import { List, Layout, Menu } from "antd";

const {Header, Content, Sider} = Layout;

export class AppLayout extends React.Component {
    render() {
        return(
            <Layout className="container">
            <Header>
                <div style={{width: '450px', float: 'left', color: '#eee', fontSize: '24px', fontWeight: 'bold'}}>Read Anywhere-图书异地租借平台</div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item>
                        <Link to="/bookList">
                            图书列表
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/me">
                            我的
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider>
                    <Menu theme="dark">
                        <Menu.Item>
                            我的预约
                        </Menu.Item>
                        <Menu.Item>
                            待还图书
                        </Menu.Item>  
                    </Menu>
                </Sider>
                <Content>
                    {this.props.children}
                </Content> 
            </Layout>                  
            </Layout>
        )
    }
}

export default class AppWrapper extends React.Component {
    render() {
        return (
        <HashRouter>
            <AppLayout>
                <Route exact path="/" component={BookList} ></Route>
                <Route path="/me" component={Me}></Route>
                <Route path="/bookList" component={BookList}></Route>
            </AppLayout>
            
        </HashRouter>
        )
    }
}

