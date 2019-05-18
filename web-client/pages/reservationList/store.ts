import { observable, action } from "mobx";
import { IReservation, ReserveOptions } from "@server/interfaces/books";
import { doAction } from "@utils/api";
import { borrowBook } from "domain/books";

const mockList: IReservation[] = [
    {
        bookId: '1005',
        name: '百年孤独',
        author: '加西亚·马尔克斯',
        date: new Date(),
    },
    {
        bookId: '1006',
        name: 'Vision-0912',
        date: new Date(),
    },
    {
        bookId: '3004',
        name: '冰与火之歌-权力的游戏I',
        author: '乔治·马丁',
        date: new Date(),
    },
    {
        bookId: '5432',
        name: '人类简史',
        author: '尤瓦尔·赫拉利',
        date: new Date(),
    },
    {
        bookId: '5452',
        name: '浪潮之巅',
        author: '吴军',
        date: new Date(),
    },
    {
        bookId: '4377',
        name: '黑客与画家 : 硅谷创业之父Paul Graham文集',
        author: '[美] Paul Graham / 阮一峰[译]',
        date: new Date(),
    }
]
class ReservationStore {
    @observable
    loading:boolean = false;

    @observable
    initLoading: boolean = false;

    @observable
    list: IReservation[] = mockList;

    @action
    cancelReservation = async (id: string) => {
        const res = await doAction(borrowBook(id, ReserveOptions.cancel));
        this.list = mockList.filter( item => item.bookId !== id);
        return res;
    }
}

export default new ReservationStore();