# Voornaam Familienaam (Studentennummer)

> Duid aan welke vakken je volgt en vermeld voor deze vakken de link naar jouw GitHub repository. In het geval je slechts één vak volgt, verwijder alle inhoud omtrent het andere vak.
> Verwijder alle instructies (lijnen die starten met >)

- [x] Front-end Web Development
  - [GitHub repository](https://github.com/Web-IV/2223-frontendweb-AchillesVan)
  - [Online versie](https://achillesvan.github.io/ziekenhuis/)
- [x] Web Services: GITHUB URL
  - [GitHub repository](https://github.com/Web-IV/2223-webservices-AchillesVan)
  - [Online versie](github.com/HOGENT-Web)

**Logingegevens**

- Gebruikersnaam/e-mailadres:
- Wachtwoord:

> Vul eventueel aan met extra accounts voor administrators of andere rollen.

## Projectbeschrijving

> Omschrijf hier duidelijk waarover jouw project gaat. Voeg een domeinmodel (of EERD) toe om jouw entiteiten te verduidelijken.

## Screenshots

> Voeg enkele (nuttige!) screenshots toe die tonen wat de app doet.

## Behaalde minimumvereisten

> Duid per vak aan welke minimumvereisten je denkt behaald te hebben

### Front-end Web Development

- **componenten**

  - [x] heeft meerdere componenten - dom & slim (naast login/register)
  - [x] definieert constanten (variabelen, functies en componenten) buiten de component
  - [x] minstens één form met validatie (naast login/register)
  - [x] login systeem (eigen of extern zoals bv. Auth0)
<br />

- **routing**
  - [x] heeft minstens 2 pagina's (naast login/register)
  - [ ] routes worden afgeschermd met authenticatie en autorisatie
<br />

- **state-management**

  - [x] meerdere API calls (naast login/register)
  - [x] degelijke foutmeldingen indien API call faalt
  - [x] gebruikt useState enkel voor lokale state
  - [x] gebruikt Context, useReducer, Redux… voor globale state
<br />

- **hooks**

  - [x] kent het verschil tussen de hooks (useCallback, useEffect…)
  - [x] gebruikt de hooks op de juiste manier
<br />

- **varia**
  - [ ] een aantal niet-triviale testen (unit en/of e2e en/of ui)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige README.md
  - [x] volledig en tijdig ingediend dossier


### Web Services

- **datalaag**

  - [x] voldoende complex (meer dan één tabel)
  - [x] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [ ] heeft migraties
  - [ ] heeft seeds
<br />

- **repositorylaag**

  - [x] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [x] mapt OO-rijke data naar relationele tabellen en vice versa
<br />

- **servicelaag met een zekere complexiteit**

  - [x] bevat alle domeinlogica
  - [x] bevat geen SQL-queries of databank-gerelateerde code
<br />

- **REST-laag**

  - [x] meerdere routes met invoervalidatie
  - [x] degelijke foutboodschappen
  - [x] volgt de conventies van een RESTful API
  - [x] bevat geen domeinlogica
  - [ ] degelijke authorisatie/authenticatie op alle routes
<br />

- **varia**
  - [ ] een aantal niet-triviale testen (min. 1 controller >=80% coverage)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige `README.md`
  - [x] maakt gebruik van de laatste ES6-features (object destructuring, spread operator...)
  - [x] volledig en tijdig ingediend dossier


## Projectstructuur

### Front-end Web Development

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns, hiërarchie van componenten, state...)?
Ik heb de applicatie gestructureerd in verschillende mappen. De map api bevat de verschillende hooks om calls naar de api te maken. De map componenten bevat de verschillende componenten om data weer te geven, zoals de de NavBar, DoctorCard, VacatureCard. De map contexts bevat de Auth0Provider, die ervoor zorgt dat de authenticatie werkt, behalve in de online versie (zie gekende bugs). De map pages bevat de verschillende pagina-elementen, die gebruikt worden bij de routing.

### Web Services

> Hoe heb je jouw applicatie gestructureerd (mappen, design patterns...)?

## Extra technologie

### Front-end Web Development

Als extra technologie voor de front-end heb ik Chakra UI https://www.npmjs.com/package/@chakra-ui/react) gebruikt. 
Chakra UI bevat componenten die het makkelijker maken om je UI op te bouwen. Het bevat componenten voor layout, bijvoorbeeld Box, Flex, Stack..., forms, zoals Button, Checkbox, Radio, Select..., alsook componenten om data weer te geven, zoals Card, List, Table...

### Web Services

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!
Als extra technologie voor de back-end heb ik Sequelize (https://www.npmjs.com/package/sequelize) gebruikt. Sequelize is een Object-relational Mapping-tool voor verschillende databanktechnologieën, waaronder MySQL, waar ik gebruik van maak, Postgres, Microsoft SQL Server...
Om te beginnen maak je een Sequelize-object aan, waaraan je de info van de databank (host, poort, naam, gebruikersnaam, wachtwoord...) meegeeft. Daarna gebruik je dit object om aan de hand van de define-methode modellen definieert. Deze modellen komen overeen met de verschillende tabellen van je databank. Eens deze modellen gedefinieerd zijn, kun je ze gebruiken om bewerkingen uit te voeren op de databank.

## Testresultaten

### Front-end Web Development

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen

### Web Services

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen + voeg een screenshot van de coverage en uitvoering toe

## Gekende bugs

### Front-end Web Development

Authenticatie werkt niet voor de online versie, doordat deze versie gebruik maakt van GitHub Pages.
Als we op de login-knop klikken, wordt er geprobeerd naar de login-pagina van Auth0 te navigeren,
maar doordat het adres van de pagina https://AchillesVan.github.io/ziekenhuis is, denkt GitHub dat we naar een GitHub Page proberen te navigeren.
Deze page bestaat echter niet, waardoor we een Error 404 krijgen.

### Web Services

> Zijn er gekende bugs?

## Wat is er verbeterd/aangepast?

> Deze sectie is enkel voor 2e zittijd, verwijder deze in 1e zittijd.

### Front-end Web Development

- Dit en dat

### Web Services

- Oh en dit ook
