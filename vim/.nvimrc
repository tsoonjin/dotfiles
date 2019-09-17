filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-fugitive'
Plugin 'tpope/vim-sensible'
Plugin 'scrooloose/syntastic'
Plugin 'kien/ctrlp.vim'
Plugin 'majutsushi/tagbar'
Plugin 'vim-scripts/TeX-9'
Plugin 'tpope/vim-surround'
Plugin 'honza/vim-snippets'
Plugin 'tomtom/tcomment_vim'
Plugin 'ap/vim-buftabline'
Plugin 'itchyny/lightline.vim'
Plugin 'ap/vim-css-color'
Plugin 'Yggdroot/indentLine'
Plugin 'Valloric/YouCompleteMe'



call vundle#end()
filetype plugin indent on

" Syntastic
let g:syntastic_cpp_compiler_options = '-std=c++11 -stdlib=libc++'
let g:syntastic_python_checkers = ['flake8']
let g:syntastic_python_flake8_args = "--max-line-length=100"
let g:syntastic_always_populate_loc_list = 1

" Ctrl-P
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'

" Tex-9
let g:tex_flavor = 'latex'
let g:tex_nine_config = {
    \'compiler': 'pdflatex',
    \'viewer': {'app': 'evince', 'target': 'pdf'},
    \'leader': ';',
\}

" Use deoplete.
let g:deoplete#enable_at_startup = 1

" Tagbar
nmap <F8> :TagbarToggle<CR>

" General
syntax on
set incsearch
set autoindent
set cindent
set showmatch
set relativenumber
set backspace=indent,eol,start
set list
set listchars=tab:>-,nbsp:_,trail:.
set pastetoggle=<F2>
let g:indentLine_noConcealCursor=2

" Colors
set t_Co=256
colorscheme xoria256
set colorcolumn=100
highlight ColorColumn ctermbg=7

" Mapping
let mapleader="Space"
nnoremap <F3> :YcmCompleter GoTo<CR>
nnoremap ; :
nnoremap gcp "*p

" Basic indentation
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab

" Navigation mapping
nnoremap <C-j> <C-W><C-J>
nnoremap <C-k> <C-W><C-K>
nnoremap <C-l> <C-W><C-L>
nnoremap <C-h> <C-W><C-H>

" Split
set splitbelow
set splitright

autocmd FileType latex,tex,md,markdown,text setlocal spell

" YCM
let g:ycm_global_ycm_extra_conf = '~/.vim/bundle/YouCompleteMe/.ycm_extra_conf.py'
let g:ycm_collect_identifiers_from_comments_and_strings = 0

let g:ycm_min_num_of_chars_for_completion=2

let g:ycm_cache_omnifunc=0

let g:ycm_seed_identifiers_with_syntax=1

let g:ycm_complete_in_comments = 1
let g:ycm_complete_in_strings = 1
let g:ycm_autoclose_preview_window_after_completion = 1
let g:ycm_autoclose_preview_window_after_insertion = 1

let g:ycm_python_binary_path = 'python'