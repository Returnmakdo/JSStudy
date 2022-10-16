/*
오버라이드
부모의 함수를 자식에서 다시 선언해서 덮어 쓰는것.
*/
class LifeCycle {
  call() {
    this.a();
    this.b();
    this.c();
  }
  a() {
    console.log("a() 메소드를 호출합니다.");
  }
  b() {
    console.log("b() 메소드를 호출합니다.");
  }
  c() {
    console.log("c() 메소드를 호출합니다.");
  }
}

class Child extends LifeCycle {
  a() {
    // super.a(); //부모메소드도 호출
    console.log("자식의 a()메소드 입니다.");
  }
}

new LifeCycle().call();
new Child().call();
