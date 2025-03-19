// Situation	Use try...catch?
// API Calls (fetch, axios)	✅ Yes
// File Reading (fs.readFileSync)	✅ Yes
// JSON Parsing (JSON.parse)	✅ Yes
// setTimeout, setInterval	✅ Yes
// Variable Assignments	❌ No
// Simple Loops	❌ No/

//data fehing
async function data(){
    try{
        let res=waitch fetch("");
        if(res.ok) throw new Error("
    }
    catch(error){
        console.log(error);
    }
}