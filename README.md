# [Periodic Grid](http://periodic-grid.surge.sh) ⚗️

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman//blob/master/LICENSE)

Utilizes css grid, css modules, viewport units and typescript.

## Usage

```
yarn install
yarn start
```

## Documentation

If you wish to deploy to [surge.sh](https://surge.sh) just edit `domain` variable in package.json to your liking and run `yarn deploy` command.

```
"domain": "periodic-grid.surge.sh"
```

Element JSON example

```
  {
    "name": "Hydrogen",
    "appearance": "colorless gas",
    "atomic_mass": 1.008,
    "boil": 20.271,
    "category": "diatomic nonmetal",
    "color": null,
    "density": 0.08988,
    "discovered_by": "Henry Cavendish",
    "melt": 13.99,
    "molar_heat": 28.836,
    "named_by": "Antoine Lavoisier",
    "number": 1,
    "period": 1,
    "phase": "Gas",
    "source": "https://en.wikipedia.org/wiki/Hydrogen",
    "spectral_img": "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
    "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    "symbol": "H",
    "xpos": 1,
    "ypos": 1,
    "shells": [1]
  }
```

## Credits

- [Bowserinator](https://github.com/Bowserinator) for his work on [json periodic table of elements](https://github.com/Bowserinator/Periodic-Table-JSON)
- [Roboto font](https://fonts.google.com/specimen/Roboto)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
