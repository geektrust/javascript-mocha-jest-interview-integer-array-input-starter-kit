
/*
* This is the main entry point for the program. It will parse the input for you.
* You don't need to change this.
*/
function main() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        throw new Error("No argument passed")
    }
    const arr = JSON.parse(input[0])
    const output = handle(arr)
    console.log(output)
}


/*
 * Use this method to write your solution. 
 * arr - Is an array of Integers
 */
function handle(arr) {
    //TODO: implement the logic to handle each input and return the final outuput
    return arr
}

main()
