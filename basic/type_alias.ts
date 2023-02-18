// type alias은 중복 선언 불가
type Student = {
  name: string;
  age: number;
  subjects: string[];
};

const student: Student = {
  name: 'jake',
  age: 76,
  subjects: ['Math', 'English'],
};

type Animal = { name: string };
type Dog = Animal & { legs: number };

const maltese: Dog = {
  name: 'unicon',
  legs: 4,
};
