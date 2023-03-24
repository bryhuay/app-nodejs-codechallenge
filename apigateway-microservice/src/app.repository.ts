import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITransaction } from './interface/transaction.interface';
import { CreateTransactionRequest } from './dto/create-transaction.dto';
import { Model } from "mongoose";

@Injectable()
export class AppRepository {
    constructor(@InjectModel('Transaction') private transactionModel: Model<ITransaction>) { }
   

    async createTransaction(createTransactionDto: CreateTransactionRequest): Promise<ITransaction> {
       
        const newTransaction = await new this.transactionModel({...createTransactionDto,createdAt:new Date()});
        return newTransaction.save();
    }

   
}