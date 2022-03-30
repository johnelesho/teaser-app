import { Exclude } from 'class-transformer';
import { Column, DataType, Model, Table, Unique } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class Learner extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Unique
  @Column
  childName: string;

  @Unique
  @Column
  email: string;

  @Column
  phoneNumber: string;

  @Column
  countryCode: number;

  @Column
  @Exclude()
  password: string;

  @Column
  grade: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
