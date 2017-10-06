const addEmployeeMutation = gql`
  mutation addEmployee(
    $firstName: String
    $lastName: String
    $picture: String
    $prefix: String
    $title: String
    $department: String
    $jobType: String
    $jobArea: String
    $jobDescription: String
    $country: String
    $phone: String
    $email: String
    $city: String
    $state: String
    $street: String
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
      picture: $picture
      prefix: $prefix
      title: $title
      department: $department
      jobType: $jobType
      jobArea: $jobArea
      jobDescription: $jobDescription
      country: $country
      phone: $phone
      email: $email
      city: $city
      state: $state
      street: $street
    ) {
      firstName
      lastName
      picture
      prefix
      title
      department
      jobType
      jobArea
      jobDescription
      country
      phone
      email
      city
      state
      street
    }
  }
`;
