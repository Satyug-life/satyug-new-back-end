import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class Order extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    orderId: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    size: string;

    @Column({
        type: DataType.JSON,
        allowNull: false
    })
    addressDetail: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    paymentMode: string;

    @Column({
        type: DataType.ENUM,
        values: ['pending', 'In-tansit', 'delivered', 'cancelled'],
        defaultValue: 'pending',
    })
    orderStatus: string;

    @Column({
        type: DataType.ENUM,
        values: ['pending', 'success', 'failed'],
        defaultValue: 'pending',
    })
    paymentStatus: string;

    @Column({
        type: DataType.DATE,
        // defaultValue: new Date()
    })
    orderDate: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
        // allowNull: true,
    })
    fullName: string;

}

