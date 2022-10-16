/*
static 속성과 메소드
정적 메소드 라고 불림
*/
class Square {
  #length;
  static #counter = 0;
  static get counter() {
    return Square.#counter;
  }
  constructor(length) {
    this.length = length;
    Square.#counter += 1;
  }
  static perimeterOf(length) {
    return length * 4;
  }
  static areaOf(length) {
    return length * length;
  }
  get length() {
    return this.#length;
  }
  get perimeter() {
    return this.#length * 4;
  }
  get area() {
    return this.#length * this.#length;
  }

  set length(length) {
    if (length <= 0) {
      throw "길이는 0보다 커야합니다.";
    }
    this.#length = length;
  }
}

const squareA = new Square(10);
const squareB = new Square(20);
const squareC = new Square(30);
console.log(`지금까지 생성된 Square인스턴스는 ${Square.counter}개 입니다.`);

console.log(`한변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}입니다.`);
console.log(`한변의 길이가 30인 정사각형의 넓이는 ${Square.areaOf(30)}입니다.`);
/*
#counter라는 속성은 Square 객채의 생성자가 호출될 때 마다 1씩 증가
이를 활용해서 몇개의 객체가 생성되었는지 확이 ㄴ가능

perimeterOf, areaOf는 객체를생성하지않고도 둘레와 넓이를 구할 수 있게해주는 메소드
*/
