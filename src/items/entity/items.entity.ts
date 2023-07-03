import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export class Item extends Model {
  @Column({
    type:DataType.UUID,
    defaultValue:DataType.UUIDV4, // Or DataTypes.UUIDV1
    primaryKey:true,
  })
    id: string;
}