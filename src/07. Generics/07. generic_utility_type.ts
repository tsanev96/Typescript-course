// https://www.typescriptlang.org/docs/handbook/utility-types.html

/*
    Built in types
*/

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCouseGoal: CourseGoal = (
  title: string,
  description: string,
  date: Date
) => {
  // The Partial type allows to make our object properties optional for the time being
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
};

// This makes our array readonly so we cannot modify it - pop, push and etc
const names: Readonly<string[]> = ["Radoslav", "Max"];
