const CURR_DICTIONARY =
{
  "PENNY" : 0.01,
  "NICKEL" : 0.05,
  "DIME" : 0.1,
  "QUARTER" : 0.25,
  "ONE" : 1,
  "FIVE" : 5,
  "TEN" : 10,
  "TWENTY" : 20,
  "ONE HUNDRED" : 100
};

const ORDERED_CASH = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

function checkCashRegister(price, cash, cid)
{
  let change = {};
  let owed = (cash - price) / 0.01;
  let cashRegister = {};
  let cashAvailable = 0;
  let totalCashGiven = 0;
  let final = {};

  // convert current cash register to a dictionary
  for(let i = 0; i < cid.length; i++)
  {
      cashRegister[cid[i][0]] = cid[i][1] / 0.01;
      cashAvailable += cid[i][1] / 0.01;
  }

  while(owed > 0 && totalCashGiven < (cash - price) && cashAvailable > 0)
  {
    // iterate over standard notes and see if register can give as change
    for(let j = 0; j < ORDERED_CASH.length; j++)
    {
      var note = ORDERED_CASH[j];
      var stdCurrencyVal = CURR_DICTIONARY[note] / 0.01;

      // can the cash register give this note as change?
      if(owed - stdCurrencyVal > 0 && note in cashRegister && cashRegister[note] > 0 )
      {
        change[note] = 0;
        var rounds= (owed-(owed%stdCurrencyVal))/stdCurrencyVal;

        for (let r = 1; r <= rounds; r++)
        {
          if(cashRegister[note] === 0){break;}
          // add to change of customer
          change[note] += stdCurrencyVal;
          totalCashGiven += stdCurrencyVal;
          // decrease the amound owed
          owed -= stdCurrencyVal;
          // decrease cash in the register
          cashRegister[note] -= stdCurrencyVal;
          cashAvailable -= stdCurrencyVal;
        }
      }
    }
  }

  // sort the change by value in notes
  let sortedChange = Object.keys(change).sort(function(a,b){return change[b]-change[a]}).map(a => [a, change[a] * 0.01]);
  let listSortedChange = sortedChange.map(a => a[0]);
  final["change"] = sortedChange;
  // change status depending on how much change was given:
  if(cashAvailable > 0) { final["status"] = "OPEN";}
  if(cashAvailable == 0)
  {
    final["status"] = "CLOSED";
    final["change"] = sortedChange;
    for(let a = ORDERED_CASH.length - 1; a >= 0 ; a--)
    {
      if(listSortedChange.indexOf(ORDERED_CASH[a]) === -1)
      {
        final["change"].push([ORDERED_CASH[a], 0]);
      }
    }

  }
  if(totalCashGiven < owed) { final["status"] = "INSUFFICIENT_FUNDS"; final["change"] = []}

  // Here is your change, ma'am.
  return final;
}


let answer = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

console.log(answer);       
