const _node = require('./_node.js')

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(item){
        this.head = new _node(item, this.head);
    }

    insertLast(item){
        let currentNode = this.head
        if (currentNode.value == null){
            this.insertFirst(item);
        } else {
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            } 
        }
        currentNode.next = new _node(item, null);
    }

    find(item){
        //if empty list
        if (!this.head){
            return null
        }

        //start looking from first node
        let currentNode = this.head
        while (currentNode.value !== item){
            //reach the last item, still cannot find a node with matching value
            if (currentNode.next === null){
                return null
            } else {
                currentNode = currentNode.next
            }
        }

        //found it
        return currentNode
    }

    remove(item){
        //if empty list
        if (!this.head){
            return null;
        }

        //if first item
        if (this.head.value === item){
            this.head = this.head.next;
            return;
        }

        //starting looking from 1st item
        let currentNode = this.head;
        let previousNode = this.head;
        while((currentNode !== null) && (currentNode.value !== item)){
            if (currentNode.next === null){
                return `Item does not exist!`;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        //remove item
        previousNode.next = currentNode.next
    }

  //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
  insertBefore(item, key){
    //if empty list
    if (!this.head){
      return null;
    }

    //if key is the first item
    if (key === this.head.value){
      this.insertFirst(item)
      return;
    }

    let currentNode = this.head
    let previousNode = this.head
    while((currentNode !== null) && (currentNode.value !== key)){
      //if no such key
      if (currentNode.next === null){
        console.log('cannot find key')
        return;
      } else {
        previousNode = currentNode
        currentNode = currentNode.next
      }
    }
    //found the key
    previousNode.next = new _node(item, previousNode.next)
  }

  //Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
  insertAfter(item,key){
    //if empty list
    if (!this.head){
      return null
    }

    //starting from first one in the list
    let currentNode = this.head

    while ((currentNode !== null) && (currentNode.value !== key)){
      //couldn't find the key
      if (currentNode.next === null){
        console.log('cannot find key')
        return
      } else {
        currentNode = currentNode.next
      }
    }
    //found key
    currentNode.next = new _node(item , currentNode.next)
  }

  //Implement a function called insertAt() that inserts an item at a specific position in the linked list.
  insertAt(item, position){
    console.log('in insert at')
    //if empty list
    if (!this.head && position !== 1){
      return null;
    }

    //if list.length is less than the position
    let currentNode = this.head
    let length = 1;
    while (currentNode.next !== null){
      currentNode = currentNode.next
      length++
    }

    if (position > length || position < 0){
      console.log('not a valid position')
      return
    }

    let currentValueCopy = this.head
    let currentPosition = 1;

    while (currentPosition < position){
      currentValueCopy = currentValueCopy.next
      currentPosition++
    }
    //reach the position
    this.insertBefore(item,currentValueCopy.value)
  }
}

function main(){
    let SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    return SLL
}

let result = main()

//display: displays the linked list
function display(linkedList){
  //base case
  if (linkedList.head.next == null){
    return linkedList.head.value
  }

  //general case
  let currentNode = linkedList.head
  while(currentNode !== null){
    console.log(currentNode)
    currentNode = currentNode.next
  }
}

//size: returns the size of the linked list
function size(linkedList){
  //if empty list
  let length = 1
  if (!linkedList.head){
    return 0
  } else {
    let currentNode = linkedList.head
    while (currentNode.next !== null){
      currentNode = currentNode.next
      length++
    }
  }
  return length
}

//isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty(linkedList){
  if (linkedList.head !== null){
    return false
  } else {
    return true
  }
}

//findPrevious: finds the node before the item you are looking for
function findPrevious(linkedList, item){
  //if empty list
  if (linkedList === null){
    return null
  }

  //if item looking for is the first item
  if (item === linkedList.head.value){
    console.log('this is the first item in the list')
    return
  }

  //starting from first item
  let currentNode = linkedList.head
  let previousNode = linkedList.head
  while (currentNode !== null && currentNode.value !== item){
    if (currentNode.next === null){
      console.log('The item you are looking for does not exist!')
      return
    } else {
      previousNode = currentNode
      currentNode = currentNode.next
    }
  }

  //found item
  return previousNode
}


//findLast: returns the last node in the linked list
function findLast(linkedList){
  //if empty list
  if (!linkedList.head){
    return null
  }

  let currentNode = linkedList.head
  while (currentNode.next !== null){
    currentNode = currentNode.next
  }

  return currentNode
}

/*
Mystery program: Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?
*/

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//filter duplicate items in the list


/*
Reverse a list
Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.
*/

function reversedList(linkedList){
    //new .next pointer
    let prev = null
    let current = linkedList.head
  
    while (current !== null){
      let nextTemp = current.next
      current.next = prev
      prev = current // 3
      current = nextTemp //null
    }
    linkedList.head = prev
    return linkedList
  }

/*
3rd from the end
Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.
*/


function findThirdFromTheEnd(linkedList){
    //if empty list
    if (!linkedList.head){
      return null
    }
  
    let length = 0
    let currentNode = linkedList.head
    while (currentNode !== null){
      length++
      currentNode = currentNode.next
    }
    //if list has less than 3 nodes 
    if (length < 3){
      console.log('the list is too short!')
      return
    } else {
      //if list has more than 3 nodes
      let answer = linkedList.head
      for (let i = 1 ; i <= length - 3; i++){
        answer = answer.next
      }
      return answer.value
    }
  }

/*
Middle of a list
Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.
*/

function middleOfList(linkedList){
    //if empty list
    if (!linkedList.head){
        return null
    }

    //if only one node
    if (linkedList.head.next == null){
        return linkedList.head.value
    }

    //calculate the length
    let length = 0
    let currentNode = linkedList.head
    while (currentNode !== null){
      length++
      currentNode = currentNode.next
    }    

    //if odd nodes
    let currentNodeCopy = linkedList.head
    let currentPosition = 1
    let middlePosition = Math.floor(length / 2) + 1        
    while (currentPosition !== middlePosition){
        currentPosition++
        currentNodeCopy = currentNodeCopy.next
    }
    return currentNodeCopy
}


/*
Cycle in a list
Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.
*/

function cycleList(linkedList){
    //if empty list
    if (!linkedList.head){
        return null
    }

    //if only one node
    if (linkedList.head.next == null){
        console.log('only one node in the linked list')
        return
    }

    //if only two nodes
    if (linkedList.head.next.next == null){
        console.log('only two nodes in the linked list')
        return
    }    

    let currentNode = linkedList.head
    while (currentNode !== null){
        let nextNode = currentNode.next
        while (nextNode !== null){
            if (currentNode.value == nextNode.value){
                return true
            } else {
                nextNode = nextNode.next
            }
        }
        currentNode = currentNode.next
    }
    return false
}

/*
Sorting a list
Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.
*/

function sortList(linkedList){
    //if empty list
    if (!linkedList.head){
        return null
    }

    let currentHead = linkedList.head  
    while (currentHead !== null){
      let currentNode = currentHead.next
        while (currentNode !== null){
          if (currentHead.value > currentNode.value){
            let temp = currentHead.value
            currentHead.value = currentNode.value
            currentNode.value = temp
          } 
          currentNode = currentNode.next
        }
      currentHead = currentHead.next
    }
    
    return linkedList
}