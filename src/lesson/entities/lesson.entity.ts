import { Column, Model, Table, Unique } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class Lesson extends Model {
  //   @Column({
  //     type: DataType.INTEGER,
  //     primaryKey: true,
  //     autoIncrementIdentity: true,
  //     autoIncrement: true,
  //   })
  //   id: number;

  @Unique
  @Column
  name: string;

  @Column
  startdate: Date;

  @Column
  duration: number;

  @Column({ defaultValue: true })
  isActive: boolean;
}
