import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class Product extends Model{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        allowNull: true,
    })
    title: string;


    @Column({
        type: DataType.ENUM,
        values: ['S', 'M', 'L', 'XL', 'XXL'],
        defaultValue: 'S',
    })
    size: string;

    @Column({
        type: DataType.STRING,
        defaultValue: 0,
        allowNull: false,
    })
    price: number;

    
    @Column({
        type: DataType.TINYINT,
        defaultValue: true,
    })
    isActive: boolean;

    @Column({
        type: DataType.TINYINT,
        defaultValue: false,
    })
    isDelete: boolean;
}
