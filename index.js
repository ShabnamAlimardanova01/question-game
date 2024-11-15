const startOrder = confirm("Xoş gəlmisiniz! Sifariş vermək üçün hazırsınız?") // Sifarisin baslanmasini sorucur

if(startOrder){  // Əgər sifariş verməyə hazırsa
    const question1 = confirm ("Çay və ya qəhvə sifariş vermək istəyirsiniz?") // çay ve ya qəhvə təklifi edir
    if(question1){
        const yourDrink = prompt("Seçiminizi edin çay və ya qəhvə"); // içki seçimi alınır
        let price;  // içkinin qiymətini saxlayacaq dəyişən
        let drinkType;  // içkinin növünü saxlayacaq dəyişən
      if(yourDrink.toLowerCase()=="çay"){  // 
         price=2.5; // çayın qiyməti
         drinkType = prompt("Çayın növünü seçin: yaşıl, qara, nanəli və ya bitki çayı"); // çayın növünü sorucur
         alert("Seçtiyiniz çayın növü:" + drinkType); // çayın növünü göstərir
         alert(`Sizin hesab ${price} manatdır`) // çayın qiymətini göstərir
         alert(`Sizin seçdiyiniz içki olan ${yourDrink} ${drinkType} hazırlanır.`); // Seçilen içkinin hazırlanmasını bildirir

      } else if (yourDrink.toLowerCase()=="kofe"){ // Əgər istifadəçi qəhvə seçibsə
        price=3.5; // Qəhvənin qiyməti

        drinkType = prompt("Qəhvənin növünü seçin: Espresso, Latte, Americano və ya Cappuccino"); // Qəhvənin növünü soruşur
        alert("Seçtiyiniz qəhvənin növü:" + drinkType); // Qəhvənin növünü göstərir
        alert(`Sizin hesab ${price} manatdır`); // Qəhvənin qiymətini göstərir
        alert(`Sizin seçdiyiniz içki olan ${yourDrink} ${drinkType} hazırlanır.`); // Seçilen içkinin hazırlanmasını bildirir
      }else{ // mövcud içkilərdən heç biri seçilməyibsə
        alert("Mövcud içkilərdən seçim etdiyinizdən əmin olun.");
        // price=0;
      }
        // Şirniyyat təklifi edirik
        const dessertOffer = confirm("Çayın və ya qəhvənin yanında şirniyyat sifariş etmək istəyirsiniz?");
        if (dessertOffer) { // // Əgər şirniyyat istəyirsə
            dessertChoice = prompt("Şirniyyat seçin: Şokoladlı tort - 3 manat, Kek - 2 manat, Donat - 1.5 manat Biskvit - 1 manat"); // Şirniyyat seçimi 
            // Şirniyyat qiyməti
            if (dessertChoice.toLowerCase() == "şokoladlı tort") {
                dessertPrice = 3; 
                } 
                else if (dessertChoice.toLowerCase() == "kek") {
                dessertPrice = 2;
                }
                 else if (dessertChoice.toLowerCase() == "donat") {
                dessertPrice = 1.5;
                }
                else if(dessertChoice.toLowerCase()== "Biskvit") {
                    dessertPrice = 1;
                }
                else { //mövcud şirniyyatlardan heç biri seçilməyibsə
                alert("Mövcud şirniyyatlardan seçim etdiyinizdən əmin olun.");
                }

           
            let totalPrice = price + dessertPrice;  // kofe ilə şirniyyatın cəmini hesablayırıq
            alert(`Şirniyyat seçiminiz: ${dessertChoice} - ${dessertPrice} manat`); // Şirniyyatın adını və qiymətini göstərir
            alert(`Cəmi hesab: ${totalPrice} manatdır.`); // Cəmi qiyməti göstərir

     }
    }
}  else{  // Əgər sifariş vermək istəmirsə
    const yourFeedback = prompt("Hər hansı təklifiniz və ya sualınız varsa, buraya qeyd ede bilərsiniz.")  // Təklif və ya sual alınır
    if(yourFeedback.toLowerCase()=="çatdırılma"){  // Əgər çatdırılma istəsə
        alert("Çatdırılma xidməti yaxın zamanda istifadəyə veriləcək.");
    } else if(yourFeedback){   // Əgər başqa bir təklif və ya sual verərsə
        const yourPhoneNumber = prompt("Əlaqə nömrənizi qeyd edin, sizə geri dönüş olunacaq.")  // Telefon nömrəsi alınır
        if(yourPhoneNumber){ // Telefon nömrəsi verilərsə
            alert("Bu nömrə ilə əlaqə saxlanılacaq:" + yourPhoneNumber)  // Nömrəni göstərir
        }
    } else { // Əgər heç bir şey yazmazsa
        alert("Yenidən gözləyirik")
    }   
}