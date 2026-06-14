import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import claudecode from '../app/assets/svg/skills/claudecode.svg';
import codex from '../app/assets/svg/skills/codex.svg';
import css from '../app/assets/svg/skills/css.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import git from '../app/assets/svg/skills/git.svg';
import go from '../app/assets/svg/skills/go.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import nodejs from '../app/assets/svg/skills/nodejs.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'tailwind':
      return tailwind;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'git':
      return git;
    case 'bootstrap':
      return bootstrap;
    case 'docker':
      return docker;
    case 'go':
      return go;
    case 'figma':
      return figma;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'node js':
      return nodejs;
    case 'codex':
      return codex;
    case 'claude code':
      return claudecode;
    default:
      break;
  }
}
