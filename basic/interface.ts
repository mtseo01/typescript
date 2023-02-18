interface Student {
  name: string;
  age: number;
  subjects: string[] | string;
}

// interface 중복 선언 가능 그러나 속성 중복은 불가.
interface Student {
  hobbies: string[] | string;
  // name: number 불가!
}

const student: Student = {
  name: 'jake',
  age: 65,
  subjects: ['Korean', 'Math'],
  hobbies: 'Reading Book',
};

// 확장
interface Teather extends Student {
  yearsOfService: number;
}

const teather: Teather = {
  name: 'timo',
  age: 32,
  subjects: 'Korean',
  hobbies: 'Watching Youtube',
  yearsOfService: 8,
};
