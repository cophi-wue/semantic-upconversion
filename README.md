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

The repository contains three website designs:

```powershell
# Original production design
quarto preview

# Editorial playground design
quarto preview --profile playground

# Fresh blue, mint, and coral design
quarto preview --profile fresh
```

Each command starts a local preview server and opens a browser window. 

The design profiles are configured in:

- `_quarto.yaml` - original website configuration
- `_quarto-playground.yml` - playground configuration
- `_quarto-fresh.yml` - fresh design configuration

Their stylesheets are:

- `docs/styles.css` - rendered original site stylesheet
- `styles-playground.css` - playground stylesheet
- `fresh-design/styles.css` - fresh design stylesheet

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
quarto render --profile fresh
```

The alternative rendered sites are written to `_playground/` and `_fresh/`. These folders are local comparison outputs and are ignored by Git. The original `docs/` output is kept because it is the current GitHub Pages publication target.
