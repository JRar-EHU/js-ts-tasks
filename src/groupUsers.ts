/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */

type User = {
  name: string;
  login: string;
  surname?: string;
  type: 'EMPLOYEE' | 'CONTRACTOR';
  address?: {
    officeId: number;
    placeId: number;
  };
  contractorCompanyName?: string;
};

type GroupedUsers = {
  employees: User[];
  contractors: User[];
};

module.exports.groupUsers = function (users: Array<User>): Record<'employees' | 'contractors', Array<User>> {
  const result: GroupedUsers = {
    employees: [],
    contractors: [],
  };

  for (const user of users) {
    if (user.type === 'EMPLOYEE') {
      result.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      result.contractors.push(user);
    }
  }

  return result;
};
