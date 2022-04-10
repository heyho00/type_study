interface CarType {
  model: string;
  tax: (price: number) => number;
}

class Carr implements CarType {
  model; ///any 타입됨 model을 갖고 있는지만 체크..
  tax(a) {
    ///a 파라미터는 any 타입됨
    return a;
  }
}
