# Semantic Upconversion of German Dime Novels

Documentation website for the project **Erschließung und Strukturanalyse der Heftromane der Deutschen Nationalbibliothek** at the Chair of Computational Philology, University of Würzburg, in cooperation with Text+.

## Local setup

Install [Quarto](https://quarto.org/docs/get-started/) and clone the repository:

```powershell
git clone https://github.com/cophi-wue/semantic-upconversion.git
cd semantic-upconversion
```

Open the project in VS Code or another editor. No Python environment is required to preview the website.

## Preview the designs

The repository contains the production design and the editorial playground design:

```powershell
# Original production design
quarto preview

# Editorial playground design
quarto preview --profile playground

```

Each command starts a local preview server and opens a browser window.

The design profiles are configured in:

- `_quarto.yaml` - original website configuration
- `_quarto-playground.yml` - playground configuration

Their stylesheets are:

- `docs/styles.css` - rendered original site stylesheet
- `styles-playground.css` - playground stylesheet

## Editing pages

The website pages are Quarto Markdown files:

- `index.qmd` - project overview
- `dataset.qmd` - corpus description
- `guidelines.qmd` - taxonomy and annotation guidelines
- `pipeline.qmd` - upconversion workflow
- `evaluation.qmd` - evaluation results
- `team.qmd` - project team
- `impressum.qmd` - legal information

Images are stored in `images/`.

## Rendering

To render the original site into `docs/`:

```powershell
quarto render
```

To render the alternative designs:

```powershell
quarto render --profile playground
```

The playground output is written to `_playground/`, which is ignored by Git. The original `docs/` output is kept because it is the current GitHub Pages publication target.

To use the plain Quarto theme without custom CSS, run `quarto preview` or `quarto render` without a profile. The base `_quarto.yaml` uses the Cosmo theme and does not load a custom stylesheet.
