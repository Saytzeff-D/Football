class Keeper{
    Name = "Steve Chech";
    Attack = 80;
    Stamina = 96;
    Defense = 78;
    Dribble = 56;
    Speed = 40;
    constructor(changedName){
        this.changedName = changedName
    }
    disKeeper(){
        var data = "";
        data += "<table class='table-responsive' border='1px' solid black><tr><th>Name</th><th>Attack</th><th>Stamina</th><th>Defense</th><th>Dribble</th><th>Speed</th><th>Opt</th><th>Opt</th><th>Opt</th><th>Opt</th></tr>";
        var res = "<td>" + this.changedName == '' ? this.Name : this.changedName + "</td>" + "<td>" + this.Attack + "</td>" + "<td>" + this.Stamina + "</td>" + "<td>" + this.Defense + "</td>" + "<td>" + this.Dribble + "</td>" + "<td>" + this.Speed + "</td>" + "<td>" + "<button onclick='obj.disKeeper()' class='btn btn-dark' >GK</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >DF</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >MF</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >SR</button>"  + "</td>";
        var sumdata = "<tr>" + res + "</tr>";
        data += sumdata;
        result.innerHTML = data + "</table>";
    }
}
var obj = new Keeper('');
class Defender{
    Name = "Jose Yobo";
    constructor(Attack, Stamina, Defense, Dribble, Speed, changedName){
        this.Attack = Attack;
        this.Stamina = Stamina;
        this.Defense = Defense;
        this.Dribble = Dribble;
        this.Speed = Speed;
        this.changedName = changedName
    }
    disDefend(){
        var data1 = "";
        data1 += "<table class='table-responsive' border='1px' solid black><tr><th>Name</th><th>Attack</th><th>Stamina</th><th>Defense</th><th>Dribble</th><th>Speed</th><th>Opt</th><th>Opt</th><th>Opt</th><th>Opt</th></tr>";
        var res1 = "<td>" + this.changedName == '' ? this.Name : this.changedName + "</td>" + "<td>" + this.Attack + "</td>" + "<td>" + this.Stamina + "</td>" + "<td>" + this.Defense + "</td>" + "<td>" + this.Dribble + "</td>" + "<td>" + this.Speed + "</td>" + "<td>" + "<button onclick='obj.disKeeper()' class='btn btn-dark' >GK</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >DF</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >MF</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >SR</button>"  + "</td>";
        var sumdata = "<tr>" + res1 + "</tr>";
        data1 +=sumdata;
        result.innerHTML = data1 + "</table>";
    }
}
var obj1 = new Defender(87, 90, 92, 60, 70, '');
class Defender2 extends Defender{
    Name = "Pogba Desa";
}
var obj2 = new Defender2(87, 90, 92, 60, 70, '');
class Defender3 extends Defender{
    Name = "Ivon Ekong";
}
var obj3 = new Defender3(87, 90, 92, 60, 70, '');
class Defender4 extends Defender{
    Name = "Temi Oke";
}
var obj4 = new Defender4(87, 90, 92, 60, 70, '');
class Midfielder{
    Name = "Chuks Eno";
    constructor(Attack, Stamina, Defense, Dribble, Speed){
        this.Attack = Attack;
        this.Stamina = Stamina;
        this.Defense = Defense;
        this.Dribble = Dribble;
        this.Speed = Speed;
    }
    midFielder(){
        var data2 = "";
        data2 += "<table class='table-responsive' border='1px' solid black><tr><th>Name</th><th>Attack</th><th>Stamina</th><th>Defense</th><th>Dribble</th><th>Speed</th><th>Opt</th><th>Opt</th><th>Opt</th><th>Opt</th></tr>";
        var res2 = "<td>" + this.Name + "</td>" + "<td>" + this.Attack + "</td>" + "<td>" + this.Stamina + "</td>" + "<td>" + this.Defense + "</td>" + "<td>" + this.Dribble + "</td>" + "<td>" + this.Speed + "</td>" + "<td>" + "<button onclick='obj.disKeeper()' class='btn btn-dark' >GK</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >DF</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >MF</button>"  + "</td>" + "<td>" + "<button class='btn btn-dark' >SR</button>"  + "</td>";
        var sumdata = "<tr>" + res2 + "</tr>";
        data2 +=sumdata;
        result.innerHTML = data2 + "</table>";
    }
}
if (formation.value == "4-3-3" || "3-4-3" || "4-4-2") {
    var obj5 = new Midfielder(49, 63, 56, 83, 90);
}
else{
var obj5 = new Midfielder(87, 90, 92, 60, 70);

}

