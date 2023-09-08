import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class Collectable extends Model{
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
        allowNull: true,
    })
    image: string;

    @Column({
        allowNull: true,
    })
    description: string;

    @Column({
        type: DataType.TINYINT,
        defaultValue: true,
    })
    isActive: boolean;

    @Column({
        allowNull: true,
    })
    artivive: string;

    @Column({
        type: DataType.INTEGER,
    })
    srNo: number;
}