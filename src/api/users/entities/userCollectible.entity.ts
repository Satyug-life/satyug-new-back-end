import { Table, Column, Model, DataType, BelongsTo, HasMany } from "sequelize-typescript";
import { User } from './user.entity';

@Table
export class UserCollectible extends Model{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    collectibleId: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userId: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    eventType: string;

    @Column({
        type: DataType.TINYINT,
        defaultValue: true,
    })
    isActive: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    assetKey: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    image: string;
 
}

