import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'

import { AppointmentSettings } from 'entity/AppointmentSettings'

@Entity()
export class Service {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column('varchar', { length: 100 })
	name: string;

	@Column('varchar', { length: 100, unique: true })
	email: string;

	@Column('varchar', { length: 32 })
	password: string
  
  @Column('text', { nullable: true })
  description: string;

  @Column('varchar', { length: 100, nullable: true })
  address: string;

  @Column('varchar', { length: 20, nullable: true })
  category: string;

  @Column('float', { default: 0.0 })
  rating: string;

  @Column('text', { nullable: true })
  picture: string;

  @OneToOne(type => AppointmentSettings, apt_settings => apt_settings.service, {
    cascade: [ 'insert' ]
  })
  @JoinColumn()
  appointment_settings: AppointmentSettings;
}