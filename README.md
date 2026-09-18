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

The repository uses the editorial playground design as the production design:

```powershell
# Production design
quarto preview

# Profile alias for the same design
quarto preview --profile playground

```

Each command starts a local preview server and opens a browser window.

The design profiles are configured in:

- `_quarto.yaml` - production website configuration
- `_quarto-playground.yml` - playground profile configuration

Their stylesheets are:

- `styles-playground.css` - production stylesheet

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

To render the production site into `docs/`:

```powershell
quarto render
```

To render the alternative designs:

```powershell
quarto render --profile playground
```

The profile output is written to `_playground/`, which is ignored by Git. The `docs/` output is the GitHub Pages publication target.

The base `_quarto.yaml` loads the playground stylesheet as the production design.
