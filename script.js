//Punkt 1,2 i 3

// Definicja funkcji przy użyciu metody map() i funkcji strzałkowej
const podwajanieWartosciWTablicy = (tablica) => {
  // Używamy metody map() do zwrócenia nowej tablicy,
  // gdzie każda liczba jest podwojona
  let podwojoneLiczby = tablica.map((liczba) => liczba * 2);
  return podwojoneLiczby;
};

// Przykładowe użycie funkcji
const daneWejsciowe = [1, 2, 3, 4, 5];

// Wywołujemy funkcję podwojTablice() i przypisujemy wynik do zmiennej
const wynik = podwajanieWartosciWTablicy(daneWejsciowe);

// Wyświetlamy oryginalną tablicę i tablicę podwojoną w konsoli
console.log("Tablica wejściowa:", daneWejsciowe);
console.log("Tablica z podwojonymi wartościami:", wynik);

//Punkt 4,5 i 6

// Definicja funkcji przy użyciu metody map() i funkcji strzałkowej
const pobierzImionaStudentow = (studenci) => {
  // Używamy metody map() do zwrócenia nowej tablicy zawierającej tylko imiona
  let imionaStudentow = studenci.map((student) => student.imie);
  return imionaStudentow;
};

// Przykładowa tablica obiektów reprezentujących studentów
const studenci = [
  { nr: 1, imie: "Piotr", wiek: 28 },
  { nr: 2, imie: "Adam", wiek: 25 },
  { nr: 3, imie: "Grzegorz", wiek: 42 },
  { nr: 4, imie: "Rafał", wiek: 31 },
];

// Wywołujemy funkcję pobierzImionaStudentow() i przypisujemy wynik do zmiennej
const imionaStudentow = pobierzImionaStudentow(studenci);

// Wyświetlamy oryginalną tablicę obiektów studentów oraz tablicę zawierającą tylko imiona w konsoli
console.log("Tablica wszystkich danych studentów:", studenci);
console.log("Tablica z imionami studentów:", imionaStudentow);
