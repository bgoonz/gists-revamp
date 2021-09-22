set backspace=2         " backspace in insert mode works like normal editor
syntax on               " syntax highlighting
filetype indent on      " activates indenting for files
set autoindent          " auto indenting
set number              " line numbers
colorscheme desert      " colorscheme desert
set nobackup            " get rid of anoying ~file
set ignorecase          " Ignore case when searching
set hlsearch            " Highlight search results
set smartcase           " When searching try to be smart about cases
set encoding=utf8       " Set utf8 as standard encoding and en_US as the standard language

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" => Files, backups and undo
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Turn backup off, since most stuff is in SVN, git et.c anyway...
set nobackup
set nowb
set noswapfile