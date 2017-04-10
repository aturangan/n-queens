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
  //find number of solutions possible
  var solution;
  var count = 0;
  var board = new Board({n: n});

  for (var i = 0; i < n; i++) { //iterate through rows
     for (var j = 0; j < n; j++) { //iterate through columns
       board.togglePiece(i, j);

       if (!board.hasAnyRooksConflicts()) {
         count++; //add to count of solutions
       } else {
         board.togglePiece(i, j); //toggle back to 0 if conflicts exist
       }

       if (count === n) {
         solution = board.rows();
       }
     }
   }

   if (count !== n) {
     solution = undefined;
   }


  console.log(solution, 'SOLUTION');
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }

  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var count = 0;
  var board = new Board({n: n});

  for (var i = 0; i < n; i++) { //iterate through rows
     for (var j = 0; j < n; j++) { //iterate through columns
       board.togglePiece(i, j);

       if (!board.hasAnyQueensConflicts()) {
         count++; //add to count of solutions
       } else {
         board.togglePiece(i, j); //toggle back to 0 if conflicts exist
       }

       if (count === n) {
         solution = board.rows();
       }
     }
   }

   if (count !== n) {
     solution = undefined;
   }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  }

  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
// var thing = new Board([1,0,0], [1,0,0], [1,0,0], [1,0,0])
// console.log(thing)
