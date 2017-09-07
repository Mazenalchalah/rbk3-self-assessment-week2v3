// List and briefly describe the types of algorithmic time complexity.
// Be as clear and complete as necessary to demonstrate your mastery.
// Write your explanation below as a comment
/*
Bigo(1):constant time,  no matter what argument it's just operation

Bigo(n):linear time ,it depends on (for loop) like reduce,map,filter 
Bigo(n^2):square time, when we have nested loop for inside for
Bigo(log(n)):logartim time, when we ignore part of array and make operation on the part of array
*

example:
//if O(1)
//for o(n)
//nested for o(n^2)
//map,each,reduce,filter o(n)
//map,each,reduce,filter +iside for o(n^2)
// array.length/2 o(log(n))

example:
O(1): 
function(n){
	return n*10;
}

o(n^2):
for ( i = 0; i < N; i++ ) {
  for ( j = 0; j < N; j++ ){
    statement;
}
}

O(log(n))
for ( i = 0; i < N/2; i++ )