class Midfielder2 extends Midfielder{
    Name = "Adriano Reg";
}
var obj6 = new Midfielder2(49, 63,56, 83, 90);

class Midfielder3 extends Midfielder{
    Name ="Kollman Robe";
}
var obj7 = new Midfielder3(49, 63, 56, 83, 90);

class Striker{
    Name = "Lionel Messi";
    constructor(Attack, Stamina, Defense, Dribble, Speed){
        this.Attack = Attack;
        this.Stamina = Stamina;
        this.Defense = Defense;
        this.Dribble = Dribble;
        this.Speed = Speed;
    }
    disStriker(){
        var data3 = "";
        data3 += "<table class='table-responsive' border='1px' solid black ><tr><th>Name</th><th>Attack</th><th>Stamina</th><th>Defense</th><th>Dribble</th><th>Speed</th><th>Opt</th><th>Opt</th><th>Opt</th><th>Opt</th></tr>";
        var res3 = "<td>" + this.Name + "</td>" + "<td>" + this.Attack + "</td>" + "<td>" + this.Stamina + "</td>" + "<td>" + this.Defense + "</td>" + "<td>" + this.Dribble + "</td>" + "<td>" + this.Speed + "</td>" + "<td>" + "<button onclick='obj.disKeeper()' class='btn btn-dark' onclick='goalKeep()'>GK</button>"  + "</td>"  + "<td>" + "<button class='btn btn-dark' >DF</button>"  + "</td>"  + "<td>" + "<button class='btn btn-dark' >MF</button>"  + "</td>"  + "<td>" + "<button class='btn btn-dark' >SR</button>"  + "</td>";
        var sumdata = "<tr>" + res3 + "</tr>";
        data3 +=sumdata;
        result.innerHTML = data3 + "</table>";
    }
}
var obj8 = new Striker(63, 79, 50, 96, 88);

class Striker2 extends Striker{
    Name = "Niels Bohr";
}
var obj9 = new Striker2(63, 79, 50, 96, 88);

