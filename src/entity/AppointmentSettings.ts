import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'

import { Service } from 'entity/Service'

@Entity()
export class AppointmentSettings {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  open_time: number;

  @Column('int', { nullable: true })
  close_time: number;

  @Column('int', { default: 60 })
  session_interval: number;

  @Column('text', { default: 'Seg Ter Qua Qui Sex' })
  available_days: string;

  @OneToOne(type => Service, service => service.appointment_settings)
  service: Service;

}