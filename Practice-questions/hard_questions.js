// Practice this type of questions.. 
// Practice this type of questions.. 
let expense = [
    {description : "Groceries", amount : 50, category: "Food"},
    {description : "Electric Bill", amount : 100, category: "Utilities"},
    {description : "Dinner", amount : 30, category: "Food"},
    {description : "Internet Bill", amount : 50, category: "Utilities"},
  ]
  
  let totalExpenses = expense.reduce((report, expense) => {
    report[expense.category] = report[expense.category] + expense.amount
    return report
  }, {Food: 0, Utilities: 0} )
  
  // console.log(totalExpenses)


