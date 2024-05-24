const party = [
    { name: "Gorvoth", level: 5, xp: 1000, questXP: 200 },
    { name: "Eilif Stonefist", level: 3, xp: 500, questXP: 150 },
    { name: "Shadowheart", level: 4, xp: 800, questXP: 250 }
  ];

  function calculatePartyExperience(arr) {
    let totalXp = 0 
    for (let i = 0; i < arr.length; i++) {
        let member = arr[i]
        let newExp = member.questXP
        if (member.level >= 5) {
            newExp += Math.floor(member.questXP * 0,2)
        }
        totalXp += newExp
    }
    return totalXp
  }

  console.log(calculatePartyExperience(party))