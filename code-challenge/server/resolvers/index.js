import { Employee } from '../connectors';
import Sequelize from 'sequelize';

const Resolvers = {
  Query: {
    Employee(root, args) {
      return Employee.findOne({ where: args });
    },

    Employees: () => {
      return Employee.findAll();
    }
  },

  Mutation: {
    updateEmployee(root, args) {
      Employee.update(
        {
          firstName: `${args.firstName}`,
          lastName: `${args.lastName}`,
          prefix: `${args.prefix}`,
          title: `${args.title}`,
          department: `${args.department}`,
          jobType: `${args.jobType}`,
          jobArea: `${args.jobArea}`,
          jobDescription: `${args.jobDescription}`,
          country: `${args.country}`,
          phone: `${args.phone}`,
          email: `${args.email}`,
          city: `${args.city}`,
          state: `${args.state}`,
          street: `${args.street}`
        },
        { where: { id: `${args.id}` } }
      );
      const Emp = Employee.findOne({ where: { id: `${args.id}` } });

      return Emp;
    },

    addEmployee(root, args) {
      return Employee.create({
        firstName: `${args.firstName}`,
        lastName: `${args.lastName}`,
        picture: `${args.picture}`,
        prefix: `${args.prefix}`,
        title: `${args.title}`,
        department: `${args.department}`,
        jobType: `${args.jobType}`,
        jobArea: `${args.jobArea}`,
        jobDescription: `${args.jobDescription}`,
        country: `${args.country}`,
        phone: `${args.phone}`,
        email: `${args.email}`,
        city: `${args.city}`,
        state: `${args.state}`,
        street: `${args.street}`
      });
    }
  }
};

export default Resolvers;
