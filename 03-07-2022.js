//The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

//such as

//F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

//Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//F(n) * F(n+1) = prod.

//Y//our function productFib takes an integer (prod) and returns an array:

//[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
//d//epending on the language if F(n) * F(n+1) = prod.

//If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

//[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
//F(n) being the smallest one such as F(n) * F(n+1) > prod.

//Some Examples of Return:
//(depend on the language)

//productFib(714) # should return (21, 34, true), 
 //               # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

//productFib(800) # should return (34, 55, false), 
 //               # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
//-----
//productFib(714) # should return [21, 34, true], 
//productFib(800) # should return [34, 55, false], 
//-----
//productFib(714) # should return {21, 34, 1}, 
//productFib(800) # should return {34, 55, 0},        
//-----
//productFib(714) # should return {21, 34, true}, 
//productFib(800) # should return {34, 55, false}, 
//Note:
//You can see examples for your language in "Sample Tests".

function productFib(prod){
    let fibo = []
    for (let i = 0; i < 100; i++){
      if (i === 0){
        fibo.push(0)
        }else if(i === 1){
          fibo.push(1)
        }else{
          let to = fibo[i-1] + fibo[i-2]
          fibo.push(to)
        }
      }
    
  let result = []
  let toppp = []
    
    fibo.forEach((n,index)=>{
      if(n * fibo[index + 1] === prod){
        result = [n, fibo[index+1], true]
      }
    })
    
    for(let x = 0 ; x < fibo.length; x++ ){
      if(fibo[x] * fibo[x + 1] > prod){
        toppp = [fibo[x], fibo[x + 1], false]
        break
      }
    }
    
    if(result.length === 0){
      return toppp
    }else{
      return result
    }
  }