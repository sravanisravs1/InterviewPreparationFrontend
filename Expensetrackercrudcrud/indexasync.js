document.getElementById('expForm').addEventListener('submit', addExpense);


window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/09cb62b1b11f4b329eef27af318bc709/Expenses")
         .then((response)=>{
            for(let i=0;i<response.data.length;i++){
                showExpenses(response.data[i])
            }
          })
         .catch((err)=>{
            console.log(err)
          })
       
})

function showExpenses(exp){
    const parentNode = document.getElementById('ExpenseTable');
    const childHTML = `<li id=${exp._id}> Description: ${exp.name} Type: ${exp.type} Amount- ${exp.amount}
                            <button onclick="deleteExpense('${exp._id}')"> Delete </button>
                            <button onclick="editExpense('${exp.type}','${exp.amount}','${exp._id}')">Edit </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

async function addExpense(e){
    try{
        e.preventDefault();
        let type = document.getElementById('type').value;
        let name = document.getElementById('name').value;
        let amount = document.getElementById('amount').value

        if(type != 'chooseOne' 
            && name.length > 0 
            && amount > 0){
            const expense = {
                type, 
                name, 
                amount
                
            }
            const response=await axios.post("https://crudcrud.com/api/09cb62b1b11f4b329eef27af318bc709/Expenses",expense);
            showExpenses(expense);
            console.log(response);
        }
        
    }catch(err){
                
        document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong</h4>"
                
        console.log(err);
        }
     
    }



async function deleteExpense(expenseId){
    try{
        await axios.delete(`https://crudcrud.com/api/09cb62b1b11f4b329eef27af318bc709/Expenses/${expenseId}`)
         
        console.log("user deleted");
        removeExpense(expenseId)
    }catch(err){
        console.log(err)
    }
           

    }
    
  
    
    

function editExpense(type,amount,expenseId){
    
        document.getElementById('type').value=type;
        document.getElementById('amount').value=amount;
        
        deleteExpense(expenseId);

}
function removeExpense(expenseId){
    const parentNode = document.getElementById('ExpenseTable');
    const childNodeToBeDeleted = document.getElementById(expenseId);

    parentNode.removeChild(childNodeToBeDeleted)
}    
    

