import Sequelize from 'sequelize';
import { _ } from 'lodash';
import faker from 'faker';

const db = new Sequelize('Code', null, null, {
  dialect: 'sqlite',
  storage: './Code.sqlite',
  logging: false
});

const EMPLOYEES = 20;

faker.seed(123);

const EmployeeModel = db.define('employee', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  prefix: { type: Sequelize.STRING },
  department: { type: Sequelize.STRING },
  title: { type: Sequelize.STRING },
  jobType: { type: Sequelize.STRING },
  jobDescription: { type: Sequelize.STRING },
  jobArea: { type: Sequelize.STRING },
  phone: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  picture: { type: Sequelize.STRING },
  country: { type: Sequelize.STRING },
  state: { type: Sequelize.STRING },
  city: { type: Sequelize.STRING },
  street: { type: Sequelize.STRING }
});

const Employee = db.models.employee;

db.sync({ force: true }).then(() => {
  return _.times(EMPLOYEES, () => {
    return EmployeeModel.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      prefix: faker.name.prefix(),
      department: faker.commerce.department(),
      title: faker.name.jobTitle(),
      jobType: faker.name.jobType(),
      jobDescription: faker.name.jobDescriptor(),
      jobArea: faker.name.jobArea(),
      phone: faker.phone.phoneNumber('(###) ###-####'),
      email: faker.internet.email(),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      street: faker.address.streetAddress()
    }).then(employee => {
      return employee;
    });
  });
});

export { Employee };
