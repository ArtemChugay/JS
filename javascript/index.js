

const hostels = 1;
const pureHotels = 2;
const hotels_3 = 3;
const hotels_4 = 4;
const hotels_5 = 5;

const input = prompt('Enter level hotels', 1);
const ChoiseHotel = Number(input);
const IsValidInput = input !== null && !Number.isNaN(ChoiseHotel);
// console.log(IsValidInput);
if (IsValidInput) {
  switch (ChoiseHotel) {
    case hostels:
    ChoiseHotel === 1;
    alert('hostels near Kyiv');

      break;
      case pureHotels:
      ChoiseHotel === 2;
      alert('hostel in Kyiv');

        break;
        case hotels_3:
        ChoiseHotel === 3;
        alert('hostel Kooperator');

          break;
          case hotels_4:
          ChoiseHotel === 4;
            alert('hostel in centre');

            break;
            case hotels_5:
            ChoiseHotel === 5;
            alert('hostel in Egupt');

              break;
    default:
    alert('Enter correct number for choise a hotel');

  }

}else {
  alert('Enter correct numbers!!!');
}
