function match(em) {
            var i;
            for (i = 0; i <= 9; i++) {
                if (em == i) {
                    document.getElementById("ak").innerHTML = "please enter alphabet only"
                }
            }




        }
        function count(rt) {
            if (isNaN(rt.value)) {
                document.getElementById("rk").innerHTML = "enter numbers only"
            } else {
                document.getElementById("rk").innerHTML = "";
                if (rt.value.length > 10) {
                    document.getElementById("rk").innerHTML = "enter correct number"
                } else {
                    document.getElementById("rk").innerHTML = ""
                }

            }
        }
        function count1(rm) {
            if (isNaN(rm.value)) {
                document.getElementById("rh").innerHTML = "enter numbers only"
            } else {
                document.getElementById("rh").innerHTML = "";
                if (rm.value.length > 3) {
                    document.getElementById("rh").innerHTML = "enter correct age"
                } else {
                    document.getElementById("rh").innerHTML = ""
                }

            }
        }



        var a = "sandeep"
        function refresh() {
            document.write("<marquee><h1>Thankyou for choosing us and we contact you in few minutes</h1></marquee>");
        }
        document.getElementById("late").style.display = "none"
        setTimeout(function first() {
            document.getElementById("late").style.display = "block"


        }, 5000)
        function san() {
            document.getElementById("late").style.display = "none";

        }
        var a = document.getElementById("golu").value;
        document.getElementById("gk1").style.display = "none";
        document.getElementById("gk2").style.display = "none";
        document.getElementById("gk3").style.display = "none";
        document.getElementById("gk4").style.display = "none";
        document.getElementById("main").style.display = "none";


        function magic() {
            if (a = "eye") {
                document.getElementById("main").style.display = "block";

                document.getElementById("vi").style.display = "none";
                document.getElementById("gk1").style.display = "block";
            }
            else if (a = "ear") {
                document.getElementById("main").style.display = "block";
                document.getElementById("vi").style.display = "none";

                document.getElementById("gk2").style.display = "block";
            }
            else if (a = "pain") {
                document.getElementById("main").style.display = "block";

                document.getElementById("vi").style.display = "none";
                document.getElementById("gk3").style.display = "block";
            }
        }
        document.getElementById("man").style.display = "none";



