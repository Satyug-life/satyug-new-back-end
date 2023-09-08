import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class KarmaPoints extends Model{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userId: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    points: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    ip: string;

}

