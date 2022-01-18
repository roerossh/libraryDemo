import * as React from "react";
import { HashRouter, Link} from "react-router-dom";
import { Route, Switch } from "react-router";
import BookList from "./bookList";
import Me from './me';
import ResevationList from './reservationList';
import ReturnList from './returnList';
import {Layout, Menu } from "antd";
import Login from './login';
import cookie from 'js-cookie';

const {Header, Content, Sider} = Layout;
const userName = cookie.get('userName') || '';

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
                <div style={{width: '100px', float:'right', color: '#eee', }}>你好，{userName} 。 <Link style={{color: '#eee'}} to="/login">退出</Link></div>
                </Menu>
            </Header>
            <Layout>
                <Sider>
                    <Menu theme="dark">
                        <Menu.Item>
                            <Link to="/reservation">我的预约</Link>
                        </Menu.Item>
                        <Menu.Item>                           
                            <Link to="/return">待还图书</Link>
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
        <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route>
            <AppLayout>
                <Route exact path="/" component={BookList} ></Route>
                <Route path="/me" component={Me}></Route>
                <Route path="/bookList" component={BookList}></Route>
                <Route path="/reservation" component={ResevationList}></Route>
                <Route path="/return" component={ReturnList}></Route>
            </AppLayout>
            </Route>
            
        </Switch>
        </HashRouter>
        )
    }
}

