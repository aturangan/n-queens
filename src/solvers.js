/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //find how many solutions there are for a "n" board 


  var solution = []; //fixme
  var rowArray = [];
  var board = new Board({n: n})
  //console.log(board);
  var sum = 0; //how many pieces are on the board 

 //var board = new Board({n:5})
  var count = n;
  var i = 0;

  var testRow = function(this.rows()[i]) {

    if (sum === n){
      if(!board.hasAnyColConflicts(n)) {
        solution.push(board);
      }
    }
    
    //iterating through every value in the array   
    for (var a = 0; a < this.rows()[i].length; i++) {
      //toggle value to 1
      if (!this.rows()[i].hasAnyColConflicts) {
        testRow(this.rows()[i + 1]);
      }



      sum++; //the number of pieces on the board 


      testRow(this.rows()[i + 1]);

      if ()
    }



      //the value has any conflicts on the board)


          //toggle value to 1 
          //row at index a is now 1

          //are there any conflicts at this index?
            //invoke "are there any board column conflicts at this index" function 

          //if there are, iterate to next a = 1, a = 2, blah blah 
          //if not, keep value there 
            //save this somewhere?
            testRow(this.rows()[i+1]);

        }
      }
    }



    // for (var i = 0; i<board.rows().length; i++){

    //   //iterate through columns
    //   for (var j = 0; board.rows()[i].length; j++){
    //     //toggle
    //     test(board.rows()[i][j]);
    //     sum++;
    //   }
    // }
    
    // console.log('solution')
    return solution; 
  } 


  test(board); 
  
  console.log(solution, 'SOLUTION');
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return solution; 
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
// var thing = new Board([1,0,0], [1,0,0], [1,0,0], [1,0,0])
// console.log(thing)
