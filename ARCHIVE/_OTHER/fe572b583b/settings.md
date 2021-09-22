1. Make sure that `...\cygwin\bin` is in your `PATH`.
2. Modify your `"latex-workshop.latex.tools"` configuration, or specifically the `latexmk` tool, as follows:

```json
{
  "latex-workshop.latex.tools": [
    {
      "name": "latexmk",
      "command": "bash",
      "args": [
        "-c",
        "latexmk -synctex=1 -interaction=nonstopmode -file-line-error -pdf -outdir=\"`cygpath \"%OUTDIR%\"`\" \"`cygpath -u \"%DOC%\"`\" | sed 's#/cygdrive/\\([a-zA-Z]\\)/#\\1:/#g' && (gunzip -kf %DOCFILE%.synctex.gz && sed 's#/cygdrive/\\([a-zA-Z]\\)/#\\1:/#g' <%DOCFILE%.synctex | gzip -c - >%DOCFILE%.synctex.gz ; rm -f %DOCFILE%.synctex)"
      ],
      "env": {}
    }
  ]
}
```

Description of what's going on:

- `-outdir=\"`cygpath \"%OUTDIR%\"`\"` specifies the output directory while mapping the path into Cygwin naming
- `\"`cygpath -u \"%DOC%\"`\"` specifies the input file while mapping the path into Cygwin naming
- `| sed 's#/cygdrive/\\([a-zA-Z]\\)/#\\1:/#g'` converts the output to use Windows naming, so that LaTeX Workshop can parse it. For example, this enables clicking on error messages to go to the correct line.
- `(gunzip -kf %DOCFILE%.synctex.gz && sed 's#/cygdrive/\\([a-zA-Z]\\)/#\\1:/#g' <%DOCFILE%.synctex | gzip -c - >%DOCFILE%.synctex.gz ; rm -f %DOCFILE%.synctex)` converts the `synctex` file to use Windows naming (and ignores error messages), so that you can jump back and forth between corresponding parts of the PDF and TeX files.
