class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  //-----------------------------------push
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

function displayStack() {
  console.log(`Stack: [${stack.items}]`);
}

while (true) {
  const action = prompt(
    "Enter 'push', 'pop', 'peek', or 'exit' to perform an action:"
  );

  if (action === "exit") {
    break;
  } else if (action === "push") {
    const value = prompt("Enter a value to push onto the stack:");
    stack.push(value);
    displayStack();
  } else if (action === "pop") {
    const popped = stack.pop();
    if (popped !== null) {
      console.log(`Popped value: ${popped}`);
    } else {
      console.log("Stack is empty.");
    }
    displayStack();
  } else if (action === "peek") {
    const top = stack.peek();
    if (top !== null) {
      console.log(`Top value: ${top}`);
    } else {
      console.log("Stack is empty.");
    }
    displayStack();
  } else {
    console.log("Invalid action.");
  }
}
