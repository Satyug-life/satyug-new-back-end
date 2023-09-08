import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class Quiz extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        allowNull: false,
    })
    question: string;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    options: string;

    @Column({
        allowNull: false,
    })
    answer: string;

    @Column({
        type: DataType.TINYINT,
        defaultValue: true,
    })
    isActive: boolean;
}

