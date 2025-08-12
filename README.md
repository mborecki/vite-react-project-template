# Szablon dla projektów

## Ograniczenia :warning:
 * szablon zakłada architekturę SPA + API **bez Server Side Renderingu**

## Technologie/elementy

Szablon przygotowany z myslą o pracy w środowisku:
 * node 22.14.0
 * yarn 4 (jest cześcią repo)

* Bazowa struktura: [vite.dev](https://vite.dev/)
* Frontend:
  * [react](https://react.dev/)
  * Style: [CSS Modules](https://vite.dev/guide/features.html#css-modules)
  * Wykonywanie zapytań do serwera: [Axios HTTP](https://axios-http.com/)
  * Obsługa komunikacji z serwerem: [TanStack Query](https://tanstack.com/query/v5)
  * Routing: [react Router](https://reactrouter.com/)
  * Podstawowe Komponenty: [React Aria](https://react-spectrum.adobe.com/react-aria/getting-started.html)
  * Obsługa formularzy: [React Hook Form](https://react-hook-form.com/)
* Backend:
  * Podstawowa bilbioteka: [Expressjs](https://expressjs.com/)
    * Obsługa zapytań CORS: [cors](https://www.npmjs.com/package/cors)
  * Baza danych: [MongoDB](https://www.mongodb.com/)
    * Biblioteka: [mongoose](https://mongoosejs.com/)
    * Podgląd w środowisku developerskim: [mongo-express](https://hub.docker.com/_/mongo-express)
* Testy:
  * Wizualne: [Storybook](https://storybook.js.org/)
  * Jednostkowe: [Vitest](https://vitest.dev/)
  * Mockowanie komunikacji z serwerem [Mock Service Worker](https://mswjs.io/)
  * UI: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  * Testy obsługi zapytań: [supertest](https://www.npmjs.com/package/supertest)
  * Testy operacji na bazie danych: [vitest-mongodb](https://github.com/enochchau/vitest-mongodb)


## Polecenia

* `yarn dev` - serwer developerski frontendu
* `yarn server:dev` - server developerski backendu
* `yarn storybook` - server developerski Storybook
* `yarn test` - testy jednostkowe frontend + backend
* `yarn test:all` - testy jednostrowe frontend + backend + storybook

------------------------------------------------

## Środowiska

### Developerskie

Szablon zakłada że developer ma lokalnie uruchomionego Dockera

Inicjalizacja bazy danych:
```
docker compose -p template-project -f ./.docker/dev/docker-compose.yml up --build -d
```

## Ustawienia edytora (VS Code)

### Nowy plik `*.stories.ts(x)`

Jeżeli kożystamy z VS Code i mamy zainstalowaną wtyczkę "Auto Snippet" (jest na liście zalecanych w ustawieniach projektu) to po stworzeniu nowego pliku `*.stories.ts(x)` zostanie do niego dodane podstawowy kod.

## How to

### Integracja React Aria z React Hook Form

Przykład: `src\components\widgets\name-form\name-form.tsx`

#### Źródła

* https://react-spectrum.adobe.com/react-aria/forms.html#react-hook-form


---------------------------------------
## Testy:

### Mockowanie API w testach aplikacji frontendowej

Przykłady:
 * `src\network\requests\get-todolist.test.ts`
 * `src\network\requests\post-todolist-item.test.ts`

#### Źródła

* [MSW Intercepting request](https://mswjs.io/docs/http/intercepting-requests/)

----------------------------------------------------------------------------------

### Testy react hooks z react-query

Przykład: `src\modules\todolist\use-todolist.test.tsx`

#### Źródła

* [TanStack Query Testing](https://tanstack.com/query/v5/docs/framework/react/guides/testing)

### Testowanie obsługi zapytań w API

Przykład:  `server\api\router.test.ts`

#### Źródła

 * [Supertest](https://www.npmjs.com/package/supertest)


### Testowanie obsługi bazy danych

Przykłady:
 * `server\selectors\get-todolist.test.ts`
 * `server\selectors\add-todolist-item.test.ts`

#### Źródła

 * [vitest-mongodb](https://github.com/enochchau/vitest-mongodb)
