import * as React from "react";
import { Component } from 'react';
import { observer } from 'mobx-react';
import { List, Card, Layout, Menu } from "antd";
import NoData from "components/NoData";
import './index.scss';
import { resolve } from "url";
import { reject } from "q";

const {Header, Content} = Layout;
const { Meta } = Card;
@observer
export default class Me extends Component {
    render() {
        return (
            <Layout className="container">
            <Content>
                我的 
            </Content>         
            </Layout>
        )
    }
}