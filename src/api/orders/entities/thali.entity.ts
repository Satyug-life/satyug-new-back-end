import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

// Define the enum for status

@Table
export default class Thali extends Model<Thali> {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        allowNull: true,
        type: DataType.UUID,
    })
    userId: string;

    @Column({
        allowNull: true,
        field: "price",
    })
    price: string;

    @Column({
        allowNull: true,
    })
    description: string;

    @Column({
        type: DataType.ENUM,
        values: ['VIRTUAL', 'PHYSICAL'],
    })
    thaliType: string;

    @Column({
        type: DataType.ENUM,
        values: ['CANCELLED', 'SUCCESS', 'FAILED', 'PENDING'],
        defaultValue: 'PENDING',
    })
    status: string;

    @Column({
        type: DataType.ENUM,
        values: ['New', 'Pooja Initiated', 'Prasad out for delivery', 'Delivered', 'Done'],
        defaultValue: 'New',
    })
    ThaliStatus: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: null,
    })
    paymentMode: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    razorpayOrderId: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: null,
    })
    razorpayPaymentId: string;

    @Column({
        type: DataType.JSON,
    })
    metaData: string;

    @Column({
        type: DataType.STRING,
    })
    customerId: string;

    @Column({
        type: DataType.STRING,
    })
    itemId: string;

    @Column({
        type: DataType.STRING,
    })
    invoice: string;
}
