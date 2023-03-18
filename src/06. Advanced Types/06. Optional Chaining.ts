const fetchedUser = {
  id: "user1",
  name: "Radoslav",
  age: 20,
  job: { title: "CEO", description: "My company" },
};

// javascript of checking if nested properties exist without getting an error
console.log(fetchedUser.job && fetchedUser.job.description);

// the property before value is considered that it might be not defined
console.log(fetchedUser?.job?.description);
