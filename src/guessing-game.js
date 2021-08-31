// Ваша реализация должна использовать алгоритм двоичного поиска под капотом, чтобы пройти все тесты.  По бинарному поиску мы знаем, что самое эффективное, это делить возможный диапазон пополам. Т.е. этот метод должен возвращать среднее число из доступного диапазона.Изначально диапазон задается методом setRange, а потом диапазон изменяется методами lower() и greater().
// Методы вызываются в тестах автоматически и проверяют правильность реализации методов класса GuessingGame

class GuessingGame {
  constructor() {
    this.range = [];
    this.solution = 0;
  }

  // этот метод принимает минимальное и максимальное значение диапазона чисел, в котором находится загаданное число
  setRange(min, max) {
    console.log('min', min, 'max', max);
    this.range = [min, max];
    console.log('range', this.range);
  }

  // этот метод возвращает кандидата решения (вы делаете предположение на основе диапазона и предыдущих предположений)
  guess() {
    return (this.solution = Math.round((this.range[0] + this.range[1]) / 2));
    console.log('solution', this.solution);
  }

  // этот метод вызывается, если предыдущий вызов guess() возвращает число (solution) больше, чем загаданное число
  lower() {
    this.range[1] = this.solution; //[min, this.solution];
    console.log('lower', this.range);
  }

  // этот метод вызывается, если предыдущий вызов guess() возвращает число (solution) меньше, чем загаданное число
  greater() {
    this.range[0] = this.solution; // [this.solution, max];
    console.log('greater', this.range);
  }
}

module.exports = GuessingGame;
