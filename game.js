let max = 999999;
let min = 100000; 

let id_1 = (Math.floor(Math.random() * (max-min+1)) + min) 
let id_2 = (Math.floor(Math.random() * (max-min+1)) + min)
let id_3 = (Math.floor(Math.random() * (max-min+1)) + min)

let n  = 0;
let p = 0;
let c = 0;

let log1
let GuessC = Math.floor(Math.random() * 1000) + 1;
let ro = 0


let log2 = null
let t = 0
let M = 0
let m = 0
let S = 0
let s = 0
let MS = 0
let ms = 0 
let ps = 0
let cs = 0
let Stop = false
let intv;
 


function num_maker(str)
{
    let num;

    if(str == "Rock")
    {
        num = 1;
    }
    else if(str == "Paper")
    {
        num = 2;
    }
    else if(str == "Scissors")
    {
        num = 3;
    }
    else
    {
        num = "Misspelled"
    }

    return num;
}

function str_maker(num)
{
    let str;

    if(num == 1)
    {
        str = "<i class='fas fa-hand-rock fa-2x d-block'> </i> " + "Rock";  
    }
    else if(num == 2)
    {
        str = "<i class='fas fa-hand-paper fa-2x d-block'> </i> " + "Paper" 
    }
    else if(num == 3)
    {
        str = "<i class='fas fa-hand-Scissors fa-2x d-block'> </i> " + "Scissors"
    }
    
    return str;
}

function input()
{
    document.getElementById("srps").style.visibility = "visible"
    const l = document.getElementById("rou").value;
    const N1 = document.getElementById("pN1").value;
    console.log(N1)
    console.log(l);
    n = n+1
    let str = document.getElementById("ch").value;
    let num1 = num_maker(str);
    let num2 = Math.floor(Math.random() * 3) + 1;
    console.log(num2)
    let computer_choice = str_maker(num2);
    let result1 = "Draw"
    let result_2 = N1
    let result_3 = "computer"
    let winner;
    let point_1 = 0;
    let point_2 = 0;
    let d1 = num2-num1
    let d2 = num1-num2

    if(str == "Rock")
    {
        str = "<i class='fas fa-hand-rock fa-2x d-block'> </i> " + "Rock"
    }
    else if(str == "Paper")
    {
        str = "<i class='fas fa-hand-paper fa-2x d-block'> </i> " + "Paper"
    }
    else if(str == "Scissors")
    {
        str = "<i class='fas fa-hand-scissors fa-2x d-block'> </i> " + "Scissors"
    }

    document.getElementById("h1").style.display = "none";
    document.getElementById("pN1").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("rou").style.display = "none";
    
    document.getElementById("ch").value = null;

    document.getElementById("pn1").innerHTML = "Player's name : " + N1
    document.getElementById("roch").innerHTML = "Round Playing : " + l 
    document.getElementById("ro1").innerHTML = "Round left : " + (l-n)

    if(num1=="Misspelled")
    {
        alert("You Misspelled")
        $('#rpsm').modal('hide')
    }
    else if(num1==num2)
    {
        winner = result1;
        point_1 += 1;
        point_2 += 1;
        p += point_1
        c +=point_2
    }
    else if(num1<num2 && d1==2)
    {
        winner = result_2;
        point_1 += 3;
        p +=point_1
    }
    else if(num1<num2 && d1==1)
    {
        winner = result_3;
        point_2 += 3;
        c += point_2
    }

    else if(num2<num1 && d2==1)
    {
        winner = result_2
        point_1 += 3
        p += point_1
    }
    else if(num2<num1 && d2==2)
    {
        winner = result_3;
        point_2 += 3
        c += point_2 
    }  

    document.getElementById("ghs").style.display = "block";
    document.getElementById("mhs").style.display = "block";

    document.getElementById("name1").innerHTML = "Player's Name : " + N1;
    document.getElementById("id1").innerHTML = "Players's Id : " + id_1
    document.getElementById("name").innerHTML = null;
    document.getElementById("name").innerHTML = N1 + " choice's";
    document.getElementById("points").innerHTML = null;  
    document.getElementById("points").innerHTML = N1 + "'s point";

    let table = document.getElementById("jhh");
    let row = table.insertRow(n);
    row.scrollIntoView()

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = n;
    cell2.innerHTML = str;
    cell3.innerHTML = computer_choice;
    cell4.innerHTML = winner;
    cell5.innerHTML = point_1;
    cell6.innerHTML = point_2;

    let Gr1 ="<p>" + N1 + " and computer Draw the match by " + p + " - " + c + " points. </p>";
    let Gr2 ="<p>" + N1 +" Win the match aginst computer by " + p + "  - " + c + " points. </p>";
    let Gr3 = "<p> Computer Win the match against " + N1 + " by " + c + " - " + p + " points. </p>"; 
    if(n==l)
    {
        $('#rpsm').modal('hide')

        let table2 = document.getElementById("jhs");
        let row2 = table2.insertRow(0)

        let cell11 = row2.insertCell(0)
        let cell12 = row2.insertCell(1)
        let cell13 = row2.insertCell(2)

        cell11.innerHTML = "Total";
        cell12.innerHTML = N1 +" : " + p
        cell13.innerHTML = "Computer : " + c

        document.getElementById("final1").style.display = "block";
        document.getElementById("final1").scrollIntoView();
        document.getElementById("mps").style.visibility= "hidden"

        if(c==p)
        {
            return(document.getElementById("final").innerHTML = Gr1)
        }
        else if(p>c)
        {
            return (document.getElementById("final").innerHTML = Gr2)
        }
        else
        {
            return (document.getElementById("final").innerHTML = Gr3)
        }

    }
}

