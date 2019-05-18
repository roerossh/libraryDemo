import axios from 'axios';
import { async } from 'q';
import { IReturnInfo, IReturnForm } from '@server/interfaces/books';

const Login = {
    userId: '2015141411040',
    username: '邓雪',
}
export const getBookList = async(keyword: string) => (
     await axios.get('/api/bookList', {
        params: {
            keyword,
        }
    }));

export const borrowBook = async(bookId: string, status: number) => (
    await axios.post('/api/book/borrow', {
        bookId,
        status,
        userId: Login.userId, 
    })
)

export const returnBook = async(params: IReturnForm) => (
    await axios.post('/api/book/return', {...params, userId: Login.userId})
)
