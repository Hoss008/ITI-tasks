function list(start, end, step) {
    this.start = start;
    this.end = end;
    this.step = step;

    var list = []; // Initialize an empty list

    function generateSequence() {
    for (let i = start; i <= end; i += step) {
      list.push(i);
    }
  }

  generateSequence()
  }

