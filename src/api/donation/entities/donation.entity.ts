import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class Donation extends Model{

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    donationId: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: null,
    })
    userId: string;

    @Column({
        type: DataType.ENUM,
        values: ['PENDING', 'SUCCESS', 'FAILED'],
        defaultValue: 'PENDING',
    })
    status: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    razorpayOrderId: string;

}

