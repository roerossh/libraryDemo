import { action, observable } from 'mobx';
import { IBook } from '../../../node-server/interfaces/books';
import { getBookList } from 'domain/books';

const mockList: IBook[] = [
    {
        id: '1005',
        name: '百年孤独',
        description: '《百年孤独》是魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。' ,
        borrowCount: 2,
        totalCount: 5,
        author:'加西亚·马尔克斯',
        publisher: '南海出版公司',
        doubanScore: 9.2,
        isbn: ' 9787544253994',
        img:'https://img3.doubanio.com/view/subject/l/public/s6384944.jpg',
    },{
        id: '10039204',
        name: 'A Game of Thrones',
        description: '《冰与火之歌》由美国著名科幻奇幻小说家乔治·R·R·马丁所著，是当代奇幻文学一部影响深远的里程碑式的作品。它于1996年刚一问世，便以别具一格的结构，浩瀚辽阔的视野，错落有致的情节和生动活泼的语言，迅速征服了欧美文坛。迄今，本书已被译为数十种文字，并在各个国家迭获大奖。',
        borrowCount: 0,
        totalCount: 5,
        img:'https://img3.doubanio.com/view/subject/l/public/s1358984.jpg',
        author:'[美]乔治·R.R.马丁',
        publisher: '重庆出版社',
        doubanScore: 9.5,
        isbn: '9787223361835',
    }
]
class BookListStore {
    @observable
    bookList: IBook[] = mockList;

    @observable
    keyword: string = '';

    @observable
    isLoading:boolean = true;

    @action
    queryBookList = async (keyword = '') => {
        const res = await getBookList(keyword);
        console.log('res:', res);
        if ( res ) {
            this.bookList = res.data;
        }
    }

}

export default new BookListStore();