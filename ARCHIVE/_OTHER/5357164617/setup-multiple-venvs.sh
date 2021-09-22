#!/bin/bash

#
# Setup multiple Pythons for On the Plates
#

# VARIABLES
PYTHON27_VERSION='2.7.4'
PYTHON27_NAME="CPython-$PYTHON27_VERSION"
PYTHON27_BIN="~/.pythonz/pythons/$PYTHON27_NAME/bin/python"
PYTHON27_VENV_DIR="~/.pythonz/venvs/$PYTHON27_NAME"

PYPY_VERSION='1.9'
PYPY_NAME="PyPy-$PYPY_VERSION"
PYPY_BIN="~/.pythonz/pythons/$PYPY_NAME/bin/python"
PYPY_VENV_DIR="~/.pythonz/venvs/$PYPY_NAME"

PROJECT_NAME="example"

# Create directory for virtualenvs
mkdir -p $PYTHON27_VENV_DIR
mkdir -p $PYPY_VENV_DIR

# Create virtualenvs
virtualenv -p $PYTHON27_BIN $PYTHON27_VENV_DIR/$PROJECT_NAME
virtualenv -p $PYPY_BIN $PYPY_VENV_DIR/$PROJECT_NAME
