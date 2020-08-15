import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column('varchar', { length: 100 })
	name: string;

	@Column('varchar', { length: 100, unique: true })
	email: string;

	@Column('varchar', { length: 32 })
	password: string;

	@Column('text', { nullable: true })
	picture: string;
	
}
