/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  */
  // Example:

  // we need to prototype theadd\child to the tree
  // push the new value in a tree
  //retrive them
  // Significant progress

var Tree = function(value) {
  

  this.value = value
  this.children = []
  
};

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
  return new Tree(value);
};


 Tree.prototype.map = function(func, to, from) {

  var newTree = new Tree(func(this.value));

   function one(func, to, from) {

     if (from.children.length === 1) {


    
  }
 }

  one(cb, this, root);

  return root;
}


    var root1 =  new Tree(1);
    var branch2 = root1.addChild(2);
    var branch3 = root1.addChild(3);
    var leaf4 = branch2.addChild(4);
    var leaf5 = branch2.addChild(5);
    var leaf6 = branch3.addChild(6);
    var leaf7 = branch3.addChild(7);
    var newTree = root1.map(function (value) {
     return value * 2;
   })
  newTree.value // 2
  newTree.children[0].value // 4
  newTree.children[1].value // 6
  newTree.children[0].children[1].value // 10
  newTree.children[1].children[1].value // 14
  root1.value // still 1





 


