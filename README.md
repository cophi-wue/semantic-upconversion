# Semantic Upconversion of German Dime Novels

Documentation website for the project Erschließung und Strukturanalyse der Heftromane der Deutschen Nationalbibliothek at the Chair of Computational Philology, University of Würzburg, in cooperation with Text+.


The project develops methods for the semantic classification and structural analysis of German dime novels. The website documents the dataset, annotation guidelines, processing pipeline, evaluation resuts, and project team.

## View the website

The published website is available at:

<https://cophi-wue.github.io/semantic-upconversion/>

## Build locally

Install [Quarto 1.10.18](https://quarto.org/docs/get-started/) or a newer version, then clone the repository:

```powershell
git clone https://github.com/cophi-wue/semantic-upconversion.git
cd semantic-upconversion
```

Preview the website locally:

```powershell
quarto preview
```

Render a complete static copy into `docs/`:

```powershell
quarto render
```

No Python environment is required to build the website.

## Website source

The pages are written in Quarto Markdown:

- `index.qmd` - project overview
- `dataset.qmd` - corpus and dataset description
- `guidelines.qmd` - taxonomy and annotation guidelines
- `pipeline.qmd` - semantic upconversion workflow
- `evaluation.qmd` - evaluation and benchmarking results
- `publications` - publications on the project (tba)
- `team.qmd` - project team
- `impressum.qmd` - legal information

Images and other site assets are stored in `images/`. The visual design is defined in `styes.css` and configured in `_quarto.yaml`.

## Deploy with GitHub Pages

The repository publishes the rendered `docs/` directory through GitHub Pages:

1. Run `quarto render`.
2. Commit the updated contents of `docs/`.
3. Push the commit to the `main` branch.
4. In the repository settings, open **Pages** and choose **Deploy from a branch**.
5. Select the `main` branch and the `/docs` folder, then save.

GitHub Pages will publish the site after the build finishes. The exact URL depends on the repository name and GitHub organization.

## Copyright and access

The source corpus is protected by copyright and is not distributed through this repository. The website contains project documentation, metadata, and evaluation material that can be shared publicly.
