import { OmitType } from "@nestjs/mapped-types";
import { Paymentmethod } from "../entities/paymentmethod.entity";

export class CreatePaymentmethodDto extends OmitType(Paymentmethod, ['createdday' , 'updateddate']) {}
