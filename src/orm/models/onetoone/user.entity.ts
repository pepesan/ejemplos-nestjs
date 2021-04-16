import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Profile} from './profile.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  surname: string;

  @OneToOne(type => Profile)
  @JoinColumn()
  profile: Profile;

}
