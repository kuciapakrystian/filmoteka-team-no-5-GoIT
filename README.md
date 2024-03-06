# parcel-project-template

## Zalezności

Na komputerze musi być zainstalowana LTS-wersja [Node.js](https://nodejs.org/en/).

## Przed rozpoczęciem pracy

Jeden raz na projekt zainstalować wszystkie zalezności.

```shell
npm ci
```

### Praca

Włączyć tryp pracy.

```shell
npm run dev
```

W przeglądarce przejść na [http://localhost:1234](http://localhost:1234).

### Deploy

Kod będzie automatycznie się zbierać i robić deploy aktualnej wersji projektu 
na GitHub Pages, w gałąź `gh-pages`, za kazdym razem jeśli zostaną wprowadzone zmiany w `main`. Na przykład, po bezpośrenim push lub po przyjęciu pull-request. Aby to działało musimy w pliku `package.json` zmienić pole `homepage` i skrypt
`build`, zmieniając `nazwe_uzytkownika` i `nazwe_repozytorium` na swoje.

```json
"homepage": "https://nazwa_uzytkownika.github.io/nazwa_repozytorium",
"scripts": {
  "build": "parcel build src/*.html --public-url /nazwa_repozytorium/"
},
``

Po jakimś czasie stronę mozna będzie zobaczyć na zywo pod adresem który 
jest wpisany w poprawione właściwości `homepage`, na przykład
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Pliki i folderzy

- Wszystkie partials plików styłów powinny być w folderze `src/sass` i importować się w
  `src/sass/main.scss`
- Zdjęcia dodawajcie w folder `src/images`, przed tym zoptymizujcie te zdjęcia które dodajecie. Program po prostu 
  kopiuje wykorzystane zdjęcia aby system nie musiał optymizować je, bo na słabych komputerach 
  to moze zająć duzo czasu.