class Striker3 extends Striker{
    Name = "C.Ronaldo";
}
var obj10 = new Striker3(63, 79, 50, 96, 88);
function goalKeep () {
    alert()
}
function changeFormation() {
    if (formation.value == "4-3-3") {
        p1.style.marginTop = "-150px";
        p2.style.marginLeft ="280px";
        p2.style.marginTop = "-200px";
        btn2.style.backgroundColor = "blue";
        p3.style.marginTop = "80px";
        p3.style.marginLeft = "240px";
        btn3.style.backgroundColor = "blue";
        p4.style.marginTop = "150px";
        p4.style.marginLeft = "235px";
        btn4.style.backgroundColor = "blue";
        p5.style.marginTop = "100px";
        p5.style.marginLeft = "290px";
        btn5.style.backgroundColor = "blue";
        p6.style.marginTop = "-140px";
        p6.style.marginLeft = "670px";
        btn6.style.backgroundColor = "violet";
        p7.style.marginTop = "-100px";
        p7.style.marginLeft = "600px";
        btn7.style.backgroundColor = "violet";
        p8.style.marginTop = "-130px";
        p8.style.marginLeft = "690px";
        btn8.style.backgroundColor = "violet";
        p9.style.marginTop = "-60px";
        p9.style.marginLeft = "1100px";
        btn9.style.backgroundColor = "red";
        p10.style.marginTop = "110px";
        p10.style.marginLeft = "1150px";
        btn10.style.backgroundColor = "red";
        p11.style.marginTop = "170px";
        p11.style.marginLeft = "1110px";
        btn11.style.backgroundColor = "red";
    }
    else if (formation.value == "3-4-3") {
        outerGoalPostLeft.style.marginLeft = '87px';
        innerGoalPostLeft.style.marginLeft = '87px';
        p1.style.marginTop = "-150px";
        p2.style.marginLeft ="280px";
        p2.style.marginTop = "-200px";
        btn2.style.backgroundColor = "blue";
        p3.style.marginTop = "180px";
        p3.style.marginLeft = "240px";
        btn3.style.backgroundColor = "blue";
        p4.style.marginTop = "170px";
        p4.style.marginLeft = "290px";
        btn4.style.backgroundColor = "blue";
        p5.style.marginTop = "-120px";
        p5.style.marginLeft = "650px";
        btn5.style.backgroundColor = "violet";
        p6.style.marginTop = "-200px";
        p6.style.marginLeft = "640px";
        p7.style.marginTop = "-150px";
        p7.style.marginLeft = "740px";
        p8.style.marginTop = "400px";
        p8.style.marginLeft = "750px";
        p9.style.marginTop = "-460px";
        p9.style.marginLeft = "1000px";
        p10.style.marginTop = "450px";
        p10.style.marginLeft = "1000px";
        p11.style.marginTop = "-250px";
        p11.style.marginLeft = "1150px";
    }
    else if (formation.value == "4-4-2") {
        p1.style.marginTop = "-150px";
        p2.style.marginLeft ="280px";
        p2.style.marginTop = "-200px";
        btn2.style.backgroundColor = "blue";
        p3.style.marginTop = "80px";
        p3.style.marginLeft = "240px";
        btn3.style.backgroundColor = "blue";
        p4.style.marginTop = "150px";
        p4.style.marginLeft = "235px";
        btn4.style.backgroundColor = "blue";
        p5.style.marginTop = "100px";
        p5.style.marginLeft = "290px";
        btn5.style.backgroundColor = "blue";
        p6.style.marginTop = "-140px";
        p6.style.marginLeft = "670px";
        btn6.style.backgroundColor = "violet";
        p7.style.marginTop = "-100px";
        p7.style.marginLeft = "600px";
        btn7.style.backgroundColor = "violet";
        p8.style.marginTop = "-130px";
        p8.style.marginLeft = "690px";
        btn8.style.backgroundColor = "violet";
        p9.style.marginTop = "70px";
        p9.style.marginLeft = "750px";
        btn9.style.backgroundColor = "violet";
        p10.style.marginTop = "-110px";
        p10.style.marginLeft = "1150px";
        btn10.style.backgroundColor = "red";
        p11.style.marginTop = "170px";
        p11.style.marginLeft = "1150px";
        btn11.style.backgroundColor = "red";
    }
    else if (formation.value == "5-4-1") {
        p1.style.marginTop = "-150px";
        p2.style.marginLeft ="280px";
        p2.style.marginTop = "-200px";
        p3.style.marginTop = "80px";
        p3.style.marginLeft = "240px";
        p4.style.marginTop = "70px";
        p4.style.marginLeft = "235px";
        p5.style.marginTop = "75px";
        p5.style.marginLeft = "242px";
        btn5.style.backgroundColor = "blue";
        p6.style.marginTop = "100px";
        p6.style.marginLeft = "300px";
        btn6.style.backgroundColor = "blue";
        p7.style.marginTop = "-300px";
        p7.style.marginLeft = "630px";
        p8.style.marginTop = "115px";
        p8.style.marginLeft = "630px";
        p9.style.marginTop = "-160px";
        p9.style.marginLeft = "700px";
        btn9.style.backgroundColor = "violet";
        p10.style.marginTop = "125px";
        p10.style.marginLeft = "700px";
        btn10.style.backgroundColor = "violet";
        p11.style.marginTop = "-80px";
        p11.style.marginLeft = "1050px";	
    }
    else if (formation.value == "5-3-2") {
        p1.style.marginTop = "-150px";
        p2.style.marginLeft ="280px";
        p2.style.marginTop = "-200px";
        p3.style.marginTop = "80px";
        p3.style.marginLeft = "240px";
        p4.style.marginTop = "70px";
        p4.style.marginLeft = "235px";
        p5.style.marginTop = "75px";
        p5.style.marginLeft = "242px";
        p6.style.marginTop = "100px";
        p6.style.marginLeft = "300px";
        p7.style.marginTop = "-300px";
        p7.style.marginLeft = "630px";
        p8.style.marginTop = "115px";
        p8.style.marginLeft = "630px";
        p9.style.marginTop = "-90px";
        p9.style.marginLeft = "750px";
        p10.style.marginTop = "-160px";
        p10.style.marginLeft = "1115px";
        btn10.style.backgroundColor = "red";
        p11.style.marginTop = "265px";
        p11.style.marginLeft = "1120px";
    }
}