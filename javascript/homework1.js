let sharm = 15;
let hurgada = 26;
let taba = 6;


const inputSeats = prompt('Введите количество необходимых мест', 1);
const NumberOfSeats = Number(inputSeats);
const IsValidInput = inputSeats !==null && !Number.isNaN(NumberOfSeats) && Number.isInteger(NumberOfSeats) && NumberOfSeats > 0;
console.log(IsValidInput);
if (IsValidInput) {
  if (NumberOfSeats <= 6){
    let agree = confirm('Есть меcта в группе taba, sharm и hurgada. Подтвердите, что вас устраивает taba!');
      if(agree){
        alert('Приятного путешествия в группе taba');
        let  Newtaba = taba - NumberOfSeats;
        console.log(Newtaba);}else if ( NumberOfSeats <= 15){
          let agree = confirm('Есть меcта в группе sharm и hurgada. Подтвердите, что вас устраивает sharm!');
            if(agree){
              alert('Приятного путешествия в группе sharm');
              let  Newsharm = sharm - NumberOfSeats;
              console.log(Newsharm);} else if ( NumberOfSeats <= 26){
                let agree1 = confirm('Есть меcта в группе hurgada. Подтвердите, что вас устраивает hurgada!');
                  if(agree1){
                    alert('Приятного путешествия в группе hurgada');
                    let  Newhurgada = hurgada - NumberOfSeats;
                    console.log(Newhurgada);}else {
                      alert('Нам очень жаль, приходите еще!');
                    }
                  }
              }
    }

     else if ( NumberOfSeats <= 15) {
       let agree = confirm('Есть меcта в группе sharm и hurgada. Подтвердите, что вас устраивает sharm!');
        if(agree){
        alert('Приятного путешествия в группе sharm');
        let  Newsharm = sharm - NumberOfSeats;
        console.log(Newsharm);} else {
          let agree1 = confirm('Есть меcта в группе hurgada. Подтвердите, что вас устраивает hurgada!');
            if(agree1){
            alert('Приятного путешествия в группе hurgada');
            let  Newhurgada = hurgada - NumberOfSeats;
            console.log(Newhurgada);}else {
              alert('Нам очень жаль, приходите еще!');
            }
        }
    }
     else if ( NumberOfSeats <= 26) {
      let agree = confirm('Есть меcта в группе hurgada. Подтвердите, что вас устраивает hurgada!');
        if(agree){
        alert('Приятного путешествия в группе hurgada');
        let  Newhurgada = hurgada - NumberOfSeats;
        console.log(Newhurgada);}else {
          alert('Нам очень жаль, приходите еще!');
        }
      } else if (NumberOfSeats > 26) {
        alert('Извините, мест нет.');
        }else {
          alert('Нам очень жаль, приходите еще!');
          }
            }else {
              alert('Ошибка ввода')
              }
