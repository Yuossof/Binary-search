let iterativeFunction = (arr=[], x) => {
  let start = 0;
  let end = arr.length - 1
  while(start <= end) {
    let mid = Math.floor((start + end) / 2)
    if(arr[mid] === x) return true
    if(arr[mid] < x) {
      start = mid + 1
    }else{
      end = mid - 1
    }
  }
  return false
}

let arr =  ["welcome", "john", "youssof", "hello", "there", "play", "hey", "cool", "any", "nothing", "pro", "tv", "what", "are", "is"].sort()


function findMany(string) {
  let str = string.split(" ")
  console.log(str)
  for(let i =0; i < str.length; i++) {
     if (str[i] === " ") continue;
    if(iterativeFunction(arr, str[i])) {
      console.log(true + " => " + str[i])
    }else{
      console.log(false + " => " + str[i])
    }
  }

}

findMany("hey there")
