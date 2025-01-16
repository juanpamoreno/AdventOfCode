// Javascript program to find n'th 
// term in look and say sequence
    
// Returns n'th term in 
// look-and-say sequence
function countnndSay(n)
{
    
    // Base cases
    if (n == 1)     
        return "1322113";
    if (n == 2)     
        return "1113222113";
  
    // Find n'th term by generating 
    // all terms from 3 to n-1. 
    // Every term is generated 
    // using previous term
      
    // Initialize previous term
    let str = "1113222113"; 
    
    for(let i = 3; i <= n; i++)
    {
        
        // In below for loop, previous 
        // character is processed in 
        // current iteration. That is
        // why a dummy character is 
        // added to make sure that loop
        // runs one extra iteration.
        str += '$';
        let len = str.length;
        
        // Initialize count 
        // of matching chars
        let cnt = 1; 
        
        // Initialize i'th 
        // term in series
        let tmp = ""; 
        let arr = str.split("");
          
        // Process previous term
        // to find the next term
        for(let j = 1; j < len; j++)
        {
            
            // If current character
            // doesn't match
            if (arr[j] != arr[j - 1])
            {
                
                // Append count of 
                // str[j-1] to temp
                tmp += cnt;
  
                // Append str[j-1]
                tmp += arr[j - 1];
  
                // Reset count
                cnt = 1;
            }
  
            // If matches, then increment 
            // count of matching characters
            else cnt++;
        }
  
        // Update str
        str = tmp;
        console.log(str.length)
    }
    return str;
}

// Driver Code
let N = 52;

console.log(countnndSay(N).length);