function input2()
{
    document.getElementById("hf").style.visibility = "visible";
    ro +=1;

    const pw = document.getElementById("level2")
    const name2 = document.getElementById("name2").value
    let High = "Higher"
    let Low = "Lower"
    let corr = "Correct";
    let guessp = document.getElementById("guess").value;
    let guess;
    let strp,strc,strg;

    document.getElementById("chsa").innerHTML = null
    document.getElementById("chsa").innerHTML = name2 + "'s guess"
    document.getElementById("chsb").innerHTML = null
    document.getElementById("chsb").innerHTML = name2 + "'s guess Level"
    document.getElementById("chsc").innerHTML = null 
    document.getElementById("chsc").innerHTML = name2 + "'s mood"

    document.getElementById("level2").style.visibility = "hidden"
    document.getElementById("name2").style.visibility = "hidden";
    document.getElementById("guess").value = null

    if(guessp>1000)
    {
        guess = "Out of Range"
        strg = '<i class="far fa-exclamation-square"></i> ' + " Out of Range"
        strp = "<i class='far fa-grin-tongue-wink'></i>"
        strc = "<i class='far fa-angry'></i>"
    }
    else if(guessp == null)
    {
        guess = "Null"
        strg = '<i class="far fa-exclamation-square"></i>' + " Null"
        strp = "<i class='far fa-grin-tongue-wink'></i>"
        strc = "<i class='far fa-angry'></i>"
    }
    else if(guessp>GuessC)
    {
        guess = High
        strg = '<i class="far fa-arrow-up"></i> ' + High
        strp = '<i class="far fa-frown-open"></i>';
        strc = '<i class="far fa-grin-tongue-wink"></i>'
    }
    else if(guessp<GuessC)
    {
        guess = Low
        strg = '<i class="far fa-arrow-down"></i> ' + Low
        strp ='<i class="far fa-frown-open"></i>'
        strc = '<i class="far fa-laugh-wink"></i> '
    }
    else if(guessp==GuessC)
    {
        guess = corr
        strg = '<i class="far fa-check-circle"></i> ' + guess
        strp = '<i class="far fa-smile"></i>'
        strc = '<i class="far fa-thumbs-up"></i>'
        $('#guessme').modal('hide')
    }
    

    document.getElementById("chancr").innerHTML = "Chance remain : " + (10-ro);

    document.getElementById("nam2").innerHTML = "Player's Name : " + name2;
    document.getElementById("id2").innerHTML = "Player's Id : " + id_2;

    let table = document.getElementById("gut")
    let row = table.insertRow(ro);
    row.scrollIntoView();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = ro;
    cell2.innerHTML = guessp;
    cell3.innerHTML = strg;
    cell4.innerHTML = strp;
    cell5.innerHTML = strc;

    if(guess == corr)
    {
        document.getElementById("sedy").style.visibility = "visible";
        let p = "<p>" + name2 + " is correct. The Computer guessed Nummber is " + GuessC + ".</p> <p> He guessed the Number in round of : " + ro + "</p>";
        document.getElementById("mtn").style.visibility = "hidden"
        return (document.getElementById("final2").innerHTML = p);
    }

    if(ro == 10)
    {
        if(guess!=corr)
        {
            document.getElementById("sedy").style.visibility = "visible"
            $('#guessme').modal('hide')
            document.getElementById("mtn").style.visibility = "hidden"

            let P = "<p>10th Round is Over. </p> <p>" + name2 + " Failed to guess.</p> <p> The Computer guessed number is " + GuessC + " . Try again </p>";
            return(document.getElementById("final2").innerHTML = P) 
        }
    }
}



function login()
{
    log2 = document.getElementById("istw").value;
    id = (Math.floor(Math.random() * (max-min+1)) + min);
    document.getElementById("sww").style.visibility = "visible";
    document.getElementById("loi").style.visibility = "hidden";
    document.getElementById("sww").scrollIntoView();
}


function input3()
{
    M = 0
    m = 0
    S = 0
    s = 0
    MS = 0
    ms = 0
    ps = 0
    cs = 0
    document.getElementById("dew").style.display = "block"; 

    document.getElementById("Name3").innerHTML = "Player name : " + log2
    document.getElementById("id3").innerHTML = "Player Id : " + id_3
    document.getElementById("sc").innerHTML =  ps + "/" + cs;
    document.getElementById("stop").innerHTML = " "+ M + m + " : " + S + s + " . " + ms;
}

function starttimeer()
{
  ms++;
    
  if(ms>9)
  {
    s++;
    ms = ms % 10
  }
  if(s>9)
  {
      S++;
      s = s % 10;
  }
  if(S>5)
  {
      m++
      S = S % 6
  }
  if(m>9)
  {
      M++
      m = m % 10
  }

  document.getElementById("stop").innerHTML = null;
  document.getElementById("stop").innerHTML = " "+ M + m + " : " + S + s + " . " + ms;
  Stop = true
}


let start = document.getElementById("start")
let stop = document.getElementById("top")
let reset = document.getElementById('reset')

start.onclick = function()
{
    clearInterval(intv)
    intv = setInterval(starttimeer,100)

}

stop.onclick = function()
{
    if(Stop===true)
    {
        clearInterval(intv)

        if(ms==0)
        {
            ps++
        }
        else
        {
            cs++
        }
        document.getElementById("sc").innerHTML = ps + "/" + cs;
        Stop = false;
    }

    
}

reset.onclick = function()
{
    clearInterval(intv)
    input3();
}
