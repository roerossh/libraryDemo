import { observable, action} from 'mobx';
import { IReturnInfo, IReturnForm } from '@server/interfaces/books';
import { async } from 'q';
import { doAction } from '@utils/api';
import { returnBook } from 'domain/books';
import { ICompany } from '@server/interfaces/express';

export const CompanyMap = {
    'sf03':  '顺丰',
    'st01': '申通',
    'zt04': '中通',
    'ems04': 'EMS邮政',
    'yd06': '韵达',
    'yt': '圆通',
}
const mockList:IReturnInfo[] = [
    {
        bookId: '1005',
        name: '百年孤独',
        author: '加西亚·马尔克斯',
        date: new Date(),
        borrowExpress: 345734985925479813,
        bCompany: '韵达',
        returnExpress: 945739286458925,
        rCompany: '顺丰'
    },
    {
        bookId: '1006',
        name: 'Vision-0912',
        date: new Date(),
        borrowExpress: 345734952455479813,
        bCompany: '中通',
    },
    {
        bookId: '3004',
        name: '冰与火之歌-权力的游戏I',
        author: '乔治·马丁',
        date: new Date(),
        borrowExpress: 345734952455479813,
        bCompany: '中通',
    },
    {
        bookId: '5432',
        name: '人类简史',
        author: '尤瓦尔·赫拉利',
        date: new Date(),
        borrowExpress: 245854679813,
        bCompany: '中通',
    },
    {
        bookId: '5452',
        name: '浪潮之巅',
        author: '吴军',
        date: new Date(),
        borrowExpress: 25665734679813,
        bCompany: '中通',
    },
    {
        bookId: '4377',
        name: '黑客与画家 : 硅谷创业之父Paul Graham文集',
        author: '[美] Paul Graham / 阮一峰[译]',
        date: new Date(),
        borrowExpress: 560809328943,
        bCompany: '圆通',
    }

];

const mockCompany: ICompany[] =[
    {
        id: 'sf03',
        name: '顺丰',
    },
    {
        id: 'st01',
        name: '申通',
    },
    {
        id: 'zt04',
        name: '中通',
    },
    {
        id: 'ems04',
        name: 'EMS邮政快递',
    },
    {
        id: 'yd06',
        name: '韵达',
    },
    {
        id: 'yt',
        name: '圆通',
    },
] 
class ReturnStore {
    @observable
    initLoading: boolean = false;

    @observable
    loading: boolean = false;

    @observable
    visible: boolean = false;

    @observable
    companyList: ICompany[] = mockCompany;

    @observable
    list: IReturnInfo[] = mockList;

    @observable
    returnInfo: IReturnForm = {};

    @action
    returnBook = async (para: IReturnForm) => {
        const res = doAction(returnBook(para));
        return res;
    }
}

export default new ReturnStore();