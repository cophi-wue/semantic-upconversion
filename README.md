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

Each command starts a local preview server and opens a browser window. The address usually begins with `http://localhost`. The preview is local to the computer running Quarto; it does not change the GitHub website.

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

After editing, preview the relevant design and check the page at desktop and mobile widths. Stop the preview server with `Ctrl+C`.

## Collaboration

Please do not work directly on `main`. Create a branch for each change:

```powershell
git switch -c improve-page-layout
```

Make and preview your changes, then check the repository status:

```powershell
git status
git diff
```

Commit focused changes with a short message:

```powershell
git add index.qmd styles-playground.css
git commit -m "Improve homepage layout"
git push -u origin improve-page-layout
```

Then open a pull request on GitHub. Describe what changed and which preview command reviewers should use. Keep `main` in a working state so it can be published at any time.

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

## GitHub Pages

The repository currently contains the rendered original site in `docs/`. Once GitHub Pages is configured for this repository, set the publishing source to the `main` branch and the `/docs` folder. A later improvement can move rendering into GitHub Actions so that GitHub renders the site consistently after changes are merged.

Before making the site public, check that all text, images, logos, and links are permitted for publication. Do not commit copyrighted EPUB files, full-text datasets, credentials, local virtual environments, or other private material.
