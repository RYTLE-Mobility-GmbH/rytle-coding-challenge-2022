#!/bin/sh
# Create PDF from Markdown using pandoc

pandoc Coding_Challenge_2023.md -V geometry:margin=2.75cm -o Coding_Challenge_2023.pdf
