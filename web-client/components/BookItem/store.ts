import { observable, action } from 'mobx';

class BookItemStore{
    @observable
    visible: boolean = false; // modal是否可见

    @observable
    modalText: string = '';

    @observable
    confirmLoading: boolean = false;
}

export default new BookItemStore();