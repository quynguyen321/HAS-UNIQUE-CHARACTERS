// Write your code below
  function isUnique(str) {
    return new Set(str).size == str.length;
  }

  console.log(isUnique('find'));    
  console.log(isUnique('findd'));
  console.log(isUnique('Bob'));
