import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>,
        private projectService: ProjectService) { }

    async findAll(): Promise<Employee[]> {

        return this.employeeRepository.find()

        // let emp: Employee = new Employee()

        // emp.id = "0opjn"
        // emp.firstName = "udara"
        // emp.lastName = "attanayake"
        // emp.designation = "SE"
        // emp.city = "COL"

        // return [emp]
    }

    async create(employee: EmployeeCreateDTO): Promise<Employee> {

        let emp = this.employeeRepository.create(employee);

        return this.employeeRepository.save(emp)
    }

    async getProject(id: string): Promise<Project> {
        return this.projectService.findOne(id)
    }

}
