import get from 'axios';

export const getBookList = async(keyword: string) => (
     await get('/api/bookList', {
        params: {
            keyword,
        }
    }));
