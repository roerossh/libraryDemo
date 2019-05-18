import { observable, action } from 'mobx';
import { doAction } from '@utils/api';
import { borrowBook } from 'domain/books';
import { ReserveOptions } from '@server/interfaces/books';

class BookItemStore{

    @observable
    modalText: string = '';

    @action
    borrowBook = async(id: string) => {
        const res = await doAction(borrowBook(id, ReserveOptions.reserve));
        console.log( 'store res:', res);
        return res;
    }

}

export default new BookItemStore();