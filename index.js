//Problem : 1 => Ana To Vori Convarter.
function anaToVori(ana) {
    //Per vori = 16 ana.
    let perVori = 16;

    //Error handaling
    if (typeof ana != 'number') {
        const errorMassage = 'Input wrong number !.Please input correct.';
        return errorMassage;
    }
    //Main part.
    else {
        let totalVori = ana / perVori;
        return totalVori;
    }

}
//anaToVori(32);

//Problem : 2 => pandaCost counter.

function pandaCost(sandwes, burger, pizza) {
    //Error Handaling.(Nagative number checking.)
    if (sandwes < 0 || burger < 0 || pizza < 0) {
        const worningMassage1 = 'Input wrong quentity ! Please input correct';
        return worningMassage1;
    }
    //Data type checking 
    if (typeof sandwes != 'number' || typeof burger != 'number' || typeof pizza != 'number') {
        const worningMassage2 = 'Input wrong quentity ! Please input correct .';
        return worningMassage2;
    } else {
        const sandwesPrize = 70;
        const burgerPrize = 100;
        const pizzaPrize = 250;

        let sandwesCost = sandwes * sandwesPrize;
        let burgerCost = burger * burgerPrize;
        let pizzaCost = pizza * pizzaPrize;

        let totalPrize = sandwesCost + burgerCost + pizzaCost;

        return totalPrize;
    }
}
// pandaCost(1, 1, 1);

//Problem 3 :=> PicnicBudget Amount counter.

function picnicBudget(students) {
    const fastHundred = 100 * 5000;
    const secondHunder = 100 * 4000;

    //Error Handaling
    if (typeof students != 'number' || students < 0) {
        const alartMassage = 'Input wrong students quentity ! Please input correct .';
        return alartMassage;
    }
    //Main part.
    var totalBudget;

    if (students <= 100) {
        totalBudget = students * 5000;
        return totalBudget;
    } else if (students <= 200) {
        totalBudget = (students - 100) * 4000 + fastHundred;
        return totalBudget;
    } else {
        totalBudget = (students - 200) * 3000 + fastHundred + secondHunder;
        return totalBudget;
    }
}


//picnicBudget(300)

//Problem no : 4 => OddFriend selector.
function oddFriend(friends) {
    //Error Handaling.
    if (Array.isArray(friends) == false) {
        return 'Input wrong items ,Please input correct.';
    }
    //Main part.
    for (let i = 0; i < friends.length; i++){
       
        if (friends[i].length % 2 != 0) {
            oddFriendName = friends[i];
            return oddFriendName;
       } 
       
    }
}

//oddFriend(//Array);