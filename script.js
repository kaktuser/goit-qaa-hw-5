//Punkt 1,2 i 3

//Funkcja, metoda map() i funkcja strzałkowa
const podwajanieWartosciWTablicy = (tablica) => {
  //Metoda map() zwraca tablicę z podwojonymi liczbami
  let podwojoneLiczby = tablica.map((liczba) => liczba * 2);
  return podwojoneLiczby;
};

//Przykładowe użycie funkcji
const daneWejsciowe = [1, 2, 3, 4, 5];

//Wywołujemy funkcję podwajanieWartosciWTablicy()
const wynik = podwajanieWartosciWTablicy(daneWejsciowe);

//Wyświetlamy tablicę wejściową i wyjściową
console.log("Tablica wejściowa:", daneWejsciowe);
console.log("Tablica z podwojonymi wartościami:", wynik);

//Punkt 4,5 i 6

//Funkcja, metoda map() i funkcja strzałkowa
const pobierzImionaStudentow = (studenci) => {
  // Zwrócamy tablicę z imionami
  let imionaStudentow = studenci.map((student) => student.imie);
  return imionaStudentow;
};

// Tablica studentów
const studenci = [
  { nr: 1, imie: "Piotr", wiek: 28 },
  { nr: 2, imie: "Adam", wiek: 25 },
  { nr: 3, imie: "Grzegorz", wiek: 42 },
  { nr: 4, imie: "Rafał", wiek: 31 },
];

// Wywołujemy funkcję pobierzImionaStudentow()
const imionaStudentow = pobierzImionaStudentow(studenci);

// Wyświetlamy tablicę wejściową i z imionami
console.log("Tablica wszystkich danych studentów:", studenci);
console.log("Tablica z imionami studentów:", imionaStudentow);
