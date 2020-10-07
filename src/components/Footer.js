
const wait = time => new Promise(
  res => setTimeout(() => res(), time)
);

wait(200)  
  .then(() => console.log("hi")) 
  .then(a => a)  
  .then(b => b) // 'foo'
  .then(c => console.log(c))