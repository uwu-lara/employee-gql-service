import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  code: string

  @OneToMany(() => Employee, employee => employee.project)
  @Field(() => [Employee], { nullable: true })
  employees: Employee[]
}
