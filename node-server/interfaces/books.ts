import { Stream } from "stream";

export enum ReserveOptions {
    reserve = 1,
    cancel
}

export interface IBook {
    id: string;
    name: string;
    author: string;
    publisher: string;
    img: string;
    isbn: string;
    doubanScore: number;
    description: string;
    borrowCount: number;
    totalCount: number;
}

export interface IReservation {
    bookId: string;
    name: string;
    author?: string;
    userId?: string;
    date: Date;
}

export interface IReturnInfo extends IReservation {
    borrowExpress?: number;
    bCompany?: String; // 借书单号对应的物流公司
    returnExpress?: number;
    rCompany?: string; // 还书单号对应的物流公司
}

export interface IReturnForm {
    returnExpress?: number;
    rCompany?: string; // 还书单号对应的物流公司
    bookId?: string;
    userId?: string;
}