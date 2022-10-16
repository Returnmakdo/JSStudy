/*
toString() 메소드 오버라이드
자바스크립트 내부적으로 어던 객체를 문자열로 만들 때 toString() 메소드를 호출한다.
따라서 toString() 메소드를 오버라이드하면 내부적으로 문자열로 변환되는 형태를 바꿀 수 있다.
*/
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `이름: ${this.name}\n나이: ${this.age}살`;
  }
}

const pet = new Pet("구름", 6);
// alert(pet);
console.log(pet + "");
// console.log(pet.toString());
