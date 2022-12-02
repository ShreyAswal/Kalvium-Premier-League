//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return [managerName,managerAge,currentTeam,trophiesWon]
}
console.log(createManager("shrey",18,"argentina",4))

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4,4,3];


//write your function here
function createFormation([defender,midfield,forward]){
    var object={
      defender:defender,
      midfield:midfield,
      forward:forward
    }
    if(defender===undefined && midfield===undefined && forward===undefined){
      return null
    }
    return object
  
  
}
console.log(createFormation( [4,3]))
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var obj=[]
  for(let i=0;i<players.length;i++){
    if(players[i].debut===year){
      obj.push(players[i])
    }
    else{
      i=i
    }
  }
  return obj
}
filterByDebut()

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var obj=[]
  players.forEach((e)=>{
    if(e.position===position){
      obj.push(e)
    }
    console.log(e)
  })
  return obj;
}
// console.log(filterByPosition("forward"))

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  return players.filter((playerObj)=>{
    let awards=playerObj.awards.filter((award)=>{
      return award.name===awardName
    });
    return awards.length>0
  })

}

console.log(filterByAward("FIFA FIFPro World XI"))
// console.log(players[1].awards[1])
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  return players.filter((playerKey)=>{
    let playerAwards=playerKey.awards.filter((awardees)=>{
      return awardees.name===awardName
    })
    return playerAwards.length===noOfTimes

  }) 
}

    
  

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  return players.filter((player)=>{
    if(player.country===country){
      let awards=player.awards.filter((award)=>{
        return award.name===awardName
      })
      return awards.length>0
    }

    
  })
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  return players.filter((P)=>{
    return P.team===team && P.age<age && P.awards.length>=noOfAwards
  })
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
