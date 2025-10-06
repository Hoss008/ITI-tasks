var LnkdLstObj = {
  data: [{ val: 1 }, { val: 3 }, { val: 4 }, { val: 5 }],


  enqueue: function (val) {
    if (this.data.some(item => item.val === val)) {
      throw new Error("Duplicate value not allowed");
    }
    if (this.data.length === 0 || val > this.data[this.data.length - 1].val) {
      this.data.push({ val });
    } else {
      throw new Error("Value not in ascending sequence");
    }
  },


  insertAt: function (index, val) {
    if (typeof val !== "number") throw new Error("Only numbers allowed");

    if (this.data.some(item => item.val === val)) {
      throw new Error("Duplicate value not allowed");
    }

    var prev = index > 0 ? this.data[index - 1].val : -Infinity;
    var next = index < this.data.length ? this.data[index].val : Infinity;

    if (val > prev && val < next) {
      this.data.splice(index, 0, { val });
    } else {
      throw new Error("Value breaks ascending order");
    }
  },


  popVal: function () {
    return this.data.pop();
  },

  removeVal: function (val) {
    var index = this.data.findIndex(item => item.val === val);

    if (index == -1) console.log("data not found");
    this.data.splice(index, 1);
  },

  dequeueVal: function () {
    return this.data.shift();
  },

  display: function () {
    console.log("List Content:");
    this.data.forEach(item => console.log(item));
  }
};


LnkdLstObj.enqueue(7)
// LnkdLstObj.insertAt(1,2)
LnkdLstObj.popVal()
LnkdLstObj.removeVal(1);
// LnkdLstObj.dequeueVal()
LnkdLstObj.display()
