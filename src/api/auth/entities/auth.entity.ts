import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";

@Table
export class Auth extends Model {
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
    userName: string;

    @Column({
        allowNull: true,
    })
    name: string;

    @Column({
        allowNull: false,
    })
    email: string;

    @Column({
        allowNull: true,
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phoneNumber: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    jwtToken: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    otp: string;

    @Column({
        type: DataType.STRING,
        defaultValue: 0,
        allowNull: false,
    })
    otpCount: string;

    @Column({
        type: DataType.TINYINT,
        defaultValue: true,
    })
    isActive: boolean;
}
