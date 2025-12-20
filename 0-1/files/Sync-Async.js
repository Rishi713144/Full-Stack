// Synchronous Function Example
function syncFunction() {
    console.log("Starting synchronous operation");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
        result += i; // Simple calculation
    }
    console.log("Synchronous operation complete. Result:", result);
    return result;
}

// Asynchronous Function Example using async/await
async function asyncFunction() {
    console.log("Starting asynchronous operation");
    
    // Simulate an async operation (e.g., fetching data) with a Promise
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); // Simulates a 2-second delay
    });
    
    console.log("Asynchronous operation complete:", data);
    return data;
}

// Running the functions
console.log("Calling synchronous function:");
syncFunction();
console.log("Synchronous function call finished.\n");

console.log("Calling asynchronous function:");
asyncFunction().then(result => {
    console.log("Async function call finished.");
});