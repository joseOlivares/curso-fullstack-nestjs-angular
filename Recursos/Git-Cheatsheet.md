# ⚡Git Cheat Sheet

Guía rápida de comandos de Git

---

##  ⚙️ GIT CONFIG

```bash
git config --global user.name <name>
```
Define el nombre del autor para todos los commits del usuario actual.

```bash
git config --global user.email <email>
```
Define el email del autor para todos los commits del usuario actual.

```bash
git config --global alias.<alias-name> "<git-command>"
```
Crea un alias para un comando Git.  
Ejemplo: `alias.glog "log --graph --oneline"` permite usar `git glog`.

```bash
git config --system core.editor <editor>
```
Establece el editor de texto para todos los usuarios en la máquina.

```bash
git config --global --edit
```
Abre el archivo global de configuración en un editor de texto.

---

## 🎯 GIT BASICS

```bash
git init <directory>
```
Crea un repositorio Git vacío en el directorio especificado.

```bash
git clone <repo>
```
Clona el repositorio ubicado en `<repo>`.

```bash
git status
```
Muestra archivos staged, unstaged y untracked.

```bash
git add <directory | file>
```
Stage de todos los cambios del directorio o archivo.

```bash
git commit -m "<message>"
```
Crea un commit con el mensaje proporcionado.

```bash
git commit --amend
```
Reemplaza el último commit con los cambios staged actuales.

---

## ✨ GIT BRANCHES

```bash
git branch
```
Lista todas las ramas del repositorio.

```bash
git checkout -b <branch>
```
Crea y cambia a una nueva rama.

```bash
git merge <branch>
```
Fusiona la rama `<branch>` con la actual.

```bash
git rebase <base>
```
Rebasa la rama actual sobre `<base>`.

```bash
git rebase -i <base>
```
Rebase interactivo.

```bash
git reflog
```
Muestra el historial de cambios de HEAD.

---

## ↪️ UNDOING CHANGES

```bash
git reset <file>
```
Quita el archivo del staging area sin afectar el working directory.

```bash
git reset
```
Restaura el staging area al último commit.

```bash
git reset --hard
```
Restaura staging y working directory al último commit.

```bash
git reset <commit>
```
Mueve HEAD al commit especificado (working directory se mantiene).

```bash
git reset --hard <commit>
```
Lo mismo que anterior, pero sobrescribe el working directory.

```bash
git clean -n
```
Muestra qué archivos serían eliminados (modo prueba).

```bash
git clean -f
```
Elimina archivos sin seguimiento.

---

## ☁︎ REMOTE REPOSITORIES

```bash
git remote add <name> <url>
```
Agrega una conexión a un repositorio remoto.

```bash
git fetch <remote> <branch>
```
Trae una rama específica. Omite `<branch>` para traer todas.

```bash
git pull <remote>
```
Trae y fusiona el branch remoto actual.

```bash
git pull --rebase <remote>
```
Trae y rebasa el branch remoto.

```bash
git push <remote> <branch>
```
Envía la rama al remoto. Crea la rama si no existe en el remoto.

```bash
git push <remote> --force
```
Forza el push (no recomendado salvo que sepas lo que haces).

```bash
git push <remote> --all
```
Push de todas las ramas locales al remoto.

```bash
git push <remote> --tags
```
Envía todas las etiquetas locales al remoto.

---

## ⚖ GIT DIFF

```bash
git diff
```
Muestra los cambios no staged.

```bash
git diff --cached
```
Muestra cambios staged en comparación al último commit.

```bash
git diff HEAD
```
Muestra diferencia entre working directory y último commit.

---

## 📑 GIT LOG

```bash
git log
```
Historial completo de commits.

```bash
git log --oneline
```
Commits en una sola línea.

```bash
git log --stat
```
Muestra archivos cambiados y líneas agregadas/eliminadas.

```bash
git log -p
```
Muestra el diff completo de cada commit.

```bash
git log --author="<pattern>"
```
Busca commits por autor.

```bash
git log --grep="<pattern>"
```
Busca commits por mensaje.

```bash
git log <since>..<until>
```
Commits entre dos referencias (commits, HEAD, ramas).

```bash
git log -- <file>
```
Commits que modificaron un archivo.

```bash
git log --graph --decorate
```
Dibuja grafo de commits con nombres de ramas/tags.

```bash
git log -<limit>
```
Muestra solo los últimos N commits.