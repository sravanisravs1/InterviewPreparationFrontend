function resolveAfter1Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('c');
      }, 1000);
    });
  }
  function resolveAfter0Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('d');
      }, 0);
    });
  }
  
  async function asyncCall() {
    console.log('a');
    console.log('b');
    const result = await resolveAfter1Seconds();
    console.log(result);
    const result2 = await resolveAfter0Seconds();
    console.log(result2);
    console.log('e')
    
    // Expected output: "resolved"
  }
  
  asyncCall();
  