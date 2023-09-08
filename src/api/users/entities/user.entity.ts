import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";
import { UserCollectible } from './userCollectible.entity';

@Table
export class User extends Model{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    userId: string;

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
        allowNull: true,
        defaultValue: null
    })
    image: string;

    @Column({
        type: DataType.ENUM,
        values: ['active', 'blocked'],
        defaultValue: 'active',
    })
    status: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: 1
    })
    gamesPlayed: string;

    @Column({
        type: DataType.TINYINT,
        defaultValue: true,
    })
    isActive: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    uid: string;

}

