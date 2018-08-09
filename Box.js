class Box {
  constructor(height = 100, width = 100) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.height * this.width
  }

  increaseWidth(increase) {
    this.width += increase
  }

  increaseHeight(increase) {
    this.height += increase
  }
}

module.exports = Box